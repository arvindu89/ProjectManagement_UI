import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProjectManagementService } from './project-management.service';
import { User } from '../model/user';
import { userInfo } from 'os';
import { Project } from '../model/project';
import { Task } from '../model/task';

describe('ProjectManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    expect(service).toBeTruthy();
  });

  it('should search users', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.SearchUsers('','',false).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should search Tasks', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.SearchTasks(1,'',false).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should search ParentTask', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.SearchParentTasks('').subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should Get Project Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.GetProjectDetails(1).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should Get Task Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.GetTaskDetails(1).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should Get User Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    const result = service.GetUserDetails(1).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should update User Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    var usr = new User();
    usr.EmployeeID = 111;
    usr.FirstName = 'Arvind';
    usr.LastName = 'Umamaheswar';
    usr.ProjectID = 1;
    usr.TaskID = 1;
    usr.UserID = 1;
    const result = service.UpdateUser(usr).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should update Project Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    var proj = new Project();
    proj.ProjectID = 1;
    proj.ProjectName = 'Task Management';
    proj.StartDate = new Date('8/26/2019');
    proj.EndDate = new Date('8/27/2019');
    proj.Priority = 10;    
    const result = service.UpdateProject(proj).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });

  it('should update Task Details', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    var task = new Task();
    task.TaskID = 1
    task.TaskName = 'Task Control Creation';
    task.StartDate = new Date('8/26/2019');
    task.EndDate = new Date('8/27/2019');
    task.Priority = 8;    
    task.ParentID = 1;
    task.ProjectID = 1;
    task.Status = false;
    const result = service.UpdateTask(task).subscribe(data=>
      expect(data.length).toBeGreaterThan(0))
  });
});
