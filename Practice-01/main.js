
var dog = {
    name: 'Rover',
    weight: 35
}

if (dog.weight>30) {
    alert('WOOF WOOF')
}
else{
    alert('woof woof')
}



setTimeout(() => {
    alert('Are u serious?')
}, 3000);


setTimeout(wakeUpUser,5000)
 
function wakeUpUser() {
    alert('Are u OK?')
}





 // Difference between var and let 

 function start() {
    //suppose if we declare var i = 0 in for loop,  we will not get the error for second console.log
     for (let i=0;i<5;i++) {
         console.log(i)
     }

     console.log(i)  // here var is function scoped , let and const are  block scoped
 }

 start()


 //var variable can be declared, (overwritten), (re-assigned) many time , which sometimes leads to problem in a program

 //in ES6 (ES2015) let and const were introduced

 //let and const have same properties, but const cannot be re-assigned as the name itself implies "Constant"

 //var creates a property on the global window object 
 