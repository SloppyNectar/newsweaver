import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p className="mb-2">Name: {user.name}</p>
      <p className="mb-2">Email: {user.email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Profile;
