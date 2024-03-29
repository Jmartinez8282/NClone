import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options = {
  params: {
    include_adult: 'false',
    include_videos: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer toke goes here'
  }
}//use bearer token in our slack channel I removed it here becuase its public in github just add above in header under Athorization

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() 
  {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie',options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv',options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/account/21023517/rated/movies',options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`,options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`,options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing',options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular',options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated',options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
  

}
