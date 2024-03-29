function solution(array, n) {
    var answer = array[0];
    
    array.sort((a, b) => a-b);
    
    if (array[0] >= n) {
        return array[0];
    }
    for (let i=1; i<array.length; i++) {
        if (array[i]>=n) {
            if (Math.abs(array[i]-n) < Math.abs(array[i-1]-n)) answer = array[i];
            else answer = array[i-1];
            break;
        }
        answer = array[i];
    }
    return answer;
}