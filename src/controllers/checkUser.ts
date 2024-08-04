// import { Request, Response } from 'express';
// import User from '../models/User';
// import { Op } from 'sequelize';

// export const checkUser = async (req: Request, res: Response) => {
//   const { identifier } = req.body;
//   const user = await User.findOne({
//     where: { [Op.or]: [{ email: identifier }, { mobile: identifier }] }
//   });

//   if (user) {
//     return res.json({ exists: true });
//   } else {
//     return res.json({ exists: false });
//   }
// };

// import { Request, Response } from 'express';
// import { Op } from 'sequelize';
// import User from '../models/User';

// export const checkUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { identifier } = req.body;

//     if (!identifier) {
//       res.status(400).json({ error: 'Identifier is required' });
//       return;
//     }

//     const user = await User.findOne({
//       where: {
//         [Op.or]: [
//           { email: identifier.toLowerCase() },
//           { mobile: identifier }
//         ]
//       }
//     });

//     if (user) {
//       res.json({
//         exists: true,
//         user: {
//           id: user.id,
//           email: user.email,
//           mobile: user.mobile,
//           // Add any other fields you want to return
//         }
//       });
//     } else {
//       res.json({ exists: false });
//     }
//   } catch (error) {
//     console.error('Error in checkUser:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

import { Request, Response } from "express";
import User from "../models/User";
import { Op } from "sequelize";

export const checkUser = async (req: Request, res: Response) => {
  console.log('Received request to /api/checkUser in auth-service');
  const { identifier } = req.body;
  try{
    const user = await User.findOne({
      where: { [Op.or]: [{ email: identifier }, { mobile: identifier }] },
    });
    if (user) {
      return res.json({ exists: true, user });
    } else {
      return res.json({ exists: false });
    }
  }catch (error) {
    console.error('Error checking user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
