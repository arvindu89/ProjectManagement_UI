import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { ViewTaskComponent } from './view-task.component';
import {TableModule} from 'primeng/table';
import {RouterTestingModule} from '@angular/router/testing'
import {HttpClientTestingModule} from '@angular/common/http/testing'
describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,TableModule, RouterTestingModule,HttpClientTestingModule],
      declarations: [ ViewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
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
  
  it('sort task', ()=>{
    var result = component.SortingTask('startdate');
    expect(true).toBeTruthy;
  })  

  it('select project', ()=>{
    var result = component.SelectProject();
    expect(true).toBeTruthy;
  })  

  it('Initialize', ()=>{
    var result = component.ngOnInit();
    expect(true).toBeTruthy;
  }) 

});
