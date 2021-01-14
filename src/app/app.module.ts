import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { MyVideoPlayerComponent } from './my-video-player/my-video-player.component';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  declarations: [
    MyVideoPlayerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[MyVideoPlayerComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector:Injector){
   
  }

  
  ngDoBootstrap(){ 
    const strategyFactory = new ElementZoneStrategyFactory(MyVideoPlayerComponent, this.injector);

    const webComponent=createCustomElement(MyVideoPlayerComponent,{injector:this.injector,strategyFactory});
    
    customElements.define('custom-player',webComponent)
   }
 }
