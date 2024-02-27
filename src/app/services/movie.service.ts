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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjRhNjBhZGE0ZDU0NzgyOGMzYzNkY2U3NDc1YmE1YiIsInN1YiI6IjY1ZDY5MzBmYzVjMWVmMDE3ZDhiMzllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2YE4hbzRcUyzI0pzJkL5io99IgLWczTnNn1av_ebiY'
  }
}

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
