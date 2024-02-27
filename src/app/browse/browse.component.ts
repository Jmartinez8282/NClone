import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../share/components/header/header.component';
import { BannerComponent } from '../share/components/banner/banner.component';
import { MovieService } from '../services/movie.service';
import { MovieCarouselComponent } from '../share/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../share/models/video-content.interface';
import { forkJoin, map } from 'rxjs';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,BannerComponent,MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  constructor(private auth: AuthService,private movieService: MovieService) {}

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];
  

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),

  ]


  ngOnInit(): void {
    forkJoin(this.sources).pipe(map(([movies,tvShows,ratedMovies,nowPlaying,upcomingMovies,popularMovies,topRated]) => {
      return {movies,tvShows,ratedMovies,nowPlaying,upcomingMovies,popularMovies,topRated}
    })
    ).subscribe((res:any) => {
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcomingMovies.results as IVideoContent[];
      this.popularMovies = res.popularMovies.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
    })
  }


  signOut() {
    sessionStorage.removeItem("loggedInUser")
    this.auth.signOut();
  }

}
