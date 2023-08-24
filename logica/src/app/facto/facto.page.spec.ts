import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactoPage } from './facto.page';

describe('FactoPage', () => {
  let component: FactoPage;
  let fixture: ComponentFixture<FactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
