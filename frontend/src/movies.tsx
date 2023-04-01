import data from './MovieData.json';

const MDS = data.MovieDataList;

function MovieList() {
  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MDS.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Director}</td>
                <td>{m.Year}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <th>{m.Edited}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
