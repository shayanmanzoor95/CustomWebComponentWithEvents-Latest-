import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild,AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import videojs from "video.js"
import { IOptions } from './IOptions';



@Component({
  selector: 'app-video-player',
  templateUrl: './my-video-player.component.html',
  styleUrls: ['./my-video-player.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MyVideoPlayerComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit {
  @ViewChild('target',{ static: false }) target;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input('myOptions') Options: IOptions[];
  player: videojs.Player;
  rate=1;

  onTouchValue:string;

  @Output() myevent = new EventEmitter<string>();
  

 
  constructor(
    private elementRef: ElementRef,
  ) { }

  
  ngAfterViewInit(): void {
       // instantiate Video.js
  this.videoPlayer(this.Options);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.Options);
  }

  

ngOnInit() {
// console.log(this.onTouchValue);
  }
  

  ngOnDestroy() { 
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }


  videoPlayer(myOptions){
    // let mySource=this.mappingFunction();

    // console.log(this.Options)
    let myobj=JSON.stringify(myOptions);
    let NewSource=JSON.parse(myobj);
    // console.log("NewSource",NewSource)
    let FinalSource=JSON.parse(NewSource);
    // console.log("FINAL SOURCE",FinalSource)
    console.log(this.target.nativeElement);

    
    this.player = videojs(this.target.nativeElement, FinalSource, onPlayerReady); 
    

    
    function onPlayerReady() {
      // console.log('onPlayerReady', this);
      this.on('pause',()=>{
        // this.onTouchValue="paused"

      })

      this.on('play',()=>{
        // this.onTouchValue="played"
      })

      this.on('ended',function(){
        videojs.log('over so soon?');
      })

      // console.log("FUNCTION FINAL SOURCE",FinalSource);

     


      // this.on('pause',function(){
      //   let remaing=this.remainingTime();
      //   remaing=Math.round(remaing);
      //   console.log(remaing);
      // })

      // this.on('error',function(){
      //   console.log("error")
      // })

      // this.on('seeking',function(){
      //   let remaing=this.remainingTime();
      //   remaing=Math.round(remaing);
      //   console.log(remaing);
      // })
    }
  }


  onEventRaised(){
    this.player.on('pause',()=>{
      this.onTouchValue="Video has stopped."
      // console.log(this.onTouchValue);
      this.myevent.emit(this.onTouchValue);
    })
    this.player.on('play',()=>{
      this.onTouchValue="Video is being played"
      // console.log(this.onTouchValue);
      this.myevent.emit(this.onTouchValue);
    })
    this.player.on('buffer',()=>{
      this.onTouchValue="buffering"
      // console.log(this.onTouchValue);
      this.myevent.emit(this.onTouchValue);
    })
  }
 


  restart(){
    this.player.currentTime(0);
  }


  playBackrateIncrease(){
    if(this.rate<1){
      this.rate=this.rate+0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==1){
      this.rate++
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==2){
      this.rate++;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==3){
      this.rate++;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
      // this.player.playbackRate(3);
  }

  playBackrateDecrease(){
    if(this.rate>1){
      this.rate--;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==1){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==0.75){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==0.50){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
  }



  SetAspectRatio1(){
    console.log("16:9")
    this.player.aspectRatio('16:9')
  }
  
  SetAspectRatio2(){
    console.log('3:2')
    this.player.aspectRatio('3:2')
  }  

  onClick(message:string){
     if(this.player.played){
       this.onPlayed(message);
     }
     else if(this.player.paused){
       this.OnPause(message);
     }
  }

  onPlayed(message){
    this.myevent.emit(message);
  }

  OnPause(message){
    this.myevent.emit(message);
  }
  
}





// console.log(typeof(this.Options.height));
// let myheight=this.height.toString();
// this.Options.height=myheight;
// console.log(typeof(this.height));
// this.myArr.push(this.height);
// this.myArr.push(this.poster);
// this.myArr.push(this.width);
// this.myArr.push(this.preload);
// console.log(this.myArr);
// Object.keys(this.newOptions).map((key,index)=>{
//   this.newOptions["height"]=this.myArr[0]
//   this.newOptions["poster"]=this.myArr[1];
//   this.newOptions["width"]=this.myArr[2];
//   this.newOptions["preload"]=this.myArr[3];
// });
// console.log("new Options",this.newOptions);
// this.Options.height



 // mappingFunction(){
  //   const object1={
  //     height:this.height,
  //   poster:this.poster,
  //   width:this.width,
  //   preload:this.preload,
  //   fluid: this.fluid,
  //   muted:this.muted,
  //     aspectRatio: this.aspectRatio,
  //     autoplay: this.autoplay,
  //     sounrce:{
  //       src:this.src,
  //       type:this.type
  //     }
  //   }
  //   console.log(object1)
  //   return object1;
  // }


   // addingComponents(){
  //   this.player=videojs(this.elementRef.nativeElement);
  //   videojs.getComponent();
  //   const skipBehindButton = this.player.controlBar.addChild("button");
  //   var skipBehindButtonDom = skipBehindButton.el();
  //   skipBehindButtonDom.innerHTML = "30<<";
  //   skipBehindButton.addClass("buttonClass");

  //   var skipAheadButton = this.player.controlBar.addChild("button");
  //   var skipAheadButtonDom = skipAheadButton.el();
  //   skipAheadButtonDom.innerHTML = ">>30";
  //   skipAheadButton.addClass("buttonClass");
  // }


   // this.on('ready',function(){
      //   setTimeout(()=>{
      //     this.height();x
      //     this.play();
      //     this.playbackRate();
      //     console.log("boom")
      //   },3000)
      // })






      //THIS CODE WAS INSIDE method onEventRaised()

      // if(this.player.paused){
    //   this.onTouchValue="paused"
    //   console.log("Paused Event",this.onTouchValue)
    //   this.myevent.emit(this.onTouchValue);
    // }
    // else if(this.player.played){
    //   this.onTouchValue="played"
    //   console.log("Played Event",this.onTouchValue)
    //   this.myevent.emit(this.onTouchValue);
    // }