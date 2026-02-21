import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const stats = [
  { value: "5+", label: "Years in Security" },
  { value: "50+", label: "Security Assessments" },
  { value: "40%", label: "Vuln Backlog Reduced" },
  { value: "90+", label: "Students Mentored" },
];


const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center hero-gradient overflow-hidden">
        {/* Vertical scroll indicator */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest [writing-mode:vertical-lr] rotate-180">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>

        <div className="section-container w-full">
          <div className="grid md:grid-cols-5 gap-12 md:gap-8 items-center">
            {/* Left content — 3 cols */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-lg md:text-xl mb-2 tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
                Prudence<br />
                <span className="text-foreground/90">Attablayo</span>
              </h1>

              {/* Role line */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/60" />
                <span className="text-muted-foreground font-mono text-sm tracking-wider uppercase">
                  Security Engineer
                </span>
              </div>

              <p className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed">
                I secure systems end-to-end, from the code developers write to the infrastructure it runs on.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  View Experience <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:border-primary/50 transition-colors"
                >
                  Contact Me
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <p className="text-2xl md:text-3xl font-black text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right headshot — 2 cols */}
            <motion.div
              className="md:col-span-2 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden border-2 border-border glow-border">
                  <img
                    src={headshot}
                    alt="Prudence Attablayo – Security Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Offset decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-72 h-80 md:w-80 md:h-[26rem] rounded-2xl border border-primary/20 -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6 mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-xs text-muted-foreground font-medium tracking-wider">Follow Me:</span>
            <a href="https://www.linkedin.com/in/prudence-attablayo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:cyberprudie@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* Mission statement */}
      <section className="py-20 border-t border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic">
              "With expertise spanning application security, cloud infrastructure, and privacy engineering,
              I help organizations build resilient security programs that{" "}
              <span className="text-foreground font-medium">scale with product growth</span> while
              maintaining user trust."
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground">Gervin Appiah</p>
              <p className="text-sm text-muted-foreground">Principal Hacking Officer at 00SEC | Cybersecurity Trainer at OffSec | Penetration Tester | Offensive Tool Dev</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
