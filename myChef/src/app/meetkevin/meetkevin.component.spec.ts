import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetkevinComponent } from './meetkevin.component';

describe('MeetkevinComponent', () => {
  let component: MeetkevinComponent;
  let fixture: ComponentFixture<MeetkevinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetkevinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetkevinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
