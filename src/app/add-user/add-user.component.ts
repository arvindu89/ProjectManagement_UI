import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ProjectManagementService } from 'src/app/service/project-management.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  txtSearch: string = "";
  form: FormGroup;
  users: User[];
  user: any;
  msg: any;
  isEdit: boolean = false;
  previousColumn: string;
  ascending:boolean =true;
  constructor(private service: ProjectManagementService) {
    this.user = new User();
  }

  ngOnInit() {
    this.service.SearchUsers("","",true).subscribe(data => {
      this.users = data;
    });
  }
  
  AddUser() {
    console.log(this.isEdit);
    if (this.isEdit == false) {
      console.log('Add');
      this.service.AddUser(this.user).subscribe(data => {
        this.msg = data;
        this.service.SearchUsers("","",true).subscribe(data => {
          this.users = data;
        });
      });
    }
    else {
      console.log('update');
      this.service.UpdateUser(this.user).subscribe(data => {
        this.msg = data;
        this.service.SearchUsers("","",true).subscribe(data => {
          this.users = data;
          this.isEdit = false;
        });
      });
    }

  }

  EditUser(id: number) {
    console.log("edit");
    console.log(id);
    this.isEdit = true;
    
    this.service.GetUserDetails(id).subscribe(data => {
      this.user = data;      
    });
  }

  DeleteUser(id: number) {
    console.log("delete");
    console.log(id);
    this.service.DeleteUser(id).subscribe(data => {
      this.msg = data;
      this.service.SearchUsers("","",true).subscribe(data => {
        this.users = data;
      });
    })
  }

  SearchUsers() {
    this.service.SearchUsers(this.txtSearch,"",true).subscribe(data => {
      this.users = data;
    });
  }

  SortingUsers(name: string) {
    if(this.previousColumn != name)
    {
      this.ascending = true;
    }
    else if(this.ascending)
    {
      this.ascending =false;
    }
    else if(!this.ascending)
    {
      this.ascending =true;
    }

    this.previousColumn = name;
    this.service.SearchUsers(this.txtSearch,name, this.ascending).subscribe(data => {
      this.users = data;
    });
  }
}
