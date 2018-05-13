import {DataStore} from './DataStore.js';

//精灵类 用于元素的渲染基类
export class Sprite{
  constructor( 
    image = null,
    srcx = 0, //要裁剪的起始坐标x
    srcy = 0, //要裁剪的起始坐标y
    srcwidth = 0, //要裁剪的宽度
    srcheight = 0, //要裁剪的高度
    x = 0, //放置的X坐标
    y = 0, //放置的Y坐标
    width = 0, //要使用的宽度
    height = 0 //要使用的高度
  ){
    this.datastore = DataStore.getInstance(); 
    this.ctx = this.datastore.ctx; 
    this.image = image;
    this.srcx = srcx;
    this.srcy = srcy;
    this.srcwidth = srcwidth;
    this.srcheight = srcheight;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
  }

  //draw方法
  draw(image = this.image,
  srcx = this.srcx,
  srcy = this.srcy,
  srcwidth = this.srcwidth,
  srcheight = this.height,
  x = this.x,
  y = this.y,
  width = this.width,
  height = this.height,  
  ){
    this.ctx.drawImage( 
        image,srcx ,srcy,srcwidth,srcheight,x,y,width,height);
  }
  static getImage(key){
    return DataStore.getInstance().res.get(key);
  }
}