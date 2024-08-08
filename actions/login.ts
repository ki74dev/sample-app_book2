"use server";

import { signIn } from "@/auth";
import { LoginForm, loginSchema } from "@/types/login-form";
import { AuthError } from "next-auth";

const credentialsLogin = async (values: LoginForm) => {
  const safeValues = await loginSchema.safeParseAsync(values);

  if (!safeValues.success) {
    return { error: "入力エラー" };
  }

  try {
    await signIn("credentials", { ...safeValues.data, redirectTo: "/dashboard" });
  } catch (err) {
    if (err instanceof AuthError) {
      return { error: err.cause?.err?.message };
    }
    throw err;
  }
};

export { credentialsLogin };
