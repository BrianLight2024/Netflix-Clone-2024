import "./Row.css";
import React,{ useState, useEffect } from "react";
import localaxios from "../../../utils/Axios";
import moviesTrailer from "movie-trailer"
import YouTube from "react-youtube"


const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await localaxios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })()
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('')
    }else {
        moviesTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                console.log(url)
                const urlParms = new URLSearchParams(new URL(url).search)
                console.log(urlParms);
                console.log(urlParms.get('v'))
                setTrailerUrl(urlParms.get('v'));
            })
            // .catch((err)=>{
            //   console.log(err);
            // })
    }
}
const opts ={
    height:'390',
    width:'100%',
    playerVars:{
        autoplay:1
    }
}
  return (
    <div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies?.map((movie, index) => (
					<img
						onClick={()=> handleClick(movie)} 
						key = {index} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
						alt={movie.name} className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
					/>
				))}
			</div>
			<div style={{ padding: '0px 20px'  }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
			</div>
		</div>
  );
};

export default Row;

































// import React, { useEffect, useState } from "react";
// import localAxios from "../../../utils/Axios";
// import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/original";

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   useEffect(() => {
//     async function fetchData() {
//       const request = await localAxios.get(fetchUrl);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };
//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.original_name || movie?.title || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>

//       <div className="row__posters">
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             onClick={() => handleClick(movie)}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//           />
//         ))}
//       </div>

//       <div className="row__youtube">
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// }

// export default Row;
