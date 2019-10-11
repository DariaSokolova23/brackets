module.exports = 
function check(str, bracketsConfig) {
  //создадим массив с конфигурациями и с помощью join переведем его содержимое в строки
    let myConf = [];
    for(let index=0; index<bracketsConfig.length; index++){
      myConf.push(bracketsConfig[index].join(''));
    }
//убираем из строки парные скобки пока не получим результат
    let prevLength = str.length+1;
    for( ;prevLength>str.length; ){
        prevLength = str.length;
        for(let i=0; i<myConf.length;i++){
          str = str.replace(myConf[i],'');
        }             
    }
    if(prevLength===0){
      return true;      
    }else{
      return false;
    }  
}

