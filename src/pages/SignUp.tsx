import InputForm from "@/components/InputForm/InputForm";
import Title from "@/components/Title/Title";
import { formList, signUpSchema } from "@/validation/signUp/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const signUpform = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {},
  });

  return (
    <div className="w-full">
      <Title>회원가입</Title>
      <div className="flex justify-center">
        <InputForm form={signUpform} formList={formList} />
      </div>
    </div>
  );
};

export default SignUp;
