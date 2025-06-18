import crypto from "node:crypto";

export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
      if (error) reject(error);

      resolve(hash.toString("hex"));
    });
  });
}

export function generateSalt() {
  return crypto.randomBytes(15).toString("hex");
}

export async function comparePassword(
  password: string,
  hash: string,
  salt: string,
) {
  const passwordHash = await hashPassword(password, salt);

  return crypto.timingSafeEqual(
    Buffer.from(hash, "hex"),
    Buffer.from(passwordHash, "hex"),
  );
}
