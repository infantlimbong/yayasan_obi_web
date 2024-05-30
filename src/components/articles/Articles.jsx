import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { getArticles, createArticle, updateArticle, deleteArticle } from './articleService';

Modal.setAppElement('#root');

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({ title: '', content: '', author: '', image: '' });
  const [editing, setEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
        const response = await getArticles();
        setArticles(response.data.reverse());
    } catch (error) {
        console.error('Failed to fetch articles:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateArticle(currentArticle._id, currentArticle);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Article updated successfully!',
        });
      } else {
        await createArticle(currentArticle);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Article created successfully!',
        });
      }
      setCurrentArticle({ title: '', content: '', author: '', image: '' });
      setEditing(false);
      setModalIsOpen(false);
      fetchArticles();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: editing ? 'Failed to update article!' : 'Failed to create article!',
      });
    }
  };

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setEditing(true);
    setModalIsOpen(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await deleteArticle(id);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Article has been deleted.',
        });
        fetchArticles();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete article!',
        });
      }
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You have unsaved changes. Do you really want to close?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, close it!'
    });

    if (result.isConfirmed) {
      setModalIsOpen(false);
      setEditing(false);
      setCurrentArticle({ title: '', content: '', author: '', image: '' });
    }
  };

  const resetForm = () => {
    setCurrentArticle({ title: '', content: '', author: '', image: '' });
  };

  if (!articles || articles.length === 0) {
    return <p className='w-full text-center mt-28'>No articles found</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <button
        onClick={openModal}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Create Article
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Article Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
      >
        <div className="bg-white p-8 rounded shadow-md w-11/12">
          <h2 className="text-2xl font-bold mb-4">{editing ? 'Edit Article' : 'Create Article'}</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col md:flex-row gap-x-2">
              <div className="mb-2 flex-grow">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentArticle.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  required
                  className="border border-gray-500 focus:outline-none rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-2 flex-grow">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  name="author"
                  value={currentArticle.author}
                  onChange={handleInputChange}
                  placeholder="Author"
                  required
                  className="border border-gray-500 focus:outline-none rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-2 flex-grow">
                <label htmlFor="image">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={currentArticle.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="border border-gray-500 focus:outline-none rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                value={currentArticle.content}
                onChange={handleInputChange}
                placeholder="Content"
                rows="10"
                required
                className="border border-gray-500 focus:outline-none rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-1">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                {editing ? 'Update' : 'Create'} Article
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="mb-4 p-4 border border-gray-500 focus:outline-none rounded shadow-md">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{article.content}</p>
            <p className="text-gray-500 italic">by {article.author}</p>
            {article.image && <img src={article.image} alt={article.title} className="mt-2 max-w-full h-auto" />}
            <div className="mt-2">
              <button
                onClick={() => handleEdit(article)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(article._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
