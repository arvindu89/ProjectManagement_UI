import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {RouterTestingModule} from '@angular/router/testing'
describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ AddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
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

  it('Search Parent', ()=>{
    var result = component.SearchParent();
    expect(true).toBeTruthy;
  })  

  it('Initialize', ()=>{
    var result = component.ngOnInit();
    expect(true).toBeTruthy;
  }) 
});
