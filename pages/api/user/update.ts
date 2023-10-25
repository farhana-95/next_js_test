import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userData = {
    id: parseInt(req.body.id),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    updated_at: new Date()
  }

  try {
    const user = await prisma.user.update({
        where:{
            id: userData.id,
        },
      data: userData
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } 
};