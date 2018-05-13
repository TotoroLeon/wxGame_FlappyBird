import {Sprite} from '../base/Sprite.js'
//背景类
export class BackGround extends Sprite{
  constructor(){ 
    //获取背景的资源,初始化背景的参数
    const image = Sprite.getImage('background');
      super(image,
          0,0,
          image.width,image.height,
          0,0,
          window.innerWidth,window.innerHeight
      ); 
  }
}