import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableReviewComponent } from './vegetable-review.component';

describe('VegetableReviewComponent', () => {
  let component: VegetableReviewComponent;
  let fixture: ComponentFixture<VegetableReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
