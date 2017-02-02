 
function hammingDistance (x,y){
    var count = 0;
    var n = x ^ y ;
    while ( n> 0 ){
        if ((n&1)==1){
            count += 1;
        }
        n>>=1;
    }
    return count;
}


exports.HMdistance=hammingDistance;
