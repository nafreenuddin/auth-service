import { Request, Response } from 'express';
import User from '../models/User';
import { hashPassword, generateToken } from '../helpers/authHelpers';

export const register = async (req: Request, res: Response) => {
  const { username, email, mobile, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ username, email, mobile, password: hashedPassword });

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
