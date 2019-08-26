import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import{HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';

const routes : Routes =[
  {path: '', component: ViewTaskComponent},
  {path:'user', component: AddUserComponent },
  {path:'project', component: AddProjectComponent },
  {path:'addtask/:id', component: AddTaskComponent },
  {path:'addtask', component: AddTaskComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
