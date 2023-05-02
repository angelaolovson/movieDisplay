import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
	const [movie, setMovie] = useState(null);
  const apiKey = 'df3f2f7b';

  // function to fetch movie data
  // searchTerm is formData from Form.js
  const getMovie = async (searchTerm) => {
    // make the fetch request and store results in response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    // parse the returned JSON 
    const data = await response.json()
    setMovie(data)
  }

  // useEffect will run on initial render and whenever movie changes
  useEffect(() => {
    getMovie('clueless')
    // the empty [] is a dependency array and when empty this code runs once when the component mounts
  }, [])


  // everything in this return is JSX..js & xml
	return (
		<div className='App'>
			{/* pass the getMovie function to MovieDisplay */}
			<Form  movieSearch={getMovie} />
			<MovieDisplay movie={movie}/>
		</div>
	);
}

export default App;
