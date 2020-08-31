import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloomhavenPartiesComponent } from './gloomhaven-parties.component';

describe('GloomhavenPartiesComponent', () => {
  let component: GloomhavenPartiesComponent;
  let fixture: ComponentFixture<GloomhavenPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloomhavenPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
