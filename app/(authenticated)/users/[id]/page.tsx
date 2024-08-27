import type { NextPage } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

const Page: NextPage<PageProps> = ({ params }: PageProps) => {
  return <>ユーザー詳細/更新 {params.id}</>;
};

export default Page;