"use client";

import { useState } from "react";
import { signUpWithOrg } from "@/actions/auth.actions";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await signUpWithOrg(email, password, orgName);
    alert("Check your email for confirmation");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        <h1 className="text-2xl font-bold">Create your workspace</h1>

        <input
          className="w-full p-2 bg-gray-800"
          placeholder="Organization name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />

        <input
          className="w-full p-2 bg-gray-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 bg-gray-800"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-white text-black p-2 font-semibold">
          Create Account
        </button>
      </form>
    </div>
  );
}
