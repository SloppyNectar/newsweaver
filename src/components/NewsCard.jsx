import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsCard = ({ article }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{article.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
