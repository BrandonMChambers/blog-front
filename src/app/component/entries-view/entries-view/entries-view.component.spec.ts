import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesViewComponent } from './entries-view.component';

describe('EntriesViewComponent', () => {
  let component: EntriesViewComponent;
  let fixture: ComponentFixture<EntriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
