import { Child4Component } from './child4/child4.component';
import { Child3Component } from './child3/child3.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'parent-theme', component: Child1Component },
  { path: 'component-theme', component: Child2Component },
  { path: 'Material-component-theme', component: Child3Component },
  { path: 'runtime-theme', component: Child4Component },
  { path: '', pathMatch: 'full', redirectTo: 'parent-theme' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
