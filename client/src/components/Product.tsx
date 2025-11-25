import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCT, UPCOMING_PRODUCTS } from "@/lib/constants";
import { AlertCircle, Download, Fish, Pill, Eye, Zap, Heart, Bone, Smile, Droplet, Droplets } from "lucide-react";
import productImg from "@assets/image_1762400826814.png";

const iconMap: { [key: string]: any } = {
  Fish, Pill, Eye, Zap, Heart, Bone, Smile, Droplet, Droplets
};

export default function Product() {
  return (
    <section
      id="product"
      className="py-20 md:py-28 bg-[#f8fafc]"
      data-testid="section-product"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">PRODUCTS</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6"
            data-testid="text-product-title"
          >
            제품 소개
          </h2>
          <p
            className="text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto"
            data-testid="text-product-description"
          >
            과학적으로 검증된 자연 원료로 만든 메이딘의 제품을 만나보세요
          </p>
        </div>

        <Card className="mb-16 border-[#e2e8f0] shadow-lg overflow-hidden bg-white">
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
                    className="text-3xl font-bold text-[#1e293b] mb-1"
                    data-testid="text-product-name"
                  >
                    {PRODUCT.name}
                    <span className="text-lg font-normal text-[#64748b] ml-2">
                      ({PRODUCT.nameEn})
                    </span>
                  </h3>
                  <p className="text-sm text-[#64748b] italic mb-3">
                    {PRODUCT.nameOrigin}
                  </p>
                  <p className="text-lg text-[#1a365d] font-medium">
                    {PRODUCT.descShort}
                  </p>
                </div>

                <p className="text-[#475569] leading-relaxed">
                  {PRODUCT.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#e2e8f0]">
                  <div>
                    <h4 className="font-semibold text-[#1e293b] mb-3">
                      성분 및 함유량
                    </h4>
                    <div className="space-y-2">
                      {PRODUCT.ingredients.map((ingredient, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 text-sm"
                          data-testid={`ingredient-${index}`}
                        >
                          <Badge variant="outline" className="border-[#1a365d] text-[#1a365d] min-w-[70px] justify-center">
                            {ingredient.amount}
                          </Badge>
                          <div className="flex-1">
                            <span className="font-medium text-[#1e293b]">
                              {ingredient.name}
                            </span>
                            <span className="text-[#64748b] ml-1">
                              ({ingredient.nameEn})
                            </span>
                            <p className="text-[#64748b] text-xs mt-0.5">
                              {ingredient.benefit}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1e293b] mb-2">
                      복용 방법
                    </h4>
                    <p className="text-sm text-[#1a365d] font-medium mb-1">
                      {PRODUCT.dosage}
                    </p>
                    <p className="text-sm text-[#64748b]">
                      {PRODUCT.dosageDetail}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1e293b] mb-2">
                      주의사항
                    </h4>
                    <p className="text-sm text-[#64748b]">
                      {PRODUCT.caution}
                    </p>
                  </div>
                </div>

                <div
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 flex gap-3"
                  data-testid="legal-notice"
                >
                  <AlertCircle className="w-5 h-5 text-[#94a3b8] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {PRODUCT.legal}
                  </p>
                </div>

                <Button 
                  asChild
                  className="w-full bg-[#1a365d] hover:bg-[#2d4a7c]"
                  data-testid="button-download-pdf"
                >
                  <a href={PRODUCT.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    센시비 소개자료 PDF 다운로드
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="text-center mb-10">
            <p className="text-[#1a365d] font-medium mb-2">COMING SOON</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
              추가 제품 라인업
            </h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {UPCOMING_PRODUCTS.map((product, index) => {
              const Icon = iconMap[product.icon];
              return (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow border-[#e2e8f0] bg-white"
                  data-testid={`card-upcoming-${index}`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon className="w-6 h-6 text-[#1a365d]" />}
                    </div>
                    <p className="text-sm font-medium text-[#1e293b]">
                      {product.name}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-[#64748b] text-sm mt-6">
            다양한 제품이 준비 중입니다
          </p>
        </div>
      </div>
    </section>
  );
}
