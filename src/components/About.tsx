import { Award, Users, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "الخبرة الميدانية",
    description: "سنوات من الخبرة في تنظيم رحلات الحج والعمرة",
  },
  {
    icon: Users,
    title: "التنظيم الاحترافي",
    description: "فريق متخصص لضمان راحة الحجاج والمعتمرين",
  },
  {
    icon: Heart,
    title: "العناية بالحاج",
    description: "اهتمام شخصي بكل ضيف من ضيوف الرحمن",
  },
  {
    icon: Shield,
    title: "المصداقية والأمان",
    description: "التزام تام بتقديم خدمات موثوقة وآمنة",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">من نحن</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            شركة السهيمي للحج والعمرة، شريككم الموثوق في رحلة العمر
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-elevated p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              نحن شركة متخصصة في تقديم خدمات الحج والعمرة بمعايير عالية من الجودة والاحترافية. 
              نعمل على توفير تجربة روحانية متكاملة لضيوف الرحمن، مع التركيز على الراحة والأمان 
              والتنظيم المتقن في جميع مراحل الرحلة.
            </p>
            <p className="text-accent text-lg font-medium border-t border-border pt-6">
              "نلتزم بتقديم تجربة حج وعمرة قائمة على العناية والتنظيم والاهتمام بأدق التفاصيل"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center group hover:bg-primary transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <value.icon className="w-8 h-8 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-primary-foreground transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
