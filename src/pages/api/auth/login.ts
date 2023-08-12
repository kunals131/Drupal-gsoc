import { drupal } from '@/lib/drupal';
import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { sign } from 'jsonwebtoken';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ message: 'Username and password are required.' });
    const usernamePass = Buffer.from(username + ':' + password).toString(
      'base64'
    );
    console.log(usernamePass);
    try {
      const result = await drupal.post(
        '/auth/login',
        {},
        {
          headers: {
            Authorization: 'Basic ' + usernamePass,
          },
        }
      );
      let user = result?.data?.user;
      const token = sign(
        {
          usernamePass,
          user,
        },
        'test-secret',
        {
          expiresIn: '1d',
        }
      );
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      );
      res.json({
        user,
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({
        message: 'Login failed.',
      });
    }
  }
}
