//map((num,i,arr)=>{})
Array.prototype.myMap= function (cb){
  let arr=[];
  for(let i=0;i<this.length;i++){
    arr.push(cb(this[i],i,this))
  }
  return arr

}
let nums=[1,2,3];
const multipleThree=nums.myMap((num,ind)=>{return num*3})
console.log(multipleThree)
