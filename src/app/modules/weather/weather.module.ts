import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WidgetComponent } from './components/widget/widget.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class WeatherModule { }
