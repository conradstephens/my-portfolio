import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { handleSubmit, register } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="text-3xl">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          You need it. I got it. <span>Lets talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-primary" />
            <p className="text-2xl">+6145727796</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-primary" />
            <p className="text-2xl">conrad@apollo5.dev</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button type="submit" className="btn-primary btn rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
