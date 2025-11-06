import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      date: "2025.01.15",
      category: "보도자료",
      title: "메이딘, 신제품 출시 예정",
      summary:
        "메이딘이 새로운 건강기능식품 라인업을 2025년 상반기 출시할 예정입니다. 자연 원료 기반의 혁신적인 제품으로 소비자들에게 다가갈 계획입니다.",
    },
    {
      date: "2024.12.20",
      category: "공지사항",
      title: "연말연시 배송 안내",
      summary:
        "연말연시 기간 동안의 배송 일정을 안내드립니다. 원활한 배송을 위해 미리 주문해 주시기 바랍니다.",
    },
    {
      date: "2024.11.28",
      category: "보도자료",
      title: "메이딘, ISO 9001 인증 획득",
      summary:
        "메이딘이 품질경영시스템 국제 표준 ISO 9001 인증을 획득하여 제품 품질 관리 체계를 한층 강화했습니다.",
    },
    {
      date: "2024.10.10",
      category: "이벤트",
      title: "센시비 론칭 1주년 기념 이벤트",
      summary:
        "센시비 출시 1주년을 맞아 고객 감사 이벤트를 진행합니다. 다양한 혜택과 경품을 준비했습니다.",
    },
    {
      date: "2024.09.05",
      category: "공지사항",
      title: "메이딘 공식 홈페이지 오픈",
      summary:
        "메이딘의 새로운 공식 홈페이지가 오픈했습니다. 더욱 편리하게 제품 정보와 소식을 확인하실 수 있습니다.",
    },
    {
      date: "2024.08.15",
      category: "보도자료",
      title: "메이딘, 해외 수출 본격화",
      summary:
        "메이딘이 동남아시아 지역으로의 수출을 본격화하며 글로벌 시장 진출에 박차를 가하고 있습니다.",
    },
  ];

  const categoryColors: Record<string, string> = {
    보도자료: "bg-primary/10 text-primary",
    공지사항: "bg-accent/10 text-accent",
    이벤트: "bg-chart-2/10 text-chart-2",
  };

  return (
    <section
      id="news"
      className="py-20 md:py-28 bg-surface"
      data-testid="section-news"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-news-title"
          >
            소식
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-news-description"
          >
            메이딘의 최신 소식과 공지사항을 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 rounded-xl cursor-pointer overflow-hidden"
              data-testid={`card-news-${index}`}
            >
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs px-2 py-0.5 ${
                      categoryColors[item.category] ||
                      "bg-muted text-muted-foreground"
                    }`}
                    data-testid={`badge-category-${index}`}
                  >
                    {item.category}
                  </Badge>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <button
                  className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all font-medium"
                  data-testid={`button-news-detail-${index}`}
                  onClick={() => alert("상세 내용은 준비 중입니다")}
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
