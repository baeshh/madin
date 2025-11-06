import { Card, CardContent } from "@/components/ui/card";
import { RND_PROCESS, CERTIFICATIONS } from "@/lib/constants";
import { Search, FlaskConical, Factory, ShieldCheck } from "lucide-react";
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
    <section id="rnd" className="py-20 md:py-28" data-testid="section-rnd">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-rnd-title"
          >
            연구·기술
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-rnd-description"
          >
            메이딘은 원료 선정부터 제조, 품질 관리까지 모든 단계에서 과학적
            검증과 철저한 관리를 통해 최고 품질의 제품을 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RND_PROCESS.map((process, index) => {
            const Icon = iconMap[process.icon as keyof typeof iconMap];
            return (
              <Card
                key={process.id}
                className="relative hover:shadow-md transition-shadow rounded-xl"
                data-testid={`card-process-${process.id}`}
              >
                <CardContent className="py-8 px-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    <div className="text-6xl font-bold text-primary/10">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {process.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-20 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={labImg}
            alt="메이딘 연구소 내부 - 첨단 연구 시설"
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
            data-testid="img-lab"
          />
          <div className="bg-card p-6 text-center">
            <p className="text-muted-foreground">
              메이딘 R&D 센터에서는 첨단 장비와 전문 연구진이 제품의 안전성과
              효능을 검증합니다
            </p>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-semibold text-center mb-8"
            data-testid="text-cert-title"
          >
            인증 및 품질 관리
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            메이딘은 국내외 주요 인증을 획득하여 제품의 안전성과 품질을
            보증합니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <Card
                key={cert.name}
                className="text-center hover:shadow-md transition-shadow rounded-xl"
                data-testid={`card-cert-${index}`}
              >
                <CardContent className="py-8 px-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-brand-light/50 flex items-center justify-center">
                    <img
                      src={certImages[index]}
                      alt={`${cert.name} 인증 배지`}
                      className="w-16 h-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
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
