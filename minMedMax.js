const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
 let a=[n1,n2,n3];
 if(n1<n3 && n1<n2){
    if(n2<n3){
      a=[n1,n2,n3]; 
    }else{
      a=[n1,n3,n2];
    }
}else if(n2<n1 && n2<n3){
    if(n1<n3){
      a=[n2,n1,n3]; 
    }else{
      a=[n2,n3,n1];
  }
}else{
  if(n2<n1){
    a=[n3,n2,n1]; 
  }else{
    a=[n3,n1,n3];
}
}

 return {min: a[0], mid: a[1], max: a[2]};


 
 
}
module.exports = minMedMax

