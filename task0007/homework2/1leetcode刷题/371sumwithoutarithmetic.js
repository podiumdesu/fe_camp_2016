/**
 * Created by petnakanojo on 1/30/17.
 */

//371.Sum of Two Integers
//Calculate the sum of two integers a and b,
// but you are not allowed to use the operator + and -.

//Example:
//Given a = 1 and b = 2, return 3.

//code model
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


//使用位运算进行计算

sum = function getSum(sum,carry) {
    if (carry == 0){
        return sum;
    }
    s  = sum ^ carry;
    c = (sum & carry) << 1;
    return getSum(s,c);

}
console.log(sum(988,-88));
