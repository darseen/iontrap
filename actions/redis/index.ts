"use server";

import redisClient from "@/lib/redis";

const EXPIRATION_TIME = 60 * 60 * 1000;

// functions to be used on the client side

export async function redisSet(
  key: string,
  value: string,
  expiration: number = EXPIRATION_TIME,
) {
  await redisClient.setex(key, expiration, value);
}

export async function redisGet(key: string) {
  return await redisClient.get(key);
}

export async function redisDel(key: string) {
  return await redisClient.del(key);
}
