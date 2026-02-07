import { Plane, Building, Users, MapPin, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "حملات الحج",
    description: "حملات حج متميزة مع إقامة مريحة وخدمات شاملة في المشاعر المقدسة والفنادق القريبة من الحرم",
  },
  {
    icon: Building,
    title: "خدمات العمرة",
    description: "برامج عمرة متنوعة على مدار العام مع باقات تناسب جميع الميزانيات والاحتياجات",
  },
  {
    icon: Users,
    title: "الإشراف الميداني",
    description: "فريق إشراف متخصص ومتواجد على مدار الساعة لخدمة الحجاج والمعتمرين",
  },
  {
    icon: MapPin,
    title: "التنظيم في المشاعر",
    description: "تنظيم متكامل للتنقل والإقامة في منى وعرفة ومزدلفة بأعلى معايير الراحة",
  },
  {
    icon: Clock,
    title: "خدمة على مدار الساعة",
    description: "دعم فني ولوجستي متاح طوال فترة الرحلة لضمان تجربة سلسة وممتعة",
  },
  {
    icon: Star,
    title: "خدمات مميزة",
    description: "باقات خاصة تشمل خدمات إضافية مثل الإرشاد الديني والوجبات الفاخرة",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">خدماتنا</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نقدم مجموعة متكاملة من الخدمات لضمان تجربة حج وعمرة مميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated p-8 group hover:border-accent border border-transparent transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
