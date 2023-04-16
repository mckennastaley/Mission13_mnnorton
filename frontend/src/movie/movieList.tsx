import { useState } from 'react';
import { movie } from '../types/movie';

function MovieList() {
  const [movieData, setmovieData] = useState<movie[]>([]);

  return (
    <>
      <div className="row">
        <h4>The best movies in history!</h4>
      </div>
      <table>
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
        <tbody></tbody>
      </table>
    </>
  );
}

export default MovieList();
