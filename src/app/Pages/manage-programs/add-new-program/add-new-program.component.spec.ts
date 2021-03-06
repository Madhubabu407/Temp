import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProgramComponent } from './add-new-program.component';

describe('AddNewProgramComponent', () => {
  let component: AddNewProgramComponent;
  let fixture: ComponentFixture<AddNewProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
