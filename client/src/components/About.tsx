import { Card, CardContent } from "@/components/ui/card";
import { BRAND, CORE_VALUES, TIMELINE, STATS } from "@/lib/constants";
import { Users, Leaf, ShieldCheck } from "lucide-react";

const iconMap = {
  Users: Users,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      data-testid="section-about"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">ABOUT US</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-testid="text-about-title"
          >
            메이딘, 과학으로 신뢰를 설계합니다
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-about-description"
          >
            메이딘은{" "}
            <span className="text-[#1a365d] font-semibold">
              자연 원료와 과학적 근거
            </span>
            를 바탕으로 사람의 일상 속 건강을 연구하는 영양제 전문 기업입니다.
            단순한 제품이 아니라, 신뢰할 수 있는 데이터와 검증된 공정을 통해
            '매일의 균형'을 제공하는 브랜드를 목표로 합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {CORE_VALUES.map((value) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Card
                key={value.id}
                className="text-center hover:shadow-lg transition-shadow border-gray-200"
                data-testid={`card-value-${value.id}`}
              >
                <CardContent className="py-10 px-6">
                  <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#1a365d]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900"
            data-testid="text-philosophy-title"
          >
            브랜드 철학
          </h3>
          <p
            className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto text-center"
            data-testid="text-philosophy-content"
          >
            {BRAND.philosophy}
          </p>
        </div>

        <div className="mb-20">
          <h3
            className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900"
            data-testid="text-timeline-title"
          >
            연혁
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-[#1a365d]/30 pl-8 space-y-8">
              {TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  data-testid={`timeline-${item.year}`}
                >
                  <div className="absolute -left-[2.375rem] top-1 w-4 h-4 rounded-full bg-[#1a365d] border-4 border-white" />
                  <div className="font-bold text-[#1a365d] mb-1">{item.year}</div>
                  <div className="text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 bg-[#1a365d] rounded-2xl p-8 md:p-12">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-2xl text-white/70">{stat.unit}</span>
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
