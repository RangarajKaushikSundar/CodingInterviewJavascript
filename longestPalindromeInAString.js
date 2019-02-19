var longestPalindrome = function(s) {
    if(s === null || s.length  < 1) {
        return "";
    }
    let start = 0;
    let end = 0;
    for(let index in s) {
        const oddLength = expandFromCenter(s, index, index);
        const evenLength = expandFromCenter(s, index, index+1);
        const length = (oddLength > evenLength)? oddLength: evenLength;
        if(length > (end-start)) {
            start = index - (length - 1)/2;
            end = index + length/2;
        }
    }
    return s.substring(start, end + 1);
};

function expandFromCenter(str, left, right) {
    while(left >= 0 && right < str.length &&
         str.charAt(left) === str.charAt(right)) {
        --left;
        ++right;
    }
    return right - left - 1;
}
