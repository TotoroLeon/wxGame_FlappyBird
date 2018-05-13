# wxGame_FlappyBird
#微信小程序 ,FlappyBird 
## 源码目录介绍
```
./js
├── base                                   // 定义游戏开发基础类
│   ├── DataStore.js                       // 游戏数据配置
│   ├── Resource.js                        // 游戏资源配置
│   ├── Sprite.js                          // 精灵类(主画图)
│   └── ResourceLoader.js                  // 资源素材加载类
├── palyer
│   └──Birds.js                           // 小鸟类  
├── runtime
│   ├── Background.js                      // 背景类
│   ├── Land.js                            // 陆地类
│   ├── Pencil.js                          // 铅笔类(同管道)
│   ├── Downencil.js                       // 下铅笔
│   └── Uppencil.js                        // 上铅笔
├── Director.js                            // 导演类(逻辑控制)
├── Main.js                                // 游戏入口主函数 
└── res                                    // 图片资源              

```

## 演示:

```
![avatar](https://github.com/TotoroLeon/wxGame_FlappyBird/blob/master/demo.gif)
