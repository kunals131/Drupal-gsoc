import cookie from 'cookie';
import { verify } from 'jsonwebtoken';
const ACCESS_TOKEN_SECERT = 'test-secret';

export default function verifyAuthenticationFromCookies(req: any) {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie);
    console.log(token);
    if (token === undefined) return { usernamePass: false, auth: false, user: {} };
    try {
      const decodedData: any = verify(token, ACCESS_TOKEN_SECERT);
      console.log(`Data decoded`);
      return {
        usernamePass: decodedData?.usernamePass,
        user: decodedData?.user,
        auth: true,
      };
    } catch (err) {
      console.log(err);
      return { usernamePass: false, auth: false, user: {} };
    }
  }

  return { usernamePass: false, auth: false, user: {} };
}
