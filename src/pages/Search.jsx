import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from '../lib/api';
import NewsCard from '../components/NewsCard';

const searchNews = async (query) => {
  const response = await api.get(`/news/search?q=${query}`);
  return response.data;
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');

  const { data: searchResults, isLoading, error } = useQuery({
    queryKey: ['searchNews', search],
    queryFn: () => searchNews(search),
    enabled: !!search,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchQuery);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search News</h1>
      <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {isLoading && <div>Searching...</div>}
      {error && <div>Error: {error.message}</div>}
      {searchResults && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
