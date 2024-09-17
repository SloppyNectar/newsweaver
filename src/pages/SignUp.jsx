import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form className="space-y-4">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;