const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()


async function getUsers() {
  const users = await user.findMany({})
  return users
}

module.exports = getUsers()