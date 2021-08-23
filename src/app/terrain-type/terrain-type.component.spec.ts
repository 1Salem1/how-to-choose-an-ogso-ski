import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainTypeComponent } from './terrain-type.component';

describe('TerrainTypeComponent', () => {
  let component: TerrainTypeComponent;
  let fixture: ComponentFixture<TerrainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
