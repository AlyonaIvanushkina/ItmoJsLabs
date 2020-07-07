{
    const mixin = function(){ 
       return this * this; 
    }; 

    console.log(mixin.call(5));
    console.log(mixin.call(3));
    console.log(mixin.call(25));
}