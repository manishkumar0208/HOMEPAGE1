import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileserviceComponent } from './mobileservice.component';

describe('MobileserviceComponent', () => {
  let component: MobileserviceComponent;
  let fixture: ComponentFixture<MobileserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
