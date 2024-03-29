import Input from "../Input/Input";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import Checkbox from "../Checkbox/Checkbox";

interface FormListItem {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  label: string;
  isRequired: boolean;
}

interface InputFormProps {
  form: UseFormReturn;
  formList: FormListItem[];
}

const InputForm = ({ form, formList }: InputFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: object) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      className="p-8 border rounded lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {formList.map((item, idx) => (
        <div className="my-5 " key={idx}>
          {item.type !== "checkbox" ? (
            <Input
              type={item.type}
              placeholder={item.placeholder}
              value={item.value}
              label={item.label}
              isRequired={item.isRequired}
              {...register(item.name)}
            />
          ) : (
            <Checkbox value={item.value} {...register(item.name)} />
          )}

          <p className="h-1 text-red-500 ">
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
