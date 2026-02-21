import { motion } from "framer-motion";
import { Users, Heart, Star, Quote } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Women in CyberSecurity (WiCyS)",
    role: "Member",
    desc: "Active participant in advancing women in cybersecurity through mentorship and professional development.",
  },
  {
    icon: Heart,
    title: "WiCyS Colors of Inclusion",
    role: "Strategic Partnerships",
    desc: "Driving diversity, equity, and inclusion initiatives within the cybersecurity community.",
  },
  {
    icon: Star,
    title: "PyLadies Ghana",
    role: "Former Chapter Lead",
    desc: "Led the Ghana chapter, empowering women to adopt Python for technical and security-related projects.",
  },
  {
    icon: Users,
    title: "Black Sisters in STEM",
    role: "Co-Lead",
    desc: "Building community and creating opportunities for Black women in STEM fields.",
  },
];

const Leadership = () => (
  <section className="py-20 md:py-28">
    <div className="section-container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="accent-line mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Leadership & Community</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated"
            >
              <a.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{a.title}</h3>
              <p className="text-xs text-primary font-medium mb-2">{a.role}</p>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Recommendation Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-elevated border border-primary/20"
        >
          <Quote className="w-8 h-8 text-primary opacity-40 mb-4" />
          <blockquote className="text-lg leading-relaxed mb-4 text-foreground/90">
            "A strategic thinker who brings clarity to complex security challenges. Her ability to design
            security programs while fostering inclusive communities is rare—she leads with both
            technical depth and genuine empathy."
          </blockquote>
          <p className="text-sm font-medium text-foreground">— Gervin Appiah</p>
          <p className="text-xs text-muted-foreground">Principal Hacking Officer at 00SEC · Cybersecurity Trainer at OffSec · Penetration Tester · Offensive Tool Dev</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Leadership;
