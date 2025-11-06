import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BRAND } from "@/lib/constants";
import { ArrowRight, Download } from "lucide-react";
import heroBackgroundImg from "@assets/generated_images/Hero_background_abstract_dd97bdfb.png";
import productImg from "@assets/generated_images/Sensibi_product_bottle_d14d4d44.png";
import ingredientImg from "@assets/generated_images/Angelica_herb_ingredient_c0172ccc.png";
import labImg from "@assets/generated_images/Research_laboratory_scene_cd235656.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-surface"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-brand-light text-brand text-sm px-4 py-1.5"
                data-testid="badge-clean"
              >
                클린
              </Badge>
              <Badge
                variant="secondary"
                className="bg-brand-light text-brand text-sm px-4 py-1.5"
                data-testid="badge-natural"
              >
                자연주의
              </Badge>
              <Badge
                variant="secondary"
                className="bg-brand-light text-brand text-sm px-4 py-1.5"
                data-testid="badge-research"
              >
                연구기반
              </Badge>
            </div>

            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                data-testid="text-hero-title"
              >
                {BRAND.slogan}
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                data-testid="text-hero-description"
              >
                {BRAND.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => alert("PDF 브로셔는 준비 중입니다")}
                data-testid="button-brochure"
                aria-label="메이딘 소개서 PDF 다운로드"
              >
                <Download className="w-5 h-5" />
                메이딘 소개서 (PDF)
              </Button>
              <Button
                size="lg"
                className="gap-2"
                onClick={() => scrollToSection("product")}
                data-testid="button-view-product"
                aria-label="센시비 제품 상세 보기"
              >
                센시비 자세히 보기
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="rounded-2xl overflow-hidden shadow-lg aspect-square"
                  data-testid="img-hero-product"
                >
                  <img
                    src={productImg}
                    alt="센시비 제품 이미지 - 참당귀 추출물 영양제"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
                  data-testid="img-hero-ingredient"
                >
                  <img
                    src={ingredientImg}
                    alt="참당귀 원료 이미지 - 천연 식물 추출물"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]"
                  data-testid="img-hero-lab"
                >
                  <img
                    src={labImg}
                    alt="메이딘 연구소 - 과학적 검증 시설"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
