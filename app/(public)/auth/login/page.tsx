import { CredentialsLoginForm } from "@/components/auth/credentials-login-form";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: 'ログイン | SAMPLE',
}
 
const Page: NextPage = () => {
  return (
    <div>
      <CredentialsLoginForm />
    </div>
  );
};

export default Page;
