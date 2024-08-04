import { Request, Response } from 'express';
import User from '../models/User';
import { comparePassword, generateToken } from '../helpers/authHelpers';

export const login = async (req: Request, res: Response) => {
  console.log('Received request to /api/login in auth-service');
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    console.log('User logged in successfully:', user);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
