import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcastHeaderComponent } from './blogcast-header.component';

describe('BlogcastHeaderComponent', () => {
  let component: BlogcastHeaderComponent;
  let fixture: ComponentFixture<BlogcastHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcastHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
