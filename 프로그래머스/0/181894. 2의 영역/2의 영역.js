function solution(arr) {
    var answer = [];
    
    if (arr.indexOf(2) == -1) answer.push(-1);
    if (arr.indexOf(2)>-1) {
        for (let i=arr.indexOf(2); i<=arr.lastIndexOf(2); i++){
            answer.push(arr[i]);
        }
    }
    return answer;
}