import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WecareserviceComponent } from './wecareservice.component';

describe('WecareserviceComponent', () => {
  let component: WecareserviceComponent;
  let fixture: ComponentFixture<WecareserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WecareserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WecareserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
