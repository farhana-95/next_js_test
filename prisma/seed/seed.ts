
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedData() {
  await prisma.user.createMany({
    data: [
      {
        id:1,
        name: 'user 1',
        email: 'user1@example.com',
        password: 'pass1',
      },
      {
        id:2,
        name: 'user 2',
        email: 'user2@example.com',
        password: 'pass2',
      },
      {
        id:3,
        name: 'user 3',
        email: 'user3@example.com',
        password: 'pass3',
      },
      {
        id:4,
        name: 'user 4',
        email: 'user4@example.com',
        password: 'pass4',
      },
    ],
  });

  await prisma.$disconnect();
}

seedData().catch((e) => {
  console.error(e);
  process.exit(1);
});