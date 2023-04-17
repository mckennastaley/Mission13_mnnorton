import { useEffect, useState } from 'react';
import { movie } from '../types/movie';

function MovieList() {
  const [movieData, setmovieData] = useState<movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setmovieData(temp);
    };

    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The best movies in history!</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Category}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
              <td>{m.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
