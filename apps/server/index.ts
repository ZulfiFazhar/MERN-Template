import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });
  console.log("User added sucessfuly:", newUser);
}

main()
  .catch((error) => {
    console.error("Terjadi error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
