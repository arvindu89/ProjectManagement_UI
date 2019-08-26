import { Component, OnInit , ViewChild} from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectManagementService } from 'src/app/service/project-management.service';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {
  
  datevisibility = true;
  proj: Project;
  isEdit = false;
  projects: Project[];
  msg: any;
  users: User[];
  selectedUser: User;
  txtSearch: string;
  txtSearchProject: string = "";
  checkboxFlag: boolean = false;
  previousColumn: string;
  ascending: boolean = true;
  dateError: boolean = false;
  form:NgForm;
  constructor(private service: ProjectManagementService) {
    this.proj = new Project;
    this.proj.Priority = 2;
  }

  ngOnInit() {
    this.service.SearchProjects("", "", true).subscribe(data => {
      this.projects = data;
    });
  }
  
  resetFields()  {         
    this.form.resetForm();  
}

  enableDate() {
    this.datevisibility = !this.datevisibility;
    if (this.datevisibility == false) {
      var today = new Date();
      this.proj.StartDate = new Date();
      this.proj.EndDate = new Date(today.setDate(today.getDate() + 1));
      this.checkboxFlag = true;
    } else {
      this.proj.StartDate = null;
      this.proj.EndDate = null;
      this.checkboxFlag = false;
    }
    return;
  }

  register(form) {
    this.form = form;
  }
  resetForm() {    
    this.checkboxFlag = false;
    this.dateError = false;
    this.isEdit = false;
    this.resetFields();
  }

  SortingProject(name: string) {
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
    this.service.SearchProjects(this.txtSearchProject, name, this.ascending).subscribe(data => {
      this.projects = data;
    });
  }

  SearchProjects() {
    this.service.SearchProjects(this.txtSearchProject, "", true).subscribe(data => {
      this.projects = data;

    });
  }

  EditProject(id: number) {
    this.service.GetProjectDetails(id).subscribe(data => {
      this.proj = data;
      if (this.proj.StartDate != null) {
        this.datevisibility = true;
      }
      console.log(this.proj.UserID)
      if (this.proj.UserID != 0) {
        this.service.GetUserDetails(this.proj.UserID).subscribe(data => {
          this.selectedUser = data;
          this.SelectUser();
        });
      }
      this.isEdit = true;
    });
  }

  SuspendProject(id: number) {
    this.service.SuspendProject(id).subscribe(data => {
      this.msg = data;
      this.service.SearchProjects("", "", true).subscribe(data => {
        this.projects = data;
      });
    });
  }

  GetUsers() {
    this.service.SearchUsers("", "", true).subscribe(data => {
      this.users = data;
    });
  }

  SearchUser() {
    this.service.SearchUsers(this.txtSearch, "", true).subscribe(data => {
      this.users = data;
    });
  }

  SelectUser() {
    console.log('select user');
    this.proj.UserID = this.selectedUser.UserID;
    this.proj.UserName = this.selectedUser.FirstName + " " + this.selectedUser.LastName;

  }

  onItemChange(usr: User) {
    this.selectedUser = usr;
    console.log('itemchaneg');
  }

  Addproject() {
    this.proj.StartDate = new Date(this.proj.StartDate);
    this.proj.EndDate = new Date(this.proj.EndDate);
    
    if (this.proj.StartDate > this.proj.EndDate) {
      this.dateError = true;
      return false;
    }

    if (this.isEdit) {
      this.service.UpdateProject(this.proj).subscribe(data => {
        this.msg = data;
        this.service.SearchProjects("", "", true).subscribe(data => {
          this.projects = data;
        });
      })
    }
    else {
      this.service.AddProject(this.proj).subscribe(data => {
        this.msg = data;
        this.service.SearchProjects("", "", true).subscribe(data => {
          this.projects = data;
        });
      })
    }
    this.resetForm();
    return true;
  }
}
