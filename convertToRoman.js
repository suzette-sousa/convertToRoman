function convertToRoman(num) {
    let correspNum = [
        [ 1000, 'M' ],[ 900, 'CM' ],[ 500, 'D' ],
        [ 400, 'CD' ],[ 100, 'C' ],[ 90, 'XC' ],
        [ 50, 'L' ],[ 40, 'XL' ],[ 10, 'X' ],
        [ 9, 'IX' ],[ 5, 'V' ],[ 4, 'IV' ],
        [ 1, 'I' ]
    ];
    let newArrayNum = [];
    let k = 0;
    for(k; k <= num; k++) {
        let i = 0;
        for(i; i < correspNum.length; i++) {
            while(num>=correspNum[i][0]){
                newArrayNum.push(correspNum[i][1]);
                num-=correspNum[i][0];
            }
        }
    }
    let result = newArrayNum.join('')
    return result;
}
convertToRoman(302);
