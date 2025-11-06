import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRODUCT } from "@/lib/constants";
import { AlertCircle } from "lucide-react";
import productImg from "@assets/generated_images/Sensibi_product_bottle_d14d4d44.png";

export default function Product() {
  const additionalProducts = [
    {
      name: "신제품 1",
      description: "새로운 건강 솔루션 준비 중",
      comingSoon: true,
    },
    {
      name: "신제품 2",
      description: "새로운 건강 솔루션 준비 중",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="product"
      className="py-20 md:py-28 bg-surface"
      data-testid="section-product"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-product-title"
          >
            제품 소개
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-product-description"
          >
            과학적으로 검증된 자연 원료로 만든 메이딘의 제품을 만나보세요
          </p>
        </div>

        <Card className="mb-12 rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-brand-light/50 to-brand-light/20 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img
                    src={productImg}
                    alt={`${PRODUCT.name} - ${PRODUCT.descShort}`}
                    className="w-full h-auto"
                    loading="eager"
                    data-testid="img-product-main"
                  />
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-6">
                <div>
                  <h3
                    className="text-3xl font-bold text-foreground mb-2"
                    data-testid="text-product-name"
                  >
                    {PRODUCT.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {PRODUCT.descShort}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PRODUCT.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-brand-light text-brand text-sm px-3 py-1"
                      data-testid={`badge-feature-${index}`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">
                  {PRODUCT.description}
                </p>

                <div className="space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      주요 성분
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {PRODUCT.ingredients}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      섭취 방법
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {PRODUCT.dosage}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      주의사항
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {PRODUCT.caution}
                    </p>
                  </div>
                </div>

                <div
                  className="bg-muted/50 border border-border rounded-lg p-4 flex gap-3"
                  data-testid="legal-notice"
                >
                  <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {PRODUCT.legal}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            추가 제품 라인업
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow rounded-xl"
                data-testid={`card-additional-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-full h-48 bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
