import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VotarComponent } from './pages/votar/votar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'votar', component: VotarComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
