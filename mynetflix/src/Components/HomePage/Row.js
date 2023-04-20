import React,{useEffect,useState} from 'react'
import "./row.css"
import axios from '../constants/axios'
import {imageUrl,API_KEY} from '../constants/constants'
import Youtube from 'react-youtube'
function Row(props) {
  const[movies,setMovies]= useState([])
  const[urlId,setUrlId]= useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)

  })
  }, [props.url])
                
  const opts = {
    height: '700',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
      controls : 0,
    },
  }
  const handleMovie =(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        console.log(response)

      } 
        else{
        console.log("Array not available")
      }
    })
  }
  return (
    <div className='rows'>
        <h2 className='title'>{props.title}</h2>
        <div  className='posters'>
          {  movies.map((obj)=> 
              <img onClick={()=>handleMovie(obj.id)} 
              className= {props.isSmall ?'smallPoster' : 'poster'} 
              src={`${imageUrl+obj.poster_path}`}key={crypto.randomUUID()} alt="poster" />             
)}             
      </div>
        {urlId && <Youtube videoId= {urlId.key} opts={opts} />}
      </div>
  )
}

export default Row
