import { MapPin, ExternalLink, Building2 } from "lucide-react";

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">موقع الشركة</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            تفضل بزيارتنا في مقر الشركة
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <a
            href="https://maps.app.goo.gl/qwQ52e2QHKAYitVVA"
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated p-8 group cursor-pointer hover:border-accent border border-transparent transition-all duration-300 block"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <h3 className="font-bold text-xl text-primary">
                    شركة فاخر منصور السهيمي وشريكه
                  </h3>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mb-4">
                  لخدمة حجاج الداخل - مرخصة من وزارة الحج والعمرة
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-accent font-medium">
                  <MapPin className="w-5 h-5" />
                  <span>اضغط لفتح الموقع على الخريطة</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
