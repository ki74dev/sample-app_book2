import { db } from "@/lib/db";

export const getUserFromDb = async (name: string, password: string) => {
  try {
    const user = await db.user.findUnique({ where: { name, password } });
    return user;
  } catch (err) {
    throw err;
  }
};
