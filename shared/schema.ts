import { z } from "zod";

export const contactInquirySchema = z.object({
  type: z.enum(["partnership", "product", "other"], {
    required_error: "문의 유형을 선택해주세요",
  }),
  name: z.string().min(1, "이름을 입력해주세요").trim(),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다")
    .trim(),
  phone: z.string().min(1, "연락처를 입력해주세요").trim(),
  message: z.string().min(1, "문의 내용을 입력해주세요").trim(),
  agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;

export interface ContactInquiryResponse {
  success: boolean;
  message: string;
}
