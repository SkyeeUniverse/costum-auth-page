import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import usersModel from "@/app/models/user";
import bcyrpt from "bcrypt";

export async function POST(request: NextRequest) {
  const { username, password, email } = await request.json();
  const hashedPassword = await bcyrpt.hash(password, 15);
  await connectDB();
  const existingUser = await usersModel.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "Email sudah ada" }, { status: 400 });
  }
  await usersModel.create({ username, password: hashedPassword, email });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const users = await usersModel.find();
  return NextResponse.json({ users }, { status: 200 });
}

// const { username, password, email } = await request.json();
// await connectDB();

// const existingUser = await users.findOne({ email });

// const hashedPassword = await bcrypt.hash(password, 5);
// const newUser = new users({
//   username,
//   email,
//   password: hashedPassword,
// });

// if (existingUser) {
//   return new NextResponse("User already exists", { status: 400 });
// }

// try {
//   await newUser.save();
//   return new NextResponse("User Register", { status: 200 });
// } catch (err) {
//   console.log(err);
// }
// }
