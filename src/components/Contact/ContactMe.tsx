import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import clsx from "clsx";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const validationSchema = yup.object({
  name: yup.string().required("I need to know who I'm talking to!"),
  email: yup
    .string()
    .email("I need a valid email address!")
    .required("I need a way to respond to you!"),
  message: yup.string().required("What are we talking about?"),
});

export default function ContactMe() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <div className="hero">
      <div className="hero-content flex w-full max-w-screen-md flex-col items-start space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">Contact</h3>
          <p className="text-md py-2 leading-8 text-base-content/75">
            {"Let's connect! Please feel free to message me on any of my "}
            <Link
              href="/#hero"
              className="btn-link btn p-0 lowercase text-primary no-underline hover:animate-pulse"
            >
              social media
            </Link>{" "}
            accounts or send me a message below!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full grid-cols-2 gap-2"
        >
          <div className="form-control col-span-2 sm:col-span-1">
            <input
              {...register("name")}
              placeholder="Name"
              className={clsx(
                "contactInput",
                errors["name"] && "input-error outline-error"
              )}
              type="text"
            />
            {errors["name"] && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors["name"]?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control col-span-2 sm:col-span-1">
            <input
              {...register("email")}
              placeholder="Email"
              className={clsx(
                "contactInput",
                errors["email"] && "input-error outline-error"
              )}
              type="email"
            />
            {errors["email"] && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors["email"]?.message}
                </span>
              </label>
            )}
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput col-span-2"
            type="text"
          />
          <div className="form-control col-span-2">
            <textarea
              {...register("message")}
              placeholder="Message"
              className={clsx(
                "contactInput textarea-primary textarea",
                errors["message"] && "textarea-error outline-error"
              )}
            />
            <label className="label">
              <span className="label-text-alt text-error">
                {errors["message"]?.message}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="btn-primary btn col-span-2 rounded-md"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
}
