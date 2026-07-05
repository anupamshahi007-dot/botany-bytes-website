import { motion } from "framer-motion";
import { PlayCircle, Leaf, BookOpen, Microscope, ArrowRight, Youtube, Sprout, Video, Users, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const YOUTUBE_URL = "https://www.youtube.com/@botanybytes-07";
const SUBSCRIBE_URL = "https://www.youtube.com/@botanybytes-07?sub_confirmation=1";
const TELEGRAM_URL = "https://t.me/botanybytes001";

const VIDEOS = [
  {
    title: "NEET 2026 Botany PYQs — Most Important Questions",
    url: "https://www.youtube.com/@botanybytes-07/videos",
    image: "/leaf.png"
  },
  {
    title: "NEET 2026 Botany Most Important Chapters | 90% Questions",
    url: "https://www.youtube.com/@botanybytes-07/videos",
    image: "/tulsi.png"
  },
  {
    title: "10 Common Weed Plants You Must Know | 10 Aise Paudhe",
    url: "https://www.youtube.com/@botanybytes-07/videos",
    image: "/hero.png"
  },
  {
    title: "5 Best Plants That Grow Without Sunlight",
    url: "https://www.youtube.com/@botanybytes-07/videos",
    image: "/hero.png"
  },
  {
    title: "Tulsi — The Queen of Herbs",
    url: "https://www.youtube.com/@botanybytes-07/videos",
    image: "/tulsi.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary group cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-serif font-semibold text-2xl tracking-tight">Botany Bytes</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden sm:flex hover:text-primary hover:bg-primary/5">
              <Link href="/videos">All Videos</Link>
            </Button>
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

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 min-h-[95vh] flex items-center relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium border border-secondary/20 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              240+ Students Growing Together
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1] tracking-tight">
              Explore the <br/>
              <span className="italic text-foreground/90 font-light">living world</span><br/>
              of plant science.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed font-light">
              Step into a warm botanical library. From NEET exam prep to the medicinal wonders of household plants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-base h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105">
                <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-14 px-8 rounded-full border-primary/20 text-primary hover:bg-primary/5 transition-all hover:border-primary/40">
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-background">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity hover:opacity-0 duration-700" />
              <img 
                src="/hero.png" 
                alt="Botanical library" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-3xl shadow-xl border border-border/50 max-w-[240px] z-20">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Flower2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif font-semibold text-lg text-primary">New Videos</div>
                  <div className="text-sm text-muted-foreground">Every week</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About The Channel */}
      <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src="/leaf.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-background">The Roots of Botany Bytes</h2>
              <p className="text-lg opacity-90 leading-relaxed font-light mb-6">
                Botany Bytes was created out of a genuine love for plants and a desire to make plant science accessible, beautiful, and deeply educational.
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-light mb-8">
                Whether you're a NEET aspirant trying to master complex chapters, or a nature enthusiast looking for the perfect indoor plant, you'll find a nurturing space here.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-serif text-secondary font-bold mb-2">93+</div>
                  <div className="text-sm font-medium tracking-wide uppercase opacity-80">Educational Videos</div>
                </div>
                <div className="w-px h-16 bg-background/20" />
                <div>
                  <div className="text-4xl font-serif text-secondary font-bold mb-2">240+</div>
                  <div className="text-sm font-medium tracking-wide uppercase opacity-80">Active Subscribers</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
               <img 
                src="/tulsi.png" 
                alt="Tulsi illustration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Learn */}
      <section className="py-32 px-6 bg-card border-b border-border/50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">What We Cultivate</h2>
            <p className="text-muted-foreground text-xl font-light">
              A curated collection of knowledge designed for students, enthusiasts, and nature lovers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "NEET Botany",
                desc: "PYQ questions, important chapters, and exam strategies broken down simply."
              },
              {
                icon: Microscope,
                title: "Medicinal Plants",
                desc: "Deep dives into Tulsi, healing herbs, and nature's pharmacy."
              },
              {
                icon: Sprout,
                title: "Household Plants",
                desc: "Guides for indoor gardening, low-light plants, and home care."
              },
              {
                icon: PlayCircle,
                title: "Plant Shorts",
                desc: "10-second nature facts, Wild Tulips, and botanical journals."
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="p-8 rounded-[2rem] bg-background border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">{cat.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -z-10 rounded-l-[150px]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 -z-10 rounded-tr-[150px]" />
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                <Video className="w-4 h-4" /> Latest Videos
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Seeds of Knowledge</h2>
              <p className="text-muted-foreground text-xl font-light">Watch our most popular lessons and discoveries.</p>
            </div>
            <Button variant="outline" size="lg" asChild className="rounded-full border-primary/20 text-primary h-14 px-8 hover:bg-primary/5 hover:border-primary/40">
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                View Channel <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {VIDEOS.slice(0, 3).map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <a href={video.url} target="_blank" rel="noreferrer" className="block relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/95 backdrop-blur-md flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                      <PlayCircle className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </a>
                <div className="px-2">
                  <div className="text-sm font-medium text-secondary mb-3 uppercase tracking-wider">Educational Video</div>
                  <h3 className="font-serif text-2xl leading-snug group-hover:text-secondary transition-colors duration-300 text-primary">
                    <a href={video.url} target="_blank" rel="noreferrer">
                      {video.title}
                    </a>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {VIDEOS.slice(3, 5).map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col sm:flex-row items-center gap-6 bg-card rounded-[2rem] p-4 pr-8 border border-border/50 hover:shadow-xl transition-all duration-500"
              >
                <a href={video.url} target="_blank" rel="noreferrer" className="block relative w-full sm:w-48 aspect-video sm:aspect-square shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center text-primary">
                      <PlayCircle className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </a>
                <div className="py-2">
                  <h3 className="font-serif text-xl leading-snug text-primary group-hover:text-secondary transition-colors mb-3">
                    <a href={video.url} target="_blank" rel="noreferrer">
                      {video.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Youtube className="w-4 h-4" /> Watch on YouTube
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-[3rem] p-12 md:p-20 shadow-2xl border border-border"
          >
            <div className="w-24 h-24 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-10 border border-primary/10">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-primary tracking-tight">Grow With Us</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join over 240+ students and plant enthusiasts. Subscribe to Botany Bytes for weekly insights into the green world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                  <Youtube className="w-6 h-6 mr-3 text-red-500" />
                  Subscribe to Channel
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/5">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif font-semibold text-2xl tracking-tight">Botany Bytes</span>
            </div>
            <div className="flex gap-8 text-base font-medium text-muted-foreground">
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <Youtube className="w-5 h-5" /> YouTube
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                Telegram
              </a>
            </div>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground/60 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Botany Bytes. Dedicated to botanical education.</p>
            <p className="mt-2 md:mt-0 font-serif italic text-primary/60">Nurture your curiosity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
