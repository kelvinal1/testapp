import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserRecoveryComponent } from './login-user-recovery.component';

describe('LoginUserRecoveryComponent', () => {
  let component: LoginUserRecoveryComponent;
  let fixture: ComponentFixture<LoginUserRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUserRecoveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
