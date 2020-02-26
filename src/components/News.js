import React, { useState, useEffect } from "react";

export default function News() {
  useEffect(() => {
    fetch_News();
  }, []);
  const [news_data, setNData] = useState([]);
  const fetch_News = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f0ed34c2436488fbea43a2b2255489e&category=entertainment`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNData(data.articles);
      });
  };

  return (
    <div className="mt-5">
      <center>
        <h1 className="white c-title d-inline text-uppercase">
          Entertainment News
        </h1>
      </center>
      <div className="container">
        <div className="row">
          {news_data.map(items => (
            <div className="col-md-6">
              <div class="card h-auto news__card mb-4">
                <div class="card-header">{items.source.name}</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>{items.title}</p>
                    <footer class="blockquote-footer">
                      <cite title="Source Title">{items.author}</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-header "></div>
    </div>
  );
}