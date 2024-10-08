import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/**
 * ユーザー一覧の取得
 * @param req
 * @returns
 */
export const GET = async () => {
  try {
    const users = await db.user.findMany({
      omit: { password: true },
      orderBy: { name: Prisma.SortOrder.asc },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
