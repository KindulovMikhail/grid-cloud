import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorialComponent } from './add-tutorial.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddTutorialComponent', () => {
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddTutorialComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [ AddTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should called saveTutorial', () => {
  //   const openSpy = jest.spyOn(popup, 'open');
  //   fixture.detectChanges();
  //   expect(openSpy).toHaveBeenCalled();
  // });
});
