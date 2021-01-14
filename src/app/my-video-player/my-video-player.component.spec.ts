import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVideoPlayerComponent } from './my-video-player.component';

describe('MyVideoPlayerComponent', () => {
  let component: MyVideoPlayerComponent;
  let fixture: ComponentFixture<MyVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVideoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
