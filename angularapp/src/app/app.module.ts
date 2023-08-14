import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { SampleComponent } from './sample/sample.component';
import { CaloryTrackerComponent } from './calory-tracker/calory-tracker.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    SampleComponent,
    CaloryTrackerComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UsdInrPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
