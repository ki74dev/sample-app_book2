import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const names = [
    "Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy",
    "Karen", "Leo", "Mallory", "Nina", "Oscar", "Peggy", "Quincy", "Rita", "Steve", "Trent",
    "Uma", "Victor", "Walter", "Xena", "Yvonne", "Zack"
  ];
  const domains = ["example.com", "prisma.io", "test.com", "mail.com"];

  const users = await Promise.all(
    names.map((name) => {
      const emailDomain = domains[Math.floor(Math.random() * domains.length)];
      const email = `${name.toLowerCase()}@${emailDomain}`;
      const password = "password";

      return prisma.user.upsert({
        where: { name },
        update: {},
        create: {
          name,
          email,
          password,
        },
      });
    }),
  );

  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });