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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGFlNTYwNzI5MjkyMWFmYzZlMWFlMzZhZWUzYTU5NiIsInN1YiI6IjY1ZDY5MzBmYzVjMWVmMDE3ZDhiMzllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LIAx5RbruDfCc4kvHG50Hyd1nr8QDFHR__-Q685tV0'
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

}
