"use client"
import { useState, useEffect } from 'react';
import { User } from "../../models/user"
import usersAxios from '@/pages/api/usersAxios';


export default function UserComponent() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
    //   const response = await fetch('/api/users');
    //   const data = await response.json();
    const users = await usersAxios.getUsers();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
         <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
