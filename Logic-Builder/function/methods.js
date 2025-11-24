//Action that can be performed on an object is called methods

// just like object have variables --> key : value pairs
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
       return a-b;
    },
    mul: function(a,b){
       return a*b;
    },
    div: function(a,b){
        return a/b
    }
}

//for accessing these value use 
// calculator.add(2,4) or use any function wth any arguments