import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project.component';
import {TableModule} from 'primeng/table';
import {RouterTestingModule} from '@angular/router/testing'
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,TableModule,HttpClientTestingModule,RouterTestingModule],
      declarations: [ AddProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Search Project', ()=>{
    var result = component.SearchProjects();
    expect(true).toBeTruthy;
  })
  it('Search User', ()=>{
    var result = component.SearchUser();
    expect(true).toBeTruthy;
  })

  it('Edit Project', ()=>{
    var result = component.EditProject(1);
    expect(true).toBeTruthy;
  })

  it('Sort Project', ()=>{
    var result = component.SortingProject("startdate");
    expect(true).toBeTruthy;
  })

  it('Initiailze Project', ()=>{
    var result = component.ngOnInit();
    expect(true).toBeTruthy;
  })

});
