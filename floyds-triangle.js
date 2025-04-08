// let k=1;
// for(let i=1;i<=4;i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${k} `);
      
//     }
//       k++;
//      console.log();
// }
// 


   
let rows = 4;
let num = 1;
 
for (let i = 1; i <= rows; i++) {
   
    let output = "";
  for (let j = 1; j <= i; j++) {
        output += num + ' ';
        num++;
    }
    
    console.log(output);
}

  
 
