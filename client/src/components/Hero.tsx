import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBgImg from "@assets/generated_images/natural_wellness_botanical_herbs_scene.png";

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
      className="relative pt-20 lg:pt-24 overflow-hidden"
      data-testid="section-hero"
    >
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 via-[#1a365d]/80 to-[#1a365d]/40" />
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <p className="text-[#7dd3fc] text-sm font-medium tracking-wider uppercase">
                Premium Natural Supplement
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                data-testid="text-hero-title"
              >
                {BRAND.slogan}
              </h1>
              <p
                className="text-lg text-gray-200 leading-relaxed"
                data-testid="text-hero-description"
              >
                {BRAND.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-white text-[#1a365d] hover:bg-gray-100 font-semibold"
                onClick={() => scrollToSection("product")}
                data-testid="button-view-product"
                aria-label="제품 상세 보기"
              >
                제품 보러가기
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => scrollToSection("about")}
                data-testid="button-view-about"
                aria-label="회사 소개 보기"
              >
                회사소개
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#1a365d]">GMP</p>
              <p className="text-sm text-gray-600 mt-1">인증 시설 생산</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#1a365d]">100%</p>
              <p className="text-sm text-gray-600 mt-1">국내 생산</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#1a365d]">HACCP</p>
              <p className="text-sm text-gray-600 mt-1">안전 관리 인증</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#1a365d]">ISO</p>
              <p className="text-sm text-gray-600 mt-1">품질경영 인증</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce hidden lg:block"
        aria-label="아래로 스크롤"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
