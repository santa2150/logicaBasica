import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiboPage } from './fibo.page';

describe('FiboPage', () => {
  let component: FiboPage;
  let fixture: ComponentFixture<FiboPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
