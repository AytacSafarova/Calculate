let operators= document.querySelectorAll("#operator")
let fakeoperator= document.querySelectorAll("#fakeoperator")
let plus =document.querySelector('.plus')
let numbers= document.querySelectorAll("#number")
let input= document.querySelector(".result")
let equal= document.querySelector(".equal")


let  a=0 
const obj={
    previousvalue:0,
    nextvalue:0,
    operation:"",
    check: false,
    result:0
}
console.log(obj.nextvalue)

operators.forEach(item=>{
 item.addEventListener('click',  function calculate(){
    if (item.innerHTML=='+'){
       Sum()
obj.check=true
    }
    // if (item.innerHTML=='x'){
    //     Sum()
    //  }
    //  if (item.innerHTML=='-'){
    //     Sum()
    //  }
    //  if (item.innerHTML=='+'){
    //     Sum()
    //  }

    //  if (item.innerHTML=='='){
    //     Sum()
    //  }
    
 })})

numbers.forEach(element => {
    element.addEventListener('click', ()=>{
        input.innerHTML= `${input.innerHTML}${element.innerHTML}`
        

        if(obj.check==false){
            obj.previousvalue= Number(input.innerHTML)
           console.log(`obj.previous`,obj.previousvalue)

}
        else{
            input.innerHTML='bggg'
            console.log()

//  obj.nextvalue=element.value
//             console.log(`obj.nextvalue`,obj.nextvalue)
        }
          
    });
    })

    function Sum(){
        // input.innerHTML=''
      console.log(obj.nextvalue)
           result = Number(obj.previousvalue)+Number(obj.nextvalue) 
   }


// //fake buttons 

// fakeoperator.forEach(item=>{
//     item.addEventListener('click', ()=>{
     
//     if(item.innerHTML=='C'){
//         remove()
//     }
//    else  if(item.innerHTML=='+/-'){
//         change()
//     }
//   else   if(item.innerHTML=='.'){
// convert()    }
//     })
// })






// function remove(){
//     input.innerHTML=''
// }


// function change(){
//     if(Number(input.innerHTML)>0){
//     input.innerHTML=Number(input.innerHTML)*(-1)}

//   else  if(Number(input.innerHTML)<0){
// input.innerHTML=Number(input.innerHTML)*(-1)
// }
// }
// function convert(){
//     // let result Number(input.innerHTML).to
//     console.log(result)
// }









equal.addEventListener('click',()=>{
console.log(`result`, result)
} )
