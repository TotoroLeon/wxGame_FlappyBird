import { Sprite } from '../base/Sprite.js'
export class Pencil  extends Sprite{
  constructor(image, top) {
  
    super(image,
      0, 0,
      image.width, image.height,
      window.innerWidth, 0,
      image.width, image.height
    );
    this.speed = 2;
    this.top = top;
  }
  draw(){ 
    this.x = this.x-this.speed;
    super.draw(this.image, 0,0, this.width, this.height, this.x, this.y, this.image.width, this.image.height); 
    
  }

}