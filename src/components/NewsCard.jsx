import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from 'date-fns';

const NewsCard = ({ article }) => {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover mb-4 rounded" />
        )}
        <p className="text-sm text-gray-600 mb-2">{article.description}</p>
        <p className="text-xs text-gray-400">
          Published {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
