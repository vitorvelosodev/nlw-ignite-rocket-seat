import { PrismaClient } from "@prisma/client"
import cors from "@fastify/cors"
import Fastify from "fastify"

const app = Fastify()
const prisma = new PrismaClient();

app.register(cors)
// Métodos HTTP: Get, Post, Put, Patch, Delete

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })
  
  return habits
})

app.listen({
  port: 3333,
}).then(() => console.log('HTTP Server Running')) 