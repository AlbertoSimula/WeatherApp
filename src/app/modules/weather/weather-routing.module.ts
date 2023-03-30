import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './components/widget/widget.component';

const routes: Routes = [
  {
    component:WidgetComponent,
    path:'widget'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
