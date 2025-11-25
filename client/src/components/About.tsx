import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BRAND, MISSION_VISION, HEALTH_STORY, TIMELINE, STATS, PARTNERS_COMPANIES, PATENTS } from "@/lib/constants";
import { Target, Eye, GraduationCap, HeartHandshake, Award, Building2, FlaskConical, FileCheck } from "lucide-react";

const healthStoryIcons = {
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake,
  Award: Award,
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
            className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4"
            data-testid="text-about-title"
          >
            메이딘 (MEIDIN) 소개
          </h2>
          <p className="text-sm text-[#64748b] mb-6 italic">
            {BRAND.nameOrigin}
          </p>
          <p
            className="text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto"
            data-testid="text-about-description"
          >
            {BRAND.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-[#e2e8f0] hover:shadow-lg transition-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#1a365d] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">MISSION</p>
                    <h3 className="text-xl font-bold text-white">{MISSION_VISION.mission.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#475569] leading-relaxed">
                  {MISSION_VISION.mission.description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#e2e8f0] hover:shadow-lg transition-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#2d4a7c] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">VISION</p>
                    <h3 className="text-xl font-bold text-white">{MISSION_VISION.vision.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#475569] leading-relaxed">
                  {MISSION_VISION.vision.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20 bg-[#f8fafc] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-[#1a365d] font-medium mb-2">HEALTH STORY</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
              브랜드 스토리
            </h3>
            <p className="text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {HEALTH_STORY.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {HEALTH_STORY.values.map((value) => {
              const Icon = healthStoryIcons[value.icon as keyof typeof healthStoryIcons];
              return (
                <Card
                  key={value.id}
                  className="text-center border-[#e2e8f0] hover:shadow-lg transition-shadow bg-white"
                  data-testid={`card-health-story-${value.id}`}
                >
                  <CardContent className="py-8 px-6">
                    <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#1a365d]" />
                    </div>
                    <Badge variant="outline" className="mb-3 border-[#1a365d] text-[#1a365d]">
                      {value.subtitle}
                    </Badge>
                    <h4 className="text-lg font-semibold mb-3 text-[#1e293b]">
                      {value.title}
                    </h4>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#1a365d] font-medium mb-2">HISTORY</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
              연혁
            </h3>
          </div>
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
                  <div className="text-[#475569]">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#1a365d] font-medium mb-2">PARTNERS</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
              협력사
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {PARTNERS_COMPANIES.map((partner, index) => (
              <Card
                key={index}
                className="text-center border-[#e2e8f0] hover:shadow-md transition-shadow w-48"
                data-testid={`card-partner-${index}`}
              >
                <CardContent className="py-6 px-4">
                  <div className="w-12 h-12 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto mb-3">
                    {partner.category === "바이오" && <FlaskConical className="w-6 h-6 text-[#1a365d]" />}
                    {partner.category === "연구소" && <Building2 className="w-6 h-6 text-[#1a365d]" />}
                  </div>
                  <p className="text-sm font-medium text-[#1e293b] mb-1">{partner.name}</p>
                  <Badge variant="secondary" className="text-xs">
                    {partner.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            <div className="flex items-center justify-center w-32 h-32">
              <span className="text-lg text-[#64748b] font-medium">등 6개</span>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#1a365d] font-medium mb-2">PATENTS</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
              보유 특허
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {PATENTS.map((patent) => (
              <Card
                key={patent.id}
                className="border-[#e2e8f0] hover:shadow-md transition-shadow"
                data-testid={`card-patent-${patent.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a365d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-[#1a365d]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#1a365d] text-white text-xs">
                          {patent.status}
                        </Badge>
                        <span className="text-sm text-[#64748b]">{patent.number}</span>
                      </div>
                      <p className="text-[#1e293b] font-medium leading-relaxed">
                        {patent.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
