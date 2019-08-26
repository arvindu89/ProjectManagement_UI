import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { Parenttask } from 'src/app/model/parenttask';
import { Task } from 'src/app/model/task';
import { ProjectManagementService } from 'src/app/service/project-management.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  isParentTask: boolean = false;
  task: Task;
  projects: Project[];
  parents: Parenttask[];
  users: User[];
  selectedUser: User;
  selectedParent: Parenttask;
  selectedProject: Project;
  msg: any;
  isEdit: boolean = false;
  txtProjectSearch: string = "";
  txtParentSearch: string = "";
  txtUserSearch: string = "";
  form: NgForm;
  param: string;
  constructor(private service: ProjectManagementService, private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.task = new Task();
    this.task.Priority = 2;
    var today = new Date();
    this.task.StartDate = new Date();

    this.task.EndDate = new Date(today.setDate(today.getDate() + 1));

    this.activatedRoute.params.subscribe(params => {
      console.log(this.router.url);
      this.param = params['id'];
      console.log(this.param);

      if (this.param != undefined) {
        this.service.GetTaskDetails(+this.param).subscribe(res => {
          this.task = res;
          this.isEdit = true;
          //console.log(this.item);
          if (this.task != null) {
            this.task.StartDate = new Date(this.task.StartDate);
            this.task.EndDate = new Date(this.task.EndDate);
          }
          this.service.GetUserDetails(this.task.UserID).subscribe(data => {
            this.task.UserName = data.FirstName + " " + data.LastName;
          });
        });
      }
    });
  }

  register(form) {
    this.form = form;
  }
  resetFields() {
    this.form.resetForm();
  }
  resetForm() {
    this.resetFields();
    this.txtProjectSearch = "";
    this.txtParentSearch = "";
    this.txtUserSearch = "";
  }
  SearchProjects() {
    this.service.SearchProjects(this.txtProjectSearch, "", true).subscribe(data => {
      this.projects = data;
    });
  }
  SearchParent() {
    this.service.SearchParentTasks(this.txtParentSearch).subscribe(data => {
      this.parents = data;
    });
  }
  SearchUser() {
    this.service.SearchUsers(this.txtUserSearch, "", true).subscribe(data => {
      this.users = data;
    });
  }

  SelectProject() {
    this.task.ProjectID = this.selectedProject.ProjectID;
    this.task.ProjectName = this.selectedProject.ProjectName;
  }
  SelectParentTask() {
    this.task.ParentID = this.selectedParent.ParentID;
    this.task.ParentTaskName = this.selectedParent.ParentTaskName
  }
  SelectUser() {
    this.task.UserID = this.selectedUser.UserID;
    this.task.UserName = this.selectedUser.FirstName + " " + this.selectedUser.LastName;
  }

  onProjectItemChange(proj: Project) {
    this.selectedProject = proj;
  }
  onParentItemChange(parent: Parenttask) {
    this.selectedParent = parent;
  }
  onUserItemChange(user: User) {
    this.selectedUser = user;
  }

  AddTask() {
    if (this.isParentTask) {
      this.selectedParent = new Parenttask();
      this.selectedParent.ParentTaskName = this.task.TaskName;
      this.service.AddParentTask(this.selectedParent).subscribe(data => {
        this.msg = data;
        this.router.navigate(['']);
      });
    }
    else if(this.isEdit)
    {
      this.service.UpdateTask(this.task).subscribe(data => {
        this.msg = data;
        this.router.navigate(['']);
      });
    }
    else {
      this.service.AddTask(this.task).subscribe(data => {
        this.msg = data;
        this.router.navigate(['']);
      });
    }
  }
}
