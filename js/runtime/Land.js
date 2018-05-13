import {Sprite} from '../base/Sprite.js'
export class Land extends Sprite{

  constructor(){
    const image = Sprite.getImage('land'); 
    super(image,
      0, 0,
      image.width, image.height,
      0, window.innerHeight - image.height,
      image.width, image.height
    ); 
    //地板的水平变化坐标
    this.landX = 0;
    //地板的移动速度
    this.speed = 1;
  }
  draw(){
    this.landX = this.landX+ this.speed;
    if(this.landX >(this.image.width-window.innerWidth) ){
      this.landX=0;
    } 
    super.draw(this.image,this.srcx, this.srcy, this.srcwidth, this.height, -this.landX, this.y, this.width, this.height);
  }

}