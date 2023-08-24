import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimoPage } from './primo.page';

describe('PrimoPage', () => {
  let component: PrimoPage;
  let fixture: ComponentFixture<PrimoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
