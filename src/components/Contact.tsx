import { MessageCircle, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-primary-foreground/80 text-lg mb-10">
            نحن هنا لخدمتكم والإجابة على استفساراتكم حول خدمات الحج والعمرة
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/966542747882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              <span>تواصل عبر واتساب</span>
            </a>

            <a
              href="tel:+966542747882"
              className="inline-flex items-center gap-3 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium" dir="ltr">+966 54 274 7882</span>
            </a>

            <a
              href="mailto:hajj@alsuhaimihajj.com"
              className="inline-flex items-center gap-3 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">hajj@alsuhaimihajj.com</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm">
              متاحون للرد على استفساراتكم على مدار الساعة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
