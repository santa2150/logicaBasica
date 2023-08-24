import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConjunPage } from './conjun.page';

describe('ConjunPage', () => {
  let component: ConjunPage;
  let fixture: ComponentFixture<ConjunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConjunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
