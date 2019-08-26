import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { Parenttask } from 'src/app/model/parenttask';
import { Task } from 'src/app/model/task';
import { ProjectManagementService } from 'src/app/service/project-management.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  task: Task;
  tasks: Task[];
  projects: Project[];
  msg: any;
  txtProjectSearch: string = "";
  previousColumn: string;
  ascending: boolean = true;

  constructor(private service: ProjectManagementService) { }

  ngOnInit() {
    this.task = new Task();
    this.service.SearchTasks(0,'',true).subscribe(data => {
      this.tasks = data;
    });
  }

  SearchProjects() {
    this.service.SearchProjects(this.txtProjectSearch, "", true).subscribe(data => {
      this.projects = data;
    });
  }

  onProjectItemChange(proj: Project) {
    this.task.ProjectID = proj.ProjectID;
    this.task.ProjectName = proj.ProjectName;
  }

  SelectProject(){
    this.service.SearchTasks(this.task.ProjectID,'',true).subscribe(data => {
      this.tasks = data;
    });
  }

  EndTask(task:Task){
    task.Status = true;
    this.service.UpdateTask(task).subscribe(data => {
      this.msg = data;
    });
  }

  SortingTask(name: string) {
    if (this.previousColumn != name) {
      this.ascending = true;
    }
    else if (this.ascending) {
      this.ascending = false;
    }
    else if (!this.ascending) {
      this.ascending = true;
    }
    this.previousColumn = name;
    if(this.task.ProjectID == undefined)
    {
      this.task.ProjectID = 0;
    }
    this.service.SearchTasks(this.task.ProjectID, name, this.ascending).subscribe(data => {
      this.tasks = data;
    });
  }
}
