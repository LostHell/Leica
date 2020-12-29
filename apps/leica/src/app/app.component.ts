import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigation = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Gallery',
      route: '/gallery',
    },
    {
      name: 'Hire Photographer',
      route: '/hire/photographers',
    },
    {
      name: 'Account',
      route: '/user/account',
    },
    {
      name: 'Login',
      route: '/user/login',
    },
    {
      name: 'Register',
      route: '/user/register',
    },
  ];
}
