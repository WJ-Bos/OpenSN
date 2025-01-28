import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignInComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
