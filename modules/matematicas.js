const Math = {};

const add = async(a,b) => { 
    return a + b;
}


const substract = async(a,b) => { 
    return a - b;
}

const multiply = async(a,b) => { 
    return a * b;
}

const divide= async(a,b) => { 
   
    if (b == 0 && a == 0)  {
        return "No Aplica";
    } else if(b==0){
    return "n/a";
    }  else {
        return a / b;
    }
    

}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;