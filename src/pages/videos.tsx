import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Leaf, Youtube, ExternalLink, Eye, Clock, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

const YOUTUBE_URL = "https://www.youtube.com/@botanybytes-07";
const SUBSCRIBE_URL = "https://www.youtube.com/@botanybytes-07?sub_confirmation=1";
const TELEGRAM_URL = "https://t.me/botanybytes001";
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  views: number;
  description: string;
  isShort: boolean;
}

type Filter = "all" | "videos" | "shorts";

function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function VideoCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full aspect-video rounded-3xl" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>
    </div>
  );
}

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      key={video.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
      data-testid={`video-card-${video.id}`}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className="block relative aspect-video rounded-3xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-500"
        data-testid={`video-link-${video.id}`}
      >
        {!imgError ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <Leaf className="w-12 h-12 text-primary/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
            <PlayCircle className="w-7 h-7 fill-current" />
          </div>
        </div>
        {video.isShort && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Clapperboard className="w-3 h-3" /> Short
          </div>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-3 text-xs text-white font-medium">
          {video.views > 0 && (
            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
              <Eye className="w-3 h-3" /> {formatViews(video.views)}
            </span>
          )}
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" /> {timeAgo(video.publishedAt)}
          </span>
        </div>
      </a>

      <div className="px-1 flex-1 flex flex-col">
        <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
          {video.isShort ? "Short" : "Video"}
        </div>
        <h3 className="font-serif text-lg leading-snug text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2 mb-3">
          <a href={video.url} target="_blank" rel="noreferrer">
            {video.title}
          </a>
        </h3>
        <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-testid={`video-watch-${video.id}`}
        >
          <ExternalLink className="w-3.5 h-3.5" /> Watch on YouTube
        </a>
      </div>
    </motion.div>
  );
}

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Videos", value: "videos" },
  { label: "Shorts", value: "shorts" },
];

export default function Videos() {
  const [filter, setFilter] = useState<Filter>("all");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/api/videos`);
      if (!res.ok) throw new Error("Failed to fetch videos");
      return res.json() as Promise<{ videos: Video[] }>;
    },
    staleTime: 10 * 60 * 1000,
  });

  const videos = data?.videos ?? [];
  const filtered = videos.filter((v) => {
    if (filter === "videos") return !v.isShort;
    if (filter === "shorts") return v.isShort;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-primary group cursor-pointer" data-testid="nav-home">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-serif font-semibold text-2xl tracking-tight">Botany Bytes</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden sm:flex hover:text-primary hover:bg-primary/5">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md shadow-primary/20">
              <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                <Youtube className="w-4 h-4 mr-2" />
                Subscribe
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium border border-secondary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Updated automatically from YouTube
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 tracking-tight">
              Video <span className="italic font-light text-foreground/80">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Every video, automatically pulled from the Botany Bytes channel. New uploads appear here within minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 pb-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="flex gap-2 p-1.5 bg-card rounded-2xl border border-border/60 shadow-sm">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  data-testid={`filter-${f.value}`}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    filter === f.value
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {f.label}
                  {!isLoading && data && (
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${filter === f.value ? "bg-primary-foreground/20" : "bg-muted"}`}>
                      {f.value === "all"
                        ? videos.length
                        : f.value === "videos"
                        ? videos.filter((v) => !v.isShort).length
                        : videos.filter((v) => v.isShort).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <Button variant="outline" asChild className="rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40">
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" data-testid="link-channel">
                <Youtube className="w-4 h-4 mr-2" /> View Channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 pb-32">
        <div className="container mx-auto">
          {isError && (
            <div className="text-center py-24 text-muted-foreground">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-primary/20" />
              <p className="text-lg font-light">Could not load videos right now. Try again shortly.</p>
              <Button variant="outline" asChild className="mt-6 rounded-full border-primary/20">
                <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">Visit YouTube Channel</a>
              </Button>
            </div>
          )}

          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <VideoCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!isLoading && !isError && filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-primary/20" />
              <p className="text-lg font-light">No {filter === "shorts" ? "Shorts" : "videos"} yet.</p>
            </div>
          )}

          {!isLoading && !isError && filtered.length > 0 && (
            <AnimatePresence mode="popLayout">
              <motion.div
                key={filter}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filtered.map((video, i) => (
                  <VideoCard key={video.id} video={video} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-primary">
            <div className="w-8 h-8 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/5">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight">Botany Bytes</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
