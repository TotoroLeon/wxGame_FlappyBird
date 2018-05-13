import {Resource} from './Resource.js'
//素材加载类, 用于加载程序的所有素材
export class ResourceLoader{   
  constructor(){
      this.map = new Map(Resource);
      for(let [k,v] of this.map){
        const image = wx.createImage();
        image.src = v;
        this.map.set(k,image)
      } 
  }
  //加载全部结束回调
  onLoaded(callback){
      let loadCount = 0; 
      for(let value of this.map.values()){
          value.onload = () => {
              loadCount++; 
              if(loadCount >= this.map.size){ 
                  callback(this.map)
              }
          }
      }  
  }
  static create(){
    return new ResourceLoader();
  }
}