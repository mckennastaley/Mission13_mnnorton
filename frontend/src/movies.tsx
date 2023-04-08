import { text } from 'stream/consumers';
import data from './MovieData.json';

const MDS = data.MovieDataList;

function MovieList() {
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1
          style={{
            fontSize: '87px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            color: '#333333',
            textDecoration: 'underline',
          }}
        >
          Joel Hilton's Movie Collection
        </h1>
        <br></br>
        <h2>From the vaults of an expert.</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
        <table className="table" style={{ backgroundColor: '#d3d3d3' }}>
          <thead>
            <tr>
              <th style={{ fontSize: '32px' }}>Title</th>
              <th style={{ fontSize: '32px' }}>Director</th>
              <th style={{ fontSize: '32px' }}>Year</th>
              <th style={{ fontSize: '32px' }}>Rating</th>
              <th style={{ fontSize: '32px' }}>Category</th>
              <th style={{ fontSize: '32px' }}>Edited</th>
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
