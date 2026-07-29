import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}

// TS now knows SECRET is always a string
const SECRET:string = secret;

// Data we want to store inside the JWT
interface JwtPayload {
  email: string;
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1h",
  });
}

export function verifyToken(token: string): JwtPayload | jwt.JwtPayload {
  return jwt.verify(token, SECRET) as JwtPayload | jwt.JwtPayload;
}