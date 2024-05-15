import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoObsComponent } from './page-demo-obs.component';

describe('PageDemoObsComponent', () => {
  let component: PageDemoObsComponent;
  let fixture: ComponentFixture<PageDemoObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDemoObsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDemoObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
