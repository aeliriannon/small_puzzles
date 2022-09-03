// Найдите наибольший общий делитель двух положительных чисел

var gcd = function(a, b) {
    if ( !b) {
        return a;
    }

    console.log(a, 'a');
    console.log(b, 'b');
    return gcd(b, a % b);
};

console.log(gcd(30, 16));
