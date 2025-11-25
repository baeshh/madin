import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Search } from "lucide-react";

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const pharmacies = [
    { 
      id: 1,
      name: "메이딘 약국 강남점", 
      address: "서울시 강남구 테헤란로 123",
      phone: "02-1234-5678",
      hours: "09:00 - 21:00",
      region: "서울"
    },
    { 
      id: 2,
      name: "메이딘 약국 부산점", 
      address: "부산시 해운대구 해운대로 456",
      phone: "051-1234-5678",
      hours: "09:00 - 20:00",
      region: "부산"
    },
    { 
      id: 3,
      name: "메이딘 약국 대구점", 
      address: "대구시 중구 동성로 789",
      phone: "053-1234-5678",
      hours: "09:00 - 21:00",
      region: "대구"
    },
    { 
      id: 4,
      name: "메이딘 약국 울산점", 
      address: "울산시 남구 삼산로 101",
      phone: "052-1234-5678",
      hours: "09:00 - 20:00",
      region: "울산"
    },
    { 
      id: 5,
      name: "건강한 약국", 
      address: "서울시 마포구 홍대입구역 222",
      phone: "02-2222-3333",
      hours: "08:30 - 22:00",
      region: "서울"
    },
    { 
      id: 6,
      name: "행복 약국", 
      address: "인천시 연수구 송도동 333",
      phone: "032-3333-4444",
      hours: "09:00 - 21:00",
      region: "인천"
    },
  ];

  const filteredPharmacies = pharmacies.filter(pharmacy => 
    pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pharmacy.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="partners"
      className="py-20 md:py-28 bg-[#f8fafc]"
      data-testid="section-partners"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#1a365d] font-medium mb-2">PHARMACY FINDER</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4"
            data-testid="text-partners-title"
          >
            제휴약국 찾기
          </h2>
          <p
            className="text-lg text-[#64748b] leading-relaxed max-w-2xl mx-auto"
            data-testid="text-partners-description"
          >
            메이딘 제품을 만나볼 수 있는 제휴약국을 찾아보세요
          </p>
        </div>

        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="지역명 또는 약국명으로 검색 (예: 서울, 강남, 부산)"
                className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20 focus:border-[#1a365d] text-[#1e293b] placeholder:text-[#94a3b8]"
                data-testid="input-pharmacy-search"
              />
            </div>
            <Button 
              type="submit"
              className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8"
              data-testid="button-search-pharmacy"
            >
              검색
            </Button>
          </div>
          {searchTerm && (
            <p className="mt-3 text-sm text-[#64748b]">
              검색 결과: {filteredPharmacies.length}개의 약국을 찾았습니다
            </p>
          )}
        </form>

        {filteredPharmacies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPharmacies.map((pharmacy) => (
              <Card
                key={pharmacy.id}
                className="hover:shadow-lg transition-shadow border-[#e2e8f0] bg-white"
                data-testid={`card-pharmacy-${pharmacy.id}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1a365d] mb-4">
                    {pharmacy.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#94a3b8] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64748b] text-sm">{pharmacy.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#94a3b8] flex-shrink-0" />
                      <span className="text-[#64748b] text-sm">{pharmacy.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#94a3b8] flex-shrink-0" />
                      <span className="text-[#64748b] text-sm">{pharmacy.hours}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-[#1a365d] border-[#1a365d] hover:bg-[#1a365d] hover:text-white"
                      data-testid={`button-pharmacy-detail-${pharmacy.id}`}
                    >
                      상세보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-[#e2e8f0]">
            <p className="text-[#64748b]">
              "{searchTerm}"에 해당하는 약국을 찾을 수 없습니다.
            </p>
            <p className="text-sm text-[#94a3b8] mt-2">
              다른 검색어로 다시 시도해 주세요.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-[#64748b] mb-4">
            제휴약국 입점을 원하시나요?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="bg-[#1a365d] hover:bg-[#2d4a7c]"
            data-testid="link-contact-partners"
          >
            입점 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
