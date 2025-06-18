import { NextResponse } from "next/server";
import { getSession, signIn, signOut, signUp } from "./actions";

export const handlers = { GET, POST, DELETE };

async function DELETE(
  request: Request,
  { params }: { params: Promise<{ auth: string[] }> },
) {
  const { auth } = await params;

  const endpoint = auth.join("/");

  try {
    switch (endpoint) {
      case "sign-out":
        return await signOut();
      default:
        return NextResponse.json({});
    }
  } catch {
    return NextResponse.json({
      data: null,
      error: { message: "Something went wrong" },
    });
  }
}

async function POST(
  request: Request,
  { params }: { params: Promise<{ auth: string[] }> },
) {
  const { auth } = await params;

  const endpoint = auth.join("/");

  try {
    switch (endpoint) {
      case "sign-up":
        return await signUp(request);
      case "sign-in":
        return await signIn(request);
      default:
        return NextResponse.json({});
    }
  } catch {
    return NextResponse.json({
      data: null,
      error: { message: "Something went wrong" },
    });
  }
}

async function GET(
  request: Request,
  { params }: { params: Promise<{ auth: string[] }> },
) {
  const { auth } = await params;

  const endpoint = auth.join("/");

  try {
    switch (endpoint) {
      case "get-session":
        return await getSession();
      default:
        return NextResponse.json({});
    }
  } catch {
    return NextResponse.json({
      data: null,
      error: { message: "Something went wrong" },
    });
  }
}
