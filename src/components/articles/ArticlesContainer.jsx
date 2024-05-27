import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/articles');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log('API response:', data);

        if (Array.isArray(data)) {
          setItems(data);
        } else if (data.items && Array.isArray(data.items)) {
          setItems(data.items);
        } else {
          console.error('Unexpected response format:', data);
          setItems([]);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setItems([]);
      }
    };
    fetchData();
  }, []);

  if (!items || items.length === 0) {
    return <p>No articles available</p>;
  }

  return (
    <section className="md:px-20">
      <div className='flex flex-wrap gap-4'>
        {items.map((article, index) => (
          <Link key={index} to={`/articles/${article._id}`} className='block basis-full sm:basis-1/3 md:basis-1/4 flex-grow'>
            <div className='bg-gray-300 rounded-md p-5 cursor-pointer hover:bg-gray-400/70 transition-all duration-300'>
              <p className='font-bold'>{article.title}</p>
              <p>{article.content}</p>
              <p className='text-gray-600'>{article.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArticlesContainer;
