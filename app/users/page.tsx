"use client";

import React, { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    searchUsers("Alice").then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}
