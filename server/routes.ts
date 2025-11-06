import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactInquirySchema, type ContactInquiryResponse } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactInquirySchema.parse(req.body);
      
      console.log("문의 접수:", {
        type: validatedData.type,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        messagePreview: validatedData.message.substring(0, 50),
      });

      const response: ContactInquiryResponse = {
        success: true,
        message: "문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.",
      };

      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "입력 정보를 다시 확인해주세요.",
          errors: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
