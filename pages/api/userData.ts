import { NextApiRequest, NextApiResponse } from 'next';


export const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ];

  
  export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ message: 'ID is required in the request body' });
      }
  
      const user = users.find(user => user.id === Number(id));
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json(user);
    }
  
    return res.status(405).json({ message: 'Method Not Allowed' });
  };