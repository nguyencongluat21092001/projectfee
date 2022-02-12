import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterheaterComponent } from './waterheater.component';

describe('WaterheaterComponent', () => {
  let component: WaterheaterComponent;
  let fixture: ComponentFixture<WaterheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
