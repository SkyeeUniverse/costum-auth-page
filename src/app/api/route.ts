import connectDB from "@/lib/connectDB";
import users from "../models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const data = await users.find();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log("error");
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
