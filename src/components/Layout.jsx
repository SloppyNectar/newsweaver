import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">NewsAI</Link>
          <div>
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground p-4">
        <div className="container mx-auto text-center">
          © 2024 NewsAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;