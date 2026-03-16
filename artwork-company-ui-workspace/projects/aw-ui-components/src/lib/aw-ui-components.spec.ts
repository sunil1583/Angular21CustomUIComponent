import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwUiComponents } from './aw-ui-components';

describe('AwUiComponents', () => {
  let component: AwUiComponents;
  let fixture: ComponentFixture<AwUiComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwUiComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(AwUiComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
