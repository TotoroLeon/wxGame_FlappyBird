export class DataStore{

  constructor(){
    this.map = new Map();
  }

  static getInstance(){
    if(!DataStore.instance){
      DataStore.instance = new DataStore()
    }
    return DataStore.instance;
    
  }
  put(k,v){
    if(typeof v === 'function'){
      v = new v;
    }
    this.map.set(k,v);
    return this;
  }
  get(k){ 
    return this.map.get(k)
  }
  destroy(){
    for( let value of this.map.values()){
      value = null;
    } 
  }
}