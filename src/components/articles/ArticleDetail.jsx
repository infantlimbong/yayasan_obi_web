import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from './articleService';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticle(id);
        setArticle(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>No article found</p>;
  }

  return (
    <div className="bg-gray-200 rounded-md p-5">
      <h1 className="font-bold text-2xl mb-2">{article.title}</h1>
      <p className="mb-4 whitespace-pre-wrap">{article.content}</p>
      <p className="text-gray-600">Author: {article.author}</p>
    </div>
  );
};

export default ArticleDetail;
