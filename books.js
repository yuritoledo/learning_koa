const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()

async function getUsers() {
  const users = await user.findMany({})
  return users
}


export default async (req, res) => {
  console.log('object')
  const users = await getUsers()
  console.log(users)
  res.status(200).json({
    users,
  })
}