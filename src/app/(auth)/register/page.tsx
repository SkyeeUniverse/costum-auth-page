"use client";

import React, { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import connectDB from "@/lib/connectDB";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const route = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.status === 400) {
        setError(data.message);
      }
      if (res.status === 200) {
        console.log("user registered");
        route.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // e.preventDefault();

  // const username = e.target[0].value;
  // const email = e.target[1].value;
  // const password = e.target[2].value;

  // try {
  //   const res = await fetch("/api/auth/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //     }),
  //   });
  //   if (res.status === 400) {
  //     setError("This Email is already registered");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" placeholder="Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex items-center gap-2">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-700 font-semibold">
                Login here
              </Link>
            </p>
          </div>
          <Button type="submit">Register</Button>
          <p className="text-red-500">{error && error}</p>
        </form>
      </Card>
    </div>
  );
}
