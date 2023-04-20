import { API_KEY } from "./constants"
export const originals= `/discover/movie?api_key=${API_KEY}&with_networks=213` 
export const romance=`/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const trending=`/discover/movie?api_key=${API_KEY}&with_genres=99`
export const banner= `/trending/all/week?api_key=${API_KEY}&language=en-us`
export const tv=`/discover/tv?api_key=${API_KEY}&with_network=213`
export const toprated=`/movie/top_rated?api_key=${API_KEY}&Language=eu-US`
export const rRated= `/discover/movie/?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`
export const theatreMovies= `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
export const kids=`/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
export const tomCruise=`/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=500&sort_by=vote_average.desc`
export const rRated2=`/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896`
export const drama=`/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`
