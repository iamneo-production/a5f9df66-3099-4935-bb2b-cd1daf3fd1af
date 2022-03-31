import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddonComponent } from './admin-addon.component';

describe('AdminAddonComponent', () => {
  let component: AdminAddonComponent;
  let fixture: ComponentFixture<AdminAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
