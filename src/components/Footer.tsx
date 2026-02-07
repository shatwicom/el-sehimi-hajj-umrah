import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/95 text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-right">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-xl">س</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">شركة السهيمي</h3>
                <p className="text-xs text-primary-foreground/70">للحج والعمرة</p>
              </div>
            </div>
            <p className="text-accent font-medium text-sm">
              "خدمة ضيوف الرحمن شرف ومسؤولية"
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="text-center">
            <h4 className="font-bold mb-4 text-accent">أرقام التواصل</h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+966541846334"
                className="inline-flex items-center justify-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 54 184 6334</span>
              </a>
              <a
                href="tel:+966542747882"
                className="inline-flex items-center justify-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 54 274 7882</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 text-accent">تابعونا</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            جميع الحقوق محفوظة © شركة السهيمي للحج والعمرة {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
