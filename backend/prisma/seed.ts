import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Hash passwords before seeding users
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: hashedPassword,
      },
      { name: "Bob Smith", email: "bob@example.com", password: hashedPassword },
      {
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: hashedPassword,
      },
    ],
    skipDuplicates: true, // Avoid duplicate entries
  });

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
