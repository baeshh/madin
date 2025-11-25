import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, FileCheck, Building2, X } from "lucide-react";
import businessLicense from "@assets/image_1762400575780.png";
import trademarkCert from "@assets/image_1762400582424.png";
import healthFoodCert from "@assets/image_1762400605959.png";

export default function Certifications() {
  const certifications = [
    {
      id: "business",
      title: "사업자등록증",
      icon: Building2,
      image: businessLicense,
      description: "정식 등록된 사업자",
      number: "463-05-03407",
    },
    {
      id: "trademark",
      title: "상표등록증",
      icon: Award,
      image: trademarkCert,
      description: "센시비(SENSIBEE) 상표권",
      number: "제 40-2404407 호",
    },
    {
      id: "health-food",
      title: "건강기능식품 영업신고증",
      icon: FileCheck,
      image: healthFoodCert,
      description: "건강기능식품 판매업",
      number: "제 2025-0350699 호",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-white"
      data-testid="section-certifications"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">CERTIFICATIONS</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-testid="text-certifications-title"
          >
            인증 및 등록
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-certifications-description"
          >
            메이딘은 정식으로 등록된 사업자이며, 건강기능식품 판매업 신고를 완료한
            신뢰할 수 있는 기업입니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-all border-gray-200 bg-gray-50 hover:bg-white"
                  data-testid={`card-cert-${cert.id}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center">
                        <cert.icon className="w-8 h-8 text-[#1a365d]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`text-cert-title-${cert.id}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2" data-testid={`text-cert-description-${cert.id}`}>
                      {cert.description}
                    </p>
                    <p className="text-xs text-gray-400" data-testid={`text-cert-number-${cert.id}`}>
                      {cert.number}
                    </p>
                    <div className="mt-4 text-sm text-[#1a365d] font-medium">
                      클릭하여 원본 보기
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto" data-testid={`dialog-cert-${cert.id}`}>
                <DialogHeader>
                  <DialogTitle data-testid={`text-dialog-title-${cert.id}`}>
                    {cert.title}
                  </DialogTitle>
                  <DialogDescription data-testid={`text-dialog-description-${cert.id}`}>
                    {cert.description} - 등록번호: {cert.number}
                  </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4"
                    data-testid={`button-close-${cert.id}`}
                    aria-label="닫기"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>
                <div className="p-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto rounded-lg"
                    data-testid={`img-cert-full-${cert.id}`}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-gray-200 bg-gray-50">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                메이딘은 관련 법규를 준수하며, 소비자 여러분께 안전하고 신뢰할 수
                있는 제품을 제공하기 위해 최선을 다하고 있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
