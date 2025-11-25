import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function Contact() {

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" data-testid="section-contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#1a365d] font-medium mb-2">CONTACT</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-testid="text-contact-title"
          >
            상담문의
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-contact-description"
          >
            제휴, 납품, 제품 문의 등 언제든지 연락주세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a365d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1a365d]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">주소</div>
                    <div className="text-gray-600">{COMPANY_INFO.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a365d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1a365d]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">전화</div>
                    <div className="text-gray-600">{COMPANY_INFO.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a365d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1a365d]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">이메일</div>
                    <div className="text-gray-600">{COMPANY_INFO.email}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">운영 시간</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>점심시간</span>
                    <span>12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>주말 및 공휴일</span>
                    <span>휴무</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
