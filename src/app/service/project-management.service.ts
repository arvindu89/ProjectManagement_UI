import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../model/user';
import { Project } from '../model/project';
import { Task } from '../model/task';
import { Parenttask } from '../model/parenttask';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {
  serviceurl:string ="http://localhost:53809/API/";
  taskAPI:string= this.serviceurl + "task/";
  userAPI:string= this.serviceurl + "user/";
  projectAPI:string= this.serviceurl + "project/";

  constructor(private http:HttpClient) { }

  //User Service
  SearchUsers(userName:string,sortField:string,ascending:boolean):Observable<any>
  {
    return this.http.get(this.userAPI+"Search?userName="+userName+"&sortField="+sortField+"&ascending="+ascending).pipe(map((res:Response)=>res))
    //return this.http.get("assets/data/userList.json").pipe(map((res:Response)=>res))
  }

  AddUser(item:User):Observable<any>
  {    
    return this.http.post(this.userAPI+"Add",item).pipe(map((res:Response)=>res))    
  }

  UpdateUser(item:User):Observable<any>
  {
    var data={id:item.UserID,value:item}
    return this.http.put(this.userAPI+"Update",item).pipe(map((res:Response)=>res))
  }

  GetUserDetails(id:number):Observable<any>
  {
    return this.http.get(this.userAPI+"GetUser?userID="+id).pipe(map((res:Response)=>res))
  }
  DeleteUser(id:number):Observable<any>
  {
    return this.http.delete(this.userAPI+"Delete?userID="+id).pipe(map((res:Response)=>res))
  }

  // Project Service 
  SearchProjects(name:string,sortField:string,ascending:boolean):Observable<any>
  {
    return this.http.get(this.projectAPI+"Search?projectName="+name+"&sortField="+sortField+"&ascending="+ascending).pipe(map((res:Response)=>res))
  }
  GetProjectDetails(id:number):Observable<any>
  {
    return this.http.get(this.projectAPI+"GetProject?projectID="+id).pipe(map((res:Response)=>res))
  }

  AddProject(item:Project):Observable<any>
  {
    return this.http.post(this.projectAPI+"Add",item).pipe(map((res:Response)=>res)) 
  }

  UpdateProject(item:Project):Observable<any>
  {
    return this.http.put(this.projectAPI+"Update",item).pipe(map((res:Response)=>res)) 
  }

  SuspendProject(id:number):Observable<any>
  {
    return this.http.delete(this.projectAPI+"Delete?projectID="+id).pipe(map((res:Response)=>res)) 
  }  

  
    // Task Service 
  AddTask(item:Task):Observable<any>
  {
    return this.http.post(this.taskAPI+"AddTask",item).pipe(map((res:Response)=>res))
  }

  GetTaskDetails(id:number):Observable<any>
  {
    return this.http.get(this.taskAPI+"GetTask?taskID="+id).pipe(map((res:Response)=> res))
  }

  UpdateTask(item:Task):Observable<any>
  {
    return this.http.put(this.taskAPI+"UpdateTask",item).pipe(map((res:Response)=> res))
  }

  SearchParentTasks(parentTask:string):Observable<any>
  {
    return this.http.get(this.taskAPI+"GetParentList?parent="+parentTask).pipe(map((res:Response)=>res))
  }  
  AddParentTask(item:Parenttask):Observable<any>
  {
    return this.http.post(this.taskAPI+"AddParent",item).pipe(map((res:Response)=>res))
  }

  SearchTasks(projectID:number,sortField:string,ascending:boolean):Observable<any>
  {
    return this.http.get(this.taskAPI+"Search?projectID="+projectID+"&sortField="+sortField+"&ascending="+ascending).pipe(map((res:Response)=>res))
  }
  
}
