import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import NewsCard from '../components/NewsCard';
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fetchNews = async () => {
  const response = await api.get('/news');
  return response.data;
};

const NewsFeed = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: news, isLoading, error, refetch } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const response = await api.get(`/news/search?q=${searchQuery}`);
      refetch();
    }
  };

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="h-[400px] w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading news: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Personalized News Feed</h1>
      <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
