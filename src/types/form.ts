export interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SlackMessageResponse {
  status: "success" | "error";
  message: string;
}
