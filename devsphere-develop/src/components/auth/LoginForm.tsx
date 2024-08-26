import { InputText } from "primereact/inputtext";
import Label from "../Form/Label";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import csxLogo from "@src/assets/logos/csx_logo.png";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "@src/validation_types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { classNames } from "primereact/utils";

const LoginForm = () => {
  const { t } = useTranslation("login");
  const form = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchemaType) {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="p-[0.3rem] rounded-[56px] bg-gradient-to-b from-yellow-600 from-20%  to-slate-50 to-40%">
        <div className="w-full py-16 px-14 md:px-20 shadow-lg bg-white rounded-[53px]">
          <div className="flex flex-col justify-center items-center gap-6 pb-10">
            <img
              alt="logo"
              className="mr-2 min-w-[100px] h-[75px]"
              src={csxLogo}
            ></img>
            <div className="text-gray-800 text-2xl font-medium">
              {t("systemTitle")}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="flex flex-col">
                  <Label title={t("username")} />
                  <InputText
                    value={field.value}
                    className={
                      classNames({
                        "p-invalid": fieldState.error,
                      }) + " p-inputtext-sm"
                    }
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="flex flex-col">
                  <Label title={t("password")} />
                  <Password
                    {...field}
                    inputRef={field.ref}
                    toggleMask
                    feedback={false}
                    className={
                      classNames({
                        "p-invalid": fieldState.error,
                      }) + " p-inputtext-sm"
                    }
                  />
                </div>
              )}
            />

            <Button label={t("login")} type="submit" onClick={() => onSubmit} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
