import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditorialNewsCard = () => {
  const [editorialData, setEditorialData] = useState(null);

  useEffect(() => {
    const fetchEditorialNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://the-hindu-national-news.p.rapidapi.com/news/23',
        headers: {
          'X-RapidAPI-Key': 'bd2bcc28b5msh8de10d333394aa3p1a3d06jsn36ca4c05ccea',
          'X-RapidAPI-Host': 'the-hindu-national-news.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setEditorialData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEditorialNews();
  }, []);

  return (
    <div>
      <h1>Editorial News</h1>
      {editorialData ? (
        <div className="card">
          <h2>{editorialData.title}</h2>
          <p>{editorialData.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditorialNewsCard;

