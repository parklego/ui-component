import InputForm from "@/components/InputForm/InputForm";
import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Modal/Potal";
import Title from "@/components/Title/Title";
import { Button } from "@/components/ui/button";
import { terms } from "@/helper/terms";
import { formList, signUpSchema } from "@/validation/signUp/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const signUpform = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {},
  });

  return (
    <>
      <div className="w-full">
        <Title>회원가입</Title>
        <div className="flex justify-center">
          <div className="flex justify-end p-5 lg:w-1/2">
            <Button onClick={handleModal}>약관보기</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <InputForm form={signUpform} formList={formList} />
        </div>
      </div>

      <Portal>
        {modalOpen && (
          <Modal onClose={handleModal} title={"이용약관"} content={terms} />
        )}
      </Portal>
    </>
  );
};

export default SignUp;
