import { Pencil } from './Pencil.js'
import { Sprite } from '../base/Sprite.js'
/**
 * 铅笔基类
 */
export  class Uppencil extends Pencil{
  
  constructor(top){
    const image = Sprite.getImage('pencilUp');
    super(image,top); 
  }
  draw(){
    this.y=this.top-this.height;
    super.draw();
  }

}