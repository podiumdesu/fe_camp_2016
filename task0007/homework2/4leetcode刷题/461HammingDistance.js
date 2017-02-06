/**
 * Created by petnakanojo on 1/31/17.
 */
//461.Hamming Distance
//The Hamming distance between two integers is the number of positions
//at which the corresponding bits are different.

//Given two integers x and y, calculate the Hamming distance.

//Note:
//0 ≤ x, y < 231.

//Example:
//Input: x = 1, y = 4
//Output: 2

//Explanation:
//1   (0 0 0 1)
//4   (0 1 0 0)
//       ↑   ↑

//The above arrows point to positions where the corresponding bits are different.


//ver1.0  使用位计算【异或】，一位位的比对该位是否是1，使用计数器进行计数
var hammingDistance = function(x,y){
    var count = 0;
    var n = x ^ y ;
    while ( n> 0 ){
        if ((n&1)==1){
            count += 1;
        }
        n>>=1;
    }
    return count;
};

console.log(hammingDistance(1,4));
