import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.onRouteChanged(event);
    });
  }

  private onRouteChanged(event?: any): void {
    if (event && event instanceof NavigationEnd) {
      window.scroll(0, 0);
    }
  }
}
