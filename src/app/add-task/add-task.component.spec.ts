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
});
