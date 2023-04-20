
import React, { useState ,useEffect } from 'react'
import "./Banner.css"
import axios from '../constants/axios'
import {imageUrl ,API_KEY} from '../constants/constants'
import Youtube from 'react-youtube'

function Banner (props) {
  const [movie, setMovie] = useState();
  const[urlId,setUrlId]= useState('');


  useEffect(() => {
    axios.get(props.url).then((response)=>{  
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
  
    })
  }, [props.url])

  const handleMovie =(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        setUrlId(response.data.results[Math.floor(Math.random() * response.data.results.length)]) 

    })

  }

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
      controls : 0,
      loop:1
    },
  }


  return (
    <div>

      <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}}
      className="banner">      <div className='fade'>
      
          <div className="content">
              <h1 className="movie">{movie ? movie.original_title?movie.original_title : movie.name:"nil"}</h1>
              <h1 className='description'>{movie ? movie.overview : "nil"}</h1>
              <div className="banner-buttons">
                  <button className="button-play"onClick={()=>handleMovie(movie.id)} >Play</button>
                  <button className="button-info">More Info</button>
              </div>
          </div>
          </div>
      </div>
      {urlId && <Youtube className='player' videoId= {urlId.key} opts={opts}  />}

    </div>
  )
}

export default Banner
