import { TestBed } from '@angular/core/testing';
import { TutorialService } from './tutorial.service';
import {HttpClientModule} from '@angular/common/http';

describe('TutorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [
      HttpClientModule
    ]}));
  it('should be created', () => {
    const service: TutorialService = TestBed.get(TutorialService);
    expect(service).toBeTruthy();
  });
});
