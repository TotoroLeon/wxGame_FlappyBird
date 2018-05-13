import { ResourceLoader } from './base/ResourceLoader.js';
import { Director } from './Director.js'; 
import { DataStore } from './base/DataStore.js'; 
import { BackGround } from './runtime/BackGround.js';
import { Land } from './runtime/Land.js';
import { Birds } from './player/Birds.js';
var canvas = wx.createCanvas();
export class Main {

  constructor() {
    this.ctx = canvas.getContext('2d'); 
    this.dataStore = DataStore.getInstance(); 
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    //加载素材资源
     loader.onLoaded(map => this.onResourceFirstLoaded(map)) ;
    
  }
   onResourceFirstLoaded(map) {  
     //画布存储在数据类中
     this.dataStore.ctx = this.ctx;
     //初始化素材存储再数据类中
     this.dataStore.res = map; 
     //初始化操作
     this.init(); 
  }

  init(){    
    this.dataStore.isGameOver = false;
    this.dataStore.put('background', BackGround)
                  .put('land',Land)
                  .put('birds', Birds)
                  .put('pencils',[]); 
    //游戏开始之前创建pencil   
    this.registerEvent();           
    this.director.createPencil();

    this.director.run();
  }

  registerEvent(){ 
    wx.onTouchStart(e=>{
      this.director.birdsEvent();
    })
  }

}