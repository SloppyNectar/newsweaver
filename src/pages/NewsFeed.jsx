import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import NewsCard from '../components/NewsCard';
import { Skeleton } from "@/components/ui/skeleton";

const fetchNews = async () => {
  const response = await api.get('/news');
  return response.data;
};

const NewsFeed = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-[200px] w-full" />
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
