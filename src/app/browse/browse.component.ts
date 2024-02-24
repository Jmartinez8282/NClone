import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../share/components/header/header.component';
import { BannerComponent } from '../share/components/banner/banner.component';
import { MovieService } from '../services/movie.service';
import { MovieCarouselComponent } from '../share/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../share/models/video-content.interface';


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

  popularMovies: IVideoContent[] = []

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=> {
      console.log(res)
      this.popularMovies = res.results
    })
  }


  signOut() {
    sessionStorage.removeItem("loggedInUser")
    this.auth.signOut();
  }

}
