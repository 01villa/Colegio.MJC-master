import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZComponent } from './z.component';

describe('ZComponent', () => {
  let component: ZComponent;
  let fixture: ComponentFixture<ZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
