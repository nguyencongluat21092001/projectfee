import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooppingcartComponent } from './shooppingcart.component';

describe('ShooppingcartComponent', () => {
  let component: ShooppingcartComponent;
  let fixture: ComponentFixture<ShooppingcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShooppingcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShooppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
