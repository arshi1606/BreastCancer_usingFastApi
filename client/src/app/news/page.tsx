"use client";

import React, { useState, useEffect } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
}

const NewsPage: React.FC = () => {
  const [query, setQuery] = useState("breast cancer"); // Default query changed to "breast cancer"
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "61cbc3c8d1694b8c9c66f5b441cd0413";

  const fetchNews = async (searchQuery: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          searchQuery
        )}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      if (data.articles) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch news when component mounts
    fetchNews(query);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <>
    
    <div className="news-page">
      <h1>News Articles</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="grid">
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="card">
                <img
                  src={
                    article.urlToImage ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={article.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-description">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <style jsx>{`
        .news-page {
          padding: 2rem;
          font-family: Arial, sans-serif;
          color: #333;
        }
        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .search-form {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .search-input {
          padding: 0.5rem;
          width: 300px;
          border: 2px solid #333;
          border-right: none;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          font-size: 1rem;
        }
        .search-button {
          padding: 0.5rem 1rem;
          background-color: #000;
          color: #fff;
          border: 2px solid #000;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .search-button:hover {
          background-color: #333;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-title {
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }
        .card-description {
          flex: 1;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .read-more {
          align-self: flex-start;
          background: #007bff;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .read-more:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
    </>
  );
};

export default NewsPage;
