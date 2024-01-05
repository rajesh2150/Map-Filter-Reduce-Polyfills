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


//filter((num,i,arr)=>{})
Array.prototype.MyFilter=function (cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)) temp.push(this[i])
  }
  return temp
}

let arr=[1,2,4,5]
const multiple=arr.MyFilter((num)=>{return num>2})
console.log(multiple)
