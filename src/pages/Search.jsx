import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search News</h1>
      <div className="flex space-x-2">
        <Input type="text" placeholder="Enter keywords..." className="flex-grow" />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;