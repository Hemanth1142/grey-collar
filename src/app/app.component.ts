import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements DoCheck {
  constructor(private route: ActivatedRoute,private router: Router) {}
  topFooterDisplay :boolean = true;
  ngDoCheck()	
  {
    if(this.router.url == '/login' || this.router.url == '/signup' || this.router.url == '/home' || this.router.url == '/' )
    {
      this.topFooterDisplay =false;
    }
  }
}
