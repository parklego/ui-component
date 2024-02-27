import Input from "../Input/Input";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";

interface FormListItem {
  name: string;
  type: string;
  placeholder: string;
}

interface InputFormProps {
  form: UseFormReturn;
  formList: FormListItem[];
}

const InputForm = ({ form, formList }: InputFormProps) => {
  console.log(form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: object) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {formList.map((item, idx) => (
        <div className="my-10" key={idx}>
          <Input
            type={item.type}
            placeholder={item.placeholder}
            {...register(item.name)}
          />
          <p className="h-1 text-red-500">
            <>{errors[item.name]?.message}</>
          </p>
        </div>
      ))}

      <div className="text-center">
        <Button className="p-6 mt-5 text-lg w-max" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
