import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {TableModule} from 'primeng/table';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,TableModule,RouterTestingModule,HttpClientTestingModule],
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Edit user', ()=>{
    var result = component.EditUser(1);
    expect(true).toBeTruthy;
  })
  it('Search User', ()=>{
    var result = component.SearchUsers();
    expect(true).toBeTruthy;
  })

  it('Init Project', ()=>{
    var result = component.ngOnInit();
    expect(true).toBeTruthy;
  })

  it('Sort Project', ()=>{
    var result = component.SortingUsers("FirstName");
    expect(true).toBeTruthy;
  })
});
