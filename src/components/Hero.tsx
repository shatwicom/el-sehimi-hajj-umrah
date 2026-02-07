import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
            <div className="w-24 h-1 bg-gradient-to-l from-accent to-accent/50 rounded-full" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in animation-delay-200">
            شركة فاخر منصور السهيمي وشريكه
            <br />
            <span className="text-accent">لخدمة حجاج الداخل</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-400 max-w-3xl mx-auto">
            نرافق ضيوف الرحمن بخبرة ميدانية وتنظيم احترافي في المشاعر المقدسة
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <a
              href="https://wa.me/966542747882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>تواصل معنا عبر واتساب</span>
            </a>
          </div>

          {/* Decorative Bottom */}
          <div className="flex justify-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent/50" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-16 h-px bg-accent/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms" }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
