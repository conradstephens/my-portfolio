"use client";

import * as yup from "yup";
import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { m } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FormInputs, SlackMessageResponse } from "@/types";
import { XMarkIcon } from "@heroicons/react/20/solid";

// form validation schema
const validationSchema = yup.object({
  name: yup.string().required("I need to know who I'm talking to!"),
  subject: yup.string(),
  email: yup
    .string()
    .email("I need a valid email!")
    .required("I need a way to respond to you!"),
  message: yup.string().required("What are we talking about?"),
  honeypot: yup.string(),
});

export default function ContactMe() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  // loading state for sending slack message
  const [loading, setLoading] = React.useState(false);
  // state for slack response
  const [slackRes, setSlackRes] = React.useState<SlackMessageResponse | null>(
    null
  );

  // hide snackbar
  const hideToast = () => {
    setSlackRes(null);
  };

  let messageTimeout: NodeJS.Timeout;
  // send slack message
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (data.honeypot) {
      return setSlackRes({ message: "No bots allowed", status: "error" });
    }
    setLoading(true);
    fetch(`/api/slackMessage`, {
      method: "POST",
      body: JSON.stringify({ ...data }),
    })
      .then(async (res) => {
        clearTimeout(messageTimeout);
        const data = (await res.json()) as SlackMessageResponse;
        setSlackRes(data);
        setTimeout(() => {
          hideToast();
        }, 3000);
        setLoading(false);
        reset();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  return (
    <div className="hero">
      <div className="hero-content flex w-full max-w-screen-md flex-col items-start space-y-2">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">Contact</h3>
          <p className="py-2 text-lg leading-8 text-base-content/75">
            Please feel free to message me on any of my{" "}
            <Link
              href="/#hero"
              className="cursor-pointer border-b-[1px] border-b-transparent text-primary transition-all duration-200 ease-in-out hover:border-b-primary"
            >
              social media
            </Link>{" "}
            accounts or send me a message below!
            {` Let's connect!`}
          </p>
        </m.div>

        <m.form
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full grid-cols-2 gap-2"
        >
          <input
            {...register("honeypot")}
            type="text"
            className="invisible col-span-2 h-0"
          />
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
                "contactInput textarea textarea-primary min-h-[300px]",
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
            className={clsx(
              "btn btn-primary col-span-2 rounded-md",
              loading && "btn-disabled"
            )}
          >
            {!loading ? "Submit" : <span className="loading loading-spinner" />}
          </button>
        </m.form>
      </div>
      {slackRes && (
        <div className="toast">
          <div
            className={clsx(
              "alert alert-success",
              slackRes.status === "error" && "alert-error"
            )}
          >
            <div className="flex items-center">
              <span>{slackRes.message}</span>
              <label className="btn btn-circle btn-ghost" onClick={hideToast}>
                <XMarkIcon className="h-5 w-5" />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
