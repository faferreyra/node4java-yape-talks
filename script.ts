import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const users = await prisma.user.findMany({
    include: { 
      posts: true
    }
  });
  console.dir(users, { depth: null });

  const oneUser = await prisma.user.findUnique({
    include: {
      posts: true
    },
    where: {
      id: 2
    }
  });

  console.dir(oneUser, { depth: null});
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
