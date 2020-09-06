const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()

async function getUsers() {
  const users = await user.findMany({})
  return users
}


export default async (req, res) => {
  const users = await getUsers()
  res.status(200).json({
    users,
  })
}