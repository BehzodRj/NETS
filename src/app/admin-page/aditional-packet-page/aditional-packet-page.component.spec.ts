import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalPacketPageComponent } from './aditional-packet-page.component';

describe('AditionalPacketPageComponent', () => {
  let component: AditionalPacketPageComponent;
  let fixture: ComponentFixture<AditionalPacketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionalPacketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AditionalPacketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
