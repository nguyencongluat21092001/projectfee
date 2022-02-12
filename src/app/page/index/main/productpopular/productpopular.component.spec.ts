import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpopularComponent } from './productpopular.component';

describe('ProductpopularComponent', () => {
  let component: ProductpopularComponent;
  let fixture: ComponentFixture<ProductpopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductpopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
