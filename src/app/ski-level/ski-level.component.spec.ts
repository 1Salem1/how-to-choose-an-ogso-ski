import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiLevelComponent } from './ski-level.component';

describe('SkiLevelComponent', () => {
  let component: SkiLevelComponent;
  let fixture: ComponentFixture<SkiLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
