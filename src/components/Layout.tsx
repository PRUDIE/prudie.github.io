import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
{ path: "/", label: "Home" },
{ path: "/about", label: "About" },
{ path: "/experience", label: "Experience" },
{ path: "/projects", label: "Projects" },
{ path: "/leadership", label: "Leadership" }];


const Layout = ({ children }: {children: React.ReactNode;}) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="section-container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            
            <span className="font-semibold text-foreground tracking-tight">Prudence Attablayo </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "nav-link-active" : ""}`}>
                {item.label}
              </Link>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">

            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen &&
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden bg-background">

              <div className="section-container py-4 flex flex-col gap-3">
                {navItems.map((item) =>
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`nav-link py-2 ${location.pathname === item.path ? "nav-link-active" : ""}`}>

                    {item.label}
                  </Link>
              )}
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>

            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="section-container text-center text-sm text-muted-foreground">
          © 2026 Prudence Attablayo. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default Layout;