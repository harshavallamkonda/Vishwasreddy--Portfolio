import React from 'react';
import './Music.css';
import albumCover2 from '../images/ac-dc.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/guns-n-roses.webp'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];
const favoriteAlbums = [
  { title: "Back in Black", artist: "AC/DC", imgSrc: albumCover2 },
  { title: "Appetite for Destruction", artist: "Guns N' Roses", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  const handleGenreClick = (genre: string) => {
    // Open Spotify search for the genre
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(genre)}`;
    window.open(spotifyUrl, '_blank');
  };

  const handleAlbumClick = (album: string, artist: string) => {
    // Open Spotify search for the album
    const query = `${album} ${artist}`;
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
    window.open(spotifyUrl, '_blank');
  };

  return (
    <div className="music-page">
      <div className="quote">
        <p>"Rock and Roll isn't a genre, it's a way of life." 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div 
              key={index} 
              className="genre-card" 
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleGenreClick(genre)}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div 
              key={index} 
              className="album-card" 
              style={{ animationDelay: `${index * 0.3}s` }}
              onClick={() => handleAlbumClick(album.title, album.artist)}
            >
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;