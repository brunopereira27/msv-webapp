import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheLegumeComponent } from './fiche-legume.component';

describe('FicheLegumeComponent', () => {
  let component: FicheLegumeComponent;
  let fixture: ComponentFixture<FicheLegumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheLegumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheLegumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
