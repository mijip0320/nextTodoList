"use client";

import { useUserState } from "@/app/zustand/atoms";
import React from "react";

export default function UserUpdatePage() {
  const { user, setUser } = useUserState();

  return (
    <div>
      Update User Page
      <input
        type="email"
        placeholder="Enter your Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  );
}
