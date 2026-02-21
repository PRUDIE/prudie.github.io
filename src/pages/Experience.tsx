import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const strengths = [
  "Application security at scale",
  "Secure SDLC implementation",
  "Security code reviews & vulnerability management",
  "Risk quantification through metrics dashboards",
  "Privacy engineering & human-centered security",
  "Security roadmap development",
  "Cross-functional collaboration with engineering teams",
  "Threat modelling",
];

const roles = [
  {
    title: "Security Engineer",
    company: "Amazon Web Services",
    period: "May 2023 – Present",
    bullets: [
      "Conduct comprehensive security assessments on web applications, APIs, and cloud services",
      "Perform in-depth code reviews, threat modelling and guide engineering teams on remediation strategies",
      "Design metrics dashboards for risk tracking and executive reporting",
      "Improve secure SDLC practices across multiple product teams",
      "Develop long-term AppSec strategy aligned with organizational growth",
    ],
  },
  {
    title: "Security Engineer Intern",
    company: "Amazon Web Services",
    period: "May 2022 – Aug 2022",
    bullets: [
      "Built automated metrics reporting pipelines using Python and Amazon QuickSight reducing reporting time from 5 hours to 1 hour",
      "Contributed to security tooling and process improvements",
    ],
  },
  {
    title: "Information Security Analyst",
    company: "Vodafone",
    period: "Sep 2020 – Sep 2021 · 1 yr 1 mo",
    bullets: [
      "Led the vulnerability management and patching program and reduced backlog by 40%",
      "Implemented and deployed a SAST tool into SDLC to increase secure coding practices",
      "Reviewed Pentest reports and Threat Models ahead of application development and deployment",
    ],
    skills: ["Security Compliance", "Security Reviewer", "Technical Writing", "Threat & Vulnerability Management", "Application Security Testing"],
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University of Cincinnati",
    period: "2021 – 2023",
    bullets: [
      "Assisted 90+ students in penetration testing and cybersecurity lab coursework",
      "Provided mentorship on security fundamentals and career development",
    ],
  },
];

const Experience = () => (
  <section className="py-20 md:py-28">
    <div className="section-container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="accent-line mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Experience</h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <motion.div
                key={role.title + role.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:pl-10 relative"
              >
                 <div className="hidden md:flex absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary border-2 border-primary items-center justify-center">
                   <Briefcase className="w-3 h-3 text-primary" />
                </div>
                <div className="card-elevated">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{role.title}</h3>
                      <p className="text-primary text-sm font-medium">{role.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0 font-mono">{role.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {role.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {role.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <div className="card-elevated mt-12">
          <h2 className="text-xl font-semibold mb-6">Key Competencies</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {strengths.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
