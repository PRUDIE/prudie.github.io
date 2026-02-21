import { motion } from "framer-motion";
import { GraduationCap, Shield, Cloud, Lock, BarChart3, Mail, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const expertise = [
{ icon: Shield, label: "Application Security", desc: "Threat modeling, code review, and secure architecture at scale" },
{ icon: Cloud, label: "Cloud Security", desc: "AWS infrastructure hardening and cloud-native defense" },
{ icon: Lock, label: "Penetration Testing", desc: "Human-centered privacy and ethical data practices" },
{ icon: BarChart3, label: "Security Strategy", desc: "Metrics-driven programs and risk quantification" }];


const education = [
{
  degree: "MS in Cybersecurity",
  school: "University of Cincinnati"
},
{
  degree: "BSc in Computer Science",
  school: "Kwame Nkrumah University of Science and Technology"
}];


const About = () =>
<section className="py-20 md:py-28">
    <div className="section-container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <div className="relative shrink-0">
            <div className="w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden border-2 border-border glow-border">
              <img src={aboutPhoto} alt="Prudence Attablayo" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-56 md:w-56 md:h-64 rounded-2xl border border-primary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
          </div>
          <div>
            <div className="accent-line mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a Security Engineer with a passion for building and scaling secure systems that protect both users
              and business objectives. My approach combines deep technical expertise with strategic thinking—translating
              complex security challenges into clear, actionable outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe security should be an enabler, not a blocker. By embedding security practices early in the
              development lifecycle and quantifying risk through measurable metrics, I help engineering teams move fast
              without compromising trust.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 font-bold">What I Do</p>
          <h2 className="text-2xl font-black mb-6 md:text-xl">Core Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {expertise.map((item, i) =>
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">

                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
          )}
          </div>
        </div>

        {/* Education */}
        <h2 className="text-xl font-semibold mb-6">Education</h2>
        <div className="space-y-4 mb-16">
          {education.map((e) =>
        <div key={e.degree} className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
            </div>
        )}
        </div>

        {/* Contact */}
        <div id="contact">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="mailto:cyberprudie@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> cyberprudie@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/prudence-attablayo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/cyberwithp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.youtube.com/@prudieeee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a href="https://medium.com/@prudiee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm2.94 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/></svg> Medium
            </a>
            <a href="https://github.com/PRUDIE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default About;