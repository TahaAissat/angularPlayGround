import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoSubjectComponent } from './page-demo-subject.component';

describe('PageDemoSubjectComponent', () => {
  let component: PageDemoSubjectComponent;
  let fixture: ComponentFixture<PageDemoSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDemoSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDemoSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
