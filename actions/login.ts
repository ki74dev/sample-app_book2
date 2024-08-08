"use server";

import { LoginForm, loginSchema } from "@/types/login-form";
import { redirect } from "next/navigation";

const credentialsLogin = async (values: LoginForm) => {
  const safeValues = await loginSchema.safeParseAsync(values);

  if (!safeValues.success) {
    return { error: "入力エラー" };
  }

  // TODO テスト用
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (safeValues.data.password !== "password") {
    return { error: "ユーザー名またはパスワードが間違っています。" };
  }

  redirect('/dashboard');
};

export { credentialsLogin };