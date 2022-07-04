import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkillsComponent } from './akills.component';

describe('AkillsComponent', () => {
  let component: AkillsComponent;
  let fixture: ComponentFixture<AkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
