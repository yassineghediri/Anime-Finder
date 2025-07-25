import React from 'react';

const AnimeCard = ({ anime }) => {
  const {
    title,
    title_english,
    images,
    score,
    type,
    aired,
    episodes,
    duration,
    rating,
    rank,
    popularity,
    members,
    favorites,
    status,
    year,
  } = anime;

  return (
    <div className="anime-card">
      <img
        src={images?.jpg?.image_url || '/no-anime.png'}
        alt={title_english || title || 'Anime'}
        className="anime-img"
      />
      <div className="mt-4">
        <h3>{title_english || title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="star" />
            <p>{score?.toFixed(1) || 'N/A'}</p>
          </div>

          <span> · </span>
          <p className="type">{type || 'N/A'}</p>
          <span> · </span>
          <p className="year">{aired?.prop?.from?.year || year || 'N/A'}</p>
        </div>

        <div className="extra mt-2">
          <p><strong>Episodes:</strong> {episodes ?? 'N/A'}</p>
          <p><strong>Duration:</strong> {duration || 'N/A'}</p>
          <p><strong>Status:</strong> {status || 'N/A'}</p>
          <p><strong>Rating:</strong> {rating || 'N/A'}</p>
          <p><strong>Rank:</strong> #{rank ?? 'N/A'}</p>
          <p><strong>Popularity:</strong> #{popularity ?? 'N/A'}</p>
          <p><strong>Members:</strong> {members?.toLocaleString() ?? 'N/A'}</p>
          <p><strong>Favorites:</strong> {favorites?.toLocaleString() ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
