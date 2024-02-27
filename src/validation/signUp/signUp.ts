import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(2, {
      message: "이름은 최소 2글자 이상 입니다.",
    }),
    password: z.string().min(6, {
      message: "비밀번호는 최소 6글자 이상 입니다.",
    }),
    confirmPassword: z.string().min(6, {
      message: "비밀번호는 최소 6글자 이상 입니다.",
    }),
    email: z.string().email({
      message: "올바른 이메일 양식을 입력해주세요.",
    }),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "이용약관에 동의하여 주세요.",
    }),
    marketing: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "입력된 비밀번호와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const formList = [
  {
    type: "text",
    name: "username",
    label: "사용자 이름",
    placeholder: "이름을 입력하여 주세요.",
    isRequired: true,
  },
  {
    type: "password",
    name: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력하여 주세요.",
    isRequired: true,
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 입력하여 주세요.",
    isRequired: true,
  },

  {
    type: "email",
    name: "email",
    label: "이메일",
    placeholder: "이메일을 입력하여 주세요.",
    isRequired: true,
  },
  {
    type: "checkbox",
    name: "agreeToTerms",
    label: "이용 약관",
    value: "나는 이용 약관에 동의합니다.",
    isRequired: true,
  },
  {
    type: "checkbox",
    name: "marketing",
    label: "마케팅 수신",
    value: "나는 마케팅 수신에 동의합니다.",
    isRequired: false,
  },
];
