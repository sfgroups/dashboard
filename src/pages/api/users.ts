import { NextApiRequest, NextApiResponse } from 'next';

export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("making call")
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("Response received")
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
