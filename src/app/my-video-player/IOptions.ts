export interface IOptions{
    height:string,
    poster:string,
    width:string,
    preload:string,
    fluid: boolean,
    muted:boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
}