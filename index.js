function fibs (n){
    let fibArray = []
    let a = 0
    let b;
    let c;

    console.log(fibArray)

    if (fibArray.length == 8){
        console.log(fibArray)
        return;
    }

    for (let i = 0; i < n; i++){
        if (a == 0){
            c = a
            fibArray.push(a);
            b = 1
            a += b
            b = c;
            

        } else {
            fibArray.push(a)
            c = a;
            a = c + b;
            b = c;
        }
    }

}


let n = 8;
function fibsRec(n, a, b, fibArray = []){
    if (a == null){
        a = 0; b = 1;
    }
    fibArray.push(a)
    c = a; a += b; b = c;
    
    if (n <= fibArray.length){
        console.log(fibArray)
        return
    }
    fibsRec(n, a, b, fibArray);
    
}

fibsRec(n)
   


    
   

    

        

        
            

            
            
           


   
