import { Card, CardContent } from "@/components/ui/card";

export default function Partners() {
  const partners = [
    { name: "파트너 A", category: "유통" },
    { name: "파트너 B", category: "제조" },
    { name: "파트너 C", category: "연구" },
    { name: "파트너 D", category: "물류" },
    { name: "파트너 E", category: "수출" },
    { name: "파트너 F", category: "마케팅" },
  ];

  return (
    <section
      id="partners"
      className="py-20 md:py-28"
      data-testid="section-partners"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-partners-title"
          >
            파트너십
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-partners-description"
          >
            메이딘은 신뢰할 수 있는 파트너들과 함께 성장하고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden cursor-pointer"
              data-testid={`card-partner-${index}`}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center h-32 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-brand-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </div>
                  <div className="text-xs text-muted-foreground/70 group-hover:text-primary/70 transition-colors duration-300 mt-1">
                    {partner.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            귀사와의 파트너십을 기다립니다.{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="text-primary hover:underline font-medium"
              data-testid="link-contact-partners"
              aria-label="문의하기"
            >
              문의하기
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
