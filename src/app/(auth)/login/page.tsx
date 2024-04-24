"use client";

import React from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex items-center gap-2">
            <p>
              Dont have an account?{" "}
              <Link href="/register" className="text-cyan-700 font-semibold">
                Sign up here
              </Link>
            </p>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
}
