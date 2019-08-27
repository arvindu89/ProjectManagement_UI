import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProjectManagementService } from './project-management.service';

describe('ProjectManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProjectManagementService = TestBed.get(ProjectManagementService);
    expect(service).toBeTruthy();
  });
});
