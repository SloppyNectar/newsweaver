import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to NewsAI</h1>
      <p className="text-xl mb-8">Your personalized news aggregator with AI-powered insights</p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/signup">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;