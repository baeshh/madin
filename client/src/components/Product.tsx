import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRODUCT } from "@/lib/constants";
import { AlertCircle, Check } from "lucide-react";
import productImg from "@assets/image_1762400826814.png";

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
      className="py-20 md:py-28 bg-gray-50"
      data-testid="section-product"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">PRODUCTS</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-testid="text-product-title"
          >
            제품 소개
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-product-description"
          >
            과학적으로 검증된 자연 원료로 만든 메이딘의 제품을 만나보세요
          </p>
        </div>

        <Card className="mb-12 border-gray-200 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-[#1a365d]/5 to-[#1a365d]/10 p-8 md:p-12 flex items-center justify-center">
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

              <div className="p-8 md:p-12 space-y-6 bg-white">
                <div>
                  <Badge className="bg-[#1a365d] text-white mb-3">BEST SELLER</Badge>
                  <h3
                    className="text-3xl font-bold text-gray-900 mb-2"
                    data-testid="text-product-name"
                  >
                    {PRODUCT.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {PRODUCT.descShort}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PRODUCT.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#1a365d] text-[#1a365d] text-sm px-3 py-1"
                      data-testid={`badge-feature-${index}`}
                    >
                      <Check className="w-3 h-3 mr-1" />
                      {feature}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {PRODUCT.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      주요 성분
                    </h4>
                    <p className="text-sm text-gray-600">
                      {PRODUCT.ingredients}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      섭취 방법
                    </h4>
                    <p className="text-sm text-gray-600">
                      {PRODUCT.dosage}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      주의사항
                    </h4>
                    <p className="text-sm text-gray-600">
                      {PRODUCT.caution}
                    </p>
                  </div>
                </div>

                <div
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex gap-3"
                  data-testid="legal-notice"
                >
                  <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {PRODUCT.legal}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            추가 제품 라인업
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow border-gray-200"
                data-testid={`card-additional-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-full h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h4>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
