// import './App.css';
// import api from './api/axiosConfig';
// import { useState, useEffect } from 'react';

// function App() {

//   const [movies, setMovies]=  useState();
//   const getMovies = async () =>{
//     try
//     {
//       console.log("Attempting to fetch movies...");
//       const response = await api.get("http://localhost:8081/api/v1/movies");//this is the api get request that would concatenated with the axios base url
//       console.log("Response received", response.data);
//       //console.log(response.data);
//       setMovies(response.data);

//     } 
//     catch(err)
//     {
//       console.error("Error fetching movies:", err);
//     }
  
//   }
//   useEffect(() => {
//     getMovies();
//   },[])

//   return (
//     <div>
//     <h1>Movies</h1>
//     <ul>
//       {data.map(movie => (
//         <li key={movie.id}>
//           {movie.title} - {movie.releaseDate}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// }

// export default App;
import React, { useState, useEffect } from 'react';

// Mock data representing API response
const mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API (replace with actual API call in production)
    setData(mockData);
  }, []);

  return (
    <div>
      <h1>Mock Data Example</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

