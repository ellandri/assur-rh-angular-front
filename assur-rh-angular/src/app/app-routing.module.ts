import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewsComponent } from './components/news/news.component';
import { MylearningComponent } from './components/mylearning/mylearning.component';
import { PlannerComponent } from './components/planner/planner.component';
import { SimulatorComponent } from './components/simulator/simulator.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'mylearning', component: MylearningComponent },
  { path: 'news', component: NewsComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'simulator', component: SimulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
