import InputForm from "@/components/InputForm/InputForm";
import Title from "@/components/Title/Title";
import { signUpSchema } from "@/validation/signUp/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const signUpform = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formList = [
    { type: "text", name: "username", placeholder: "username" },
    { type: "password", name: "password", placeholder: "password" },
  ];

  return (
    <div className="h-screen">
      <Title>Sign-up</Title>
      <div className="flex justify-center ">
        <div className="w-1/2">
          <InputForm form={signUpform} formList={formList} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
