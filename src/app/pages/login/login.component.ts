import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
