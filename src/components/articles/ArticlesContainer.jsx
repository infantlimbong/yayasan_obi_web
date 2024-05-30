import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from './articleService';

const ArticlesContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getArticles();
        const data = response.data.reverse();
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
    <section>
      <div className="flex flex-wrap gap-4">
        {items.map((article, index) => (
          <Link key={index} to={`/articles/${article._id}`} className="basis-full flex-grow flex gap-x-3">
            <div className="w-1/3 bg-red-300 rounded-md grid place-items-center">
              <h1 className="text-lg font-bold">Article image</h1>
            </div>
            <div className="w-2/3 bg-gray-300 rounded-md p-5 cursor-pointer hover:bg-gray-400/70 transition-all duration-300">
              <p className="font-bold">{article.title}</p>
              <p className='whitespace-pre-wrap truncate'>
                {article.content} <br />
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae mollitia ipsam odit neque molestiae pariatur dolore, ratione nostrum, reprehenderit facere doloribus error harum iust... */}
              </p>
              <p className="text-gray-600 mt-3">Author: <b className="text-gray-800">{article.author}</b></p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-1 justify-center mt-5">
        <a href="#" className="w-10 aspect-square bg-red-500 text-gray-300 grid place-items-center rounded-md">1</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">2</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">3</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">4</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">5</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">6</a>
        <a href="#" className="w-10 aspect-square border border-red-500 text-red-500 grid place-items-center rounded-md">7</a>
      </div>
    </section>
  );
};

export default ArticlesContainer;
