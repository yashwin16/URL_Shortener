export const cookieOptions = {
  httpOnly: true,
  secure: true, // Must be true for cross-site cookie on HTTPS
  maxAge: 24 * 60 * 60 * 1000,
  sameSite: 'None', // Must be 'None' for cross-site cookie to work
};
