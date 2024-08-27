"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { PageRoute } from "@/routes";

export const UserManagementCard = () => {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>ユーザー管理</CardTitle>
        <CardDescription>
          ユーザーの一覧表示、登録、更新、削除を行います。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          type="button"
          size="sm"
          className="w-full"
          onClick={() => router.push(PageRoute.USERS)}
        >
          管理画面へ
        </Button>
      </CardContent>
    </Card>
  );
};