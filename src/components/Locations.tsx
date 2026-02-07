import { MapPin, ExternalLink } from "lucide-react";

const locations = [
  {
    title: "موقعنا في منى",
    description: "مخيمات مجهزة بالكامل في قلب منى لراحة الحجاج",
    mapUrl: "https://maps.google.com/?q=21.4225,39.8925", // Placeholder - يمكن تعديل الرابط
    image: "🏕️",
  },
  {
    title: "موقعنا في عرفة",
    description: "موقع متميز في عرفات المقدسة مع جميع الخدمات",
    mapUrl: "https://maps.google.com/?q=21.3549,39.9842", // Placeholder - يمكن تعديل الرابط
    image: "⛺",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">مواقعنا في المشاعر</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            تواجد استراتيجي في المشاعر المقدسة لخدمة ضيوف الرحمن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-8 group cursor-pointer hover:border-accent border border-transparent transition-all duration-300 block"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl flex-shrink-0">
                  {location.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl text-primary">
                      {location.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {location.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">اضغط لفتح الموقع</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
