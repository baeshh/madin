import { Card, CardContent } from "@/components/ui/card";
import { RND_PROCESS, CERTIFICATIONS } from "@/lib/constants";
import { Search, FlaskConical, Factory, ShieldCheck, ArrowRight } from "lucide-react";
import labImg from "@assets/generated_images/Research_laboratory_scene_cd235656.png";
import gmpImg from "@assets/generated_images/GMP_certification_badge_4b4b64db.png";
import haccpImg from "@assets/generated_images/HACCP_certification_badge_13caf09b.png";
import isoImg from "@assets/generated_images/ISO_certification_badge_4938b065.png";

const iconMap = {
  Search: Search,
  FlaskConical: FlaskConical,
  Factory: Factory,
  ShieldCheck: ShieldCheck,
};

const certImages = [gmpImg, haccpImg, isoImg];

export default function RnD() {
  return (
    <section id="rnd" className="py-20 md:py-28 bg-gray-50" data-testid="section-rnd">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">R&D</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-testid="text-rnd-title"
          >
            연구·기술
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-rnd-description"
          >
            메이딘은 원료 선정부터 제조, 품질 관리까지 모든 단계에서 과학적
            검증과 철저한 관리를 통해 최고 품질의 제품을 만듭니다.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RND_PROCESS.map((process, index) => {
              const Icon = iconMap[process.icon as keyof typeof iconMap];
              return (
                <div key={process.id} className="relative">
                  <Card
                    className="h-full hover:shadow-lg transition-shadow border-gray-200 bg-white"
                    data-testid={`card-process-${process.id}`}
                  >
                    <CardContent className="py-8 px-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-[#1a365d]/10 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#1a365d]" />
                        </div>
                        <div className="text-5xl font-bold text-[#1a365d]/10">
                          0{index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {process.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < RND_PROCESS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-[#1a365d]/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={labImg}
            alt="메이딘 연구소 내부 - 첨단 연구 시설"
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
            data-testid="img-lab"
          />
          <div className="bg-white p-6 text-center">
            <p className="text-gray-600">
              메이딘 R&D 센터에서는 첨단 장비와 전문 연구진이 제품의 안전성과
              효능을 검증합니다
            </p>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900"
            data-testid="text-cert-title"
          >
            인증 및 품질 관리
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            메이딘은 국내외 주요 인증을 획득하여 제품의 안전성과 품질을
            보증합니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <Card
                key={cert.name}
                className="text-center hover:shadow-lg transition-shadow border-gray-200 bg-white"
                data-testid={`card-cert-${index}`}
              >
                <CardContent className="py-8 px-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#1a365d]/5 flex items-center justify-center">
                    <img
                      src={certImages[index]}
                      alt={`${cert.name} 인증 배지`}
                      className="w-16 h-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
