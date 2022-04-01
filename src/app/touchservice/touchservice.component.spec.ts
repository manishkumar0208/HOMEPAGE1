import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchserviceComponent } from './touchservice.component';

describe('TouchserviceComponent', () => {
  let component: TouchserviceComponent;
  let fixture: ComponentFixture<TouchserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
