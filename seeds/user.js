const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function reset() {
  await prisma.user.deleteMany({})
}

async function createUser() {
  await prisma.user.create({
    data: {
      email: 'yuriwtoledo@gmail.com',
      name: 'yuri mesmo',
    }
  })
}

async function findAll() {
  const users = await prisma.user.findMany({})
  console.log(users)
}

async function main() {
  await reset()
  await createUser()
  await findAll()
}

main().finally()