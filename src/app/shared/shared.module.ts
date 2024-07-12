import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {InputComponent} from "./components/input/input.component";
import {ButtonComponent} from "./components/button/button.component";

@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    InputComponent,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    NgOptimizedImage,
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
