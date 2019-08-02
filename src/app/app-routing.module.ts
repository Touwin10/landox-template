import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './layouts/home-screen/home-screen.component';
import { ScrollingComponent } from './layouts/scrolling/scrolling.component';
import { SlidingComponent } from './layouts/sliding/sliding.component';
import { SideComponent } from './layouts/side/side.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'scrolling', component: ScrollingComponent },
  { path: 'sliding', component: SlidingComponent },
  { path: 'side', component: SideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
