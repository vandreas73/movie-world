import { Component } from '@angular/core';
import { NavigationItems } from 'src/app/navigation-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** The navigation items of the app */
  protected navItems = NavigationItems;
}
