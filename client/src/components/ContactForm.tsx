import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactInquirySchema, type ContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactInquiry>({
    resolver: zodResolver(contactInquirySchema),
    defaultValues: {
      type: "" as any,
      name: "",
      email: "",
      phone: "",
      message: "",
      agreed: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "문의 접수 완료",
        description: "담당자가 확인 후 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "문의 접수 실패",
        description:
          error.message || "오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactInquiry) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                문의 유형 <span className="text-destructive">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-inquiry-type">
                    <SelectValue placeholder="문의 유형을 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    value="partnership"
                    data-testid="option-partnership"
                  >
                    제휴·납품 문의
                  </SelectItem>
                  <SelectItem value="product" data-testid="option-product">
                    제품 문의
                  </SelectItem>
                  <SelectItem value="other" data-testid="option-other">
                    기타 문의
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                이름 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="이름을 입력하세요"
                  {...field}
                  data-testid="input-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                이메일 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                  data-testid="input-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                연락처 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="010-0000-0000"
                  {...field}
                  data-testid="input-phone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                문의 내용 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="문의 내용을 입력하세요"
                  rows={6}
                  {...field}
                  data-testid="textarea-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreed"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  data-testid="checkbox-privacy"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  개인정보 수집 및 이용에 동의합니다{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormDescription>
                  문의 처리를 위해 이름, 이메일, 연락처, 문의 내용이 수집됩니다.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={mutation.isPending}
          data-testid="button-submit"
        >
          {mutation.isPending ? "전송 중..." : "문의하기"}
        </Button>
      </form>
    </Form>
  );
}
