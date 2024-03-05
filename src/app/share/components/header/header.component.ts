import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) userImg: string = ''
  @Output() navigateToSection = new EventEmitter<string>();
  navList = [
    {displayName: "Popular on Neflix", sectionId: 'popular'},
    {displayName: "Trending Tv shows", sectionId: 'trending'},
    {displayName: "Now Playing Movies", sectionId: 'now-playing'},
    {displayName: "Top Rated Movies", sectionId: 'top-rated'},
    {displayName: "Upcoming Movies", sectionId: 'upcoming'},
  ]
  
    constructor(private router: Router) {}
  
  
    navgateTo(sectionId:string) {
     this.navigateToSection.emit(sectionId);
    }
}
