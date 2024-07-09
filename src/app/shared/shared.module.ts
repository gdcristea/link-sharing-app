import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {InputComponent} from "./components/input/input.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgOptimizedImage,
    InputComponent
  ],
  exports: [
    CommonModule,
    NgOptimizedImage,
    InputComponent
  ]
})
export class SharedModule { }
