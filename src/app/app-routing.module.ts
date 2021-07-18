import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { MonthOverviewComponent } from './bar/month-overview/month-overview.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'bar/:year/:month', component: MonthOverviewComponent },
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
