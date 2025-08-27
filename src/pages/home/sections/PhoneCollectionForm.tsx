import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Data {
  phone: string;
}
const PhoneCollectionForm = ({ next }: { next?: (data: Data) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Data>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    console.log({ data });
    next?.(data);
    reset();
  });
  const { t } = useTranslation("home");
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative w-full h-full z-7 flex flex-col items-center justify-center gap-4"
      >
        {/* Phone input */}
        <input
          type="text"
          autoComplete="false"
          placeholder={t("banner.form.placeholder")}
          className="w-full h-12 bg-transparent border-b border-white text-white placeholder-white focus:outline-none text-lg"
          {...register("phone", {
            required: t("banner.form.errors.required"),
            pattern: {
              value: /^[3-7]\d{7}$/,
              message: t("banner.form.errors.valid"),
            },
          })}
        />

        {errors?.phone && (
          <span className="w-full text-left flex items-center justify-start text-[red] text-xs ps-3">
            {errors?.phone?.message}
          </span>
        )}
        <button
          type="submit"
          className="w-12/12 mx-auto h-10 rounded-2xl bg-gradient-to-r from-white to-[#931845] font-medium text-base text-white transition-all duration-300 ease-in"
        >
          {t("banner.form.btn")}
        </button>
      </form>
    </>
  );
};

export default PhoneCollectionForm;
