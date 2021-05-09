function flaten(arr){
    return  arr.reduce((acc , cur)=>{
      return  acc.concat(Array.isArray(cur) ? flaten(cur) : cur);
    } , []);
}
console.log(flaten([10, [25, 13], [14, [55]], 2]) );