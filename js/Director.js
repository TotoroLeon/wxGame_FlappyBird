//导演类,控制游戏逻辑
import { DataStore} from './base/DataStore.js';
import { Uppencil } from './runtime/Uppencil.js';
import { Downpencil } from './runtime/Downpencil.js';



export  class Director{

  //单例模式
  static getInstance(){
    if(!Director.instance){
      Director.instance =new Director();
    }
    return  Director.instance;
  }
  //初始化导演类,加载必要的素材
  constructor() {
    this.dataStore = DataStore.getInstance();
  }

  createPencil(){
    const minTop = window.innerHeight / 8 ;
    const maxTop = window.innerHeight / 2 ;
    const top =  minTop + Math.random()*(maxTop-minTop);
    this.dataStore.get('pencils').push(new Uppencil(top));
    this.dataStore.get('pencils').push(new Downpencil(top));

  }

  birdsEvent(){
    //点击触发修改小鸟的Y坐标
    for(let i=0;i<=2;i++){
      this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
    }
    this.dataStore.get('birds').time = 0;
  }

  static isStrike(bird,pencil){ 
    let s = false ; 
    // console.log(pencil);
     if(bird.top >pencil.top &&  bird.bottom <pencil.bottom && bird.right > pencil.left&& bird.left<pencil.right ){
       s = true;
     }

    return s;

  }
  //小鸟碰撞地板,碰撞铅笔
  check(){
      const land = this.dataStore.get('land');
      const birds = this.dataStore.get('birds')
      const pencils = this.dataStore.get('pencils')
      if(birds.birdsY[0]+birds.birdsHeight[0]>=land.y){
        this.dataStore.isGameOver = true;
      } 
      //小鸟边框模型
      const birdsBorder = {
        top:birds.y[0],
        bottom:birds.birdsY[0] + birds.birdsHeight[0],
        left:birds.birdsX[0],
        right:birds.birdsX[0]+birds.birdsWidth[0]
      };
      const length = pencils.length;
 
      //循环铅笔,重复建模
      for(let i = 0 ; i<length ; i++){
          const pencil = pencils[i] ;
          const pencilBorder = {
            top: pencil.y ,
            bottom: pencil.y + pencil.height ,
            left:  pencil.x,
            right:  pencil.x + pencil.width
          }  
          // console.log('鸟');
          // console.log(birdsBorder)
          // console.log('铅笔')
          // console.log(pencilBorder); 
          if (Director.isStrike(birdsBorder, pencilBorder)) {
            //console.log(111);
            this.dataStore.isGameOver = true; 
          }
      }
     

  }

  //运行逻辑,加载背景,初始化玩家,障碍 等逻辑
  run(){
    this.check();
    if(!this.dataStore.isGameOver){
        //渲染背景  
        this.dataStore.get('background').draw();
        //渲染铅笔
        const pencils = this.dataStore.get('pencils');
        //console.log(pencils[0].x);
        // 铅笔的坐标+ 铅笔的宽度 小于等于0 并且铅笔数小于4个重新销毁
        if (pencils[0].x+pencils[0].width<=0 && pencils.length === 4){
            pencils.shift(); 
            pencils.shift(); 
        }
        //铅笔的坐标小于(屏幕的坐标-铅笔的宽度)/2 并且 铅笔的组数 =1 创建新铅笔组
        if(pencils[0].x<= (window.innerWidth-pencils[0].width)/2 && pencils.length ===2){
          this.createPencil();
        }
        this.dataStore.get('pencils').forEach(function(value ,index,array){
            value.draw();
        });
        //渲染陆地
        this.dataStore.get('land').draw(); 
        this.dataStore.get('birds').draw(); 
        let timer =  requestAnimationFrame(()=>this.run());
    }else{
        console.log('游戏结束');
        cancelAnimationFrame(this.dataStore.get('timer'));
        this.dataStore.destroy();
    }
    //this.dataStore.put('timer',timer); 
    //cancelAnimationFrame(this.dataStore.get('timer'));

  }
   
}