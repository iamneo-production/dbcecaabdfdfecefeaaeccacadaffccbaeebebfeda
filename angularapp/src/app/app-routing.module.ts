import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloryTrackerComponent } from './calory-tracker/calory-tracker.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'calory-tracker',
    component: CaloryTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
