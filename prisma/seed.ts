import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Rich",
    email: "hello@prisma.com",
    posts: {
      create: {
        title: "My first post",
        body: "Lots of really interesting stuff",
        slug: "my-first-post",
      },
    },
  },
  {
    name: "Alice",
    email: "alice@example.com",
    posts: {
      create: {
        title: "Introduction to Prisma",
        body: "Learn about Prisma and its features",
        slug: "prisma-intro",
      },
    },
  },
  {
    name: "Bob",
    email: "bob@example.com",
    posts: {
      create: {
        title: "Prisma Best Practices",
        body: "Tips and tricks for using Prisma effectively",
        slug: "prisma-best-practices",
      },
    },
  },
  {
    name: "Ella",
    email: "ella@example.com",
    posts: {
      create: {
        title: "Advanced Prisma Usage",
        body: "Explore advanced features of Prisma",
        slug: "prisma-advanced",
      },
    },
  },
  {
    name: "David",
    email: "david@example.com",
    posts: {
      create: {
        title: "Prisma in Action",
        body: "Real-world examples of Prisma usage",
        slug: "prisma-in-action",
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
