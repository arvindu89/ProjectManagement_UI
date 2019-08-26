import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes : Routes =[
  {path: '', component: ViewTaskComponent},
  {path:'user', component: AddUserComponent },
  {path:'project', component: AddProjectComponent },
  {path:'addtask/:id', component: AddTaskComponent },
  {path:'addtask', component: AddTaskComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
