import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleExploreComponent } from './circle-explore.component';

describe('CircleExploreComponent', () => {
  let component: CircleExploreComponent;
  let fixture: ComponentFixture<CircleExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
