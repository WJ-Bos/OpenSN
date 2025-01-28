import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  imports: [MatCardModule,
    MatFormField,
    MatButtonModule, MatLabel,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  backGroundImage = "";

  get bgImage():string{
    return this.backGroundImage;
  }

}
