import { motion } from "framer-motion";
import { FileText, FlaskConical, BarChart3, ShieldCheck, Terminal, ExternalLink } from "lucide-react";

const highlights = [
  { icon: FlaskConical, label: "Factor Analysis & ANOVA", desc: "Rigorous statistical methodology" },
  { icon: BarChart3, label: "Risk-Benefit Modeling", desc: "Quantifying user disclosure trade-offs" },
  { icon: ShieldCheck, label: "Ethical Data Handling", desc: "Privacy-first research design" },
];

const Projects = () => (
  <section className="py-20 md:py-28">
    <div className="section-container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="accent-line mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Projects</h1>

        {/* JWT Inspector CLI */}
        <div className="card-elevated mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Terminal className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">JWT Inspector CLI</h2>
              <p className="text-sm text-muted-foreground mt-1">Security Tool</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A command-line tool designed to decode, validate, and analyze JSON Web Tokens (JWTs). Particularly useful for security professionals and developers who need to inspect JWTs during web application penetration tests.
          </p>

          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Decode Payload and Header:</strong> Easily decode the header and payload of a JWT to inspect its contents.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Check for None Algorithm:</strong> Validate if the JWT uses the "none" algorithm, which can indicate potential security issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Signature Verification:</strong> Verify the signature of the JWT if the secret or public key is known, ensuring the token's integrity.</span>
              </li>
            </ul>
          </div>

          <a href="https://github.com/PRUDIE/jwt_inspector" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink className="w-4 h-4" /> View on GitHub
          </a>
        </div>

        {/* Privacy Research */}
        <div className="card-elevated">
          <div className="flex items-start gap-3 mb-6">
            <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">
                Examining the Impact of Privacy Awareness on User Self-Disclosure
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Privacy Research</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Research Objective</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Investigated the relationship between users' privacy awareness levels and their willingness
                to self-disclose personal information online, with implications for privacy engineering
                and product security design.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Methodology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Employed factor analysis and ANOVA to analyze survey data, ensuring statistical rigor
                and actionable insights for privacy-focused product design.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Key Findings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Demonstrated that higher privacy awareness significantly influences disclosure behavior,
                providing a framework for risk-benefit modeling in privacy engineering contexts. The
                research reinforced the importance of transparent data practices and user-centered
                security design.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-start gap-3">
                <h.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
