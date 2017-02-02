/**
 * Created by petnakanojo on 1/31/17.
 */

//344.Reverse String
//Write a function that takes a string as input and returns the string reversed.

//Example:
//Given s = "hello", return "olleh".

var reverseString = function(s) {
 /**   var result = "";
    if (s.length == 1) {
        return result;
    }
    else {
        for (var i = s.length-1;i>=0;i--){
            result[s.length-1] = s[0];
            console.log(result[s.length-1]);
            s = s.substring(1, s.length);
            return reverseString(s);
        }

    }
};
console.log(reverseString('hello'));
**/

    var result = "";
    var trans = s.split("");
    for (var i= trans.length-1;i>=0;i--){
        result = result + trans[i];
    }
    return result;

};

console.log(reverseString('hello'));


