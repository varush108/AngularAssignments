import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssignmentModule } from './assignment/assignment.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
   AssignmentModule 
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
