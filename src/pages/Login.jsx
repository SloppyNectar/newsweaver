import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default Login;