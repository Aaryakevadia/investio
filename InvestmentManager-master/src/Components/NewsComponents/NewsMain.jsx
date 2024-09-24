import React, { useState } from 'react';
import NewsList from './NewsList';
import SearchBar from './SearchBar';
import './News.css';

function NewsMain() {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (query) => {
    const apiKey = '8851210072814d85be557116e9a5ad83'; // Replace with your News API key
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query + " business OR finance OR economy")}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="App">
      <h1>Stock News</h1>
      <SearchBar fetchNews={fetchNews} />
      <NewsList articles={articles} />
    </div>
  );
}

export default NewsMain;
