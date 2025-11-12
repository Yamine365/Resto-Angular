import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCommandComponent } from './pass-command.component';

describe('PassCommandComponent', () => {
  let component: PassCommandComponent;
  let fixture: ComponentFixture<PassCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassCommandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
