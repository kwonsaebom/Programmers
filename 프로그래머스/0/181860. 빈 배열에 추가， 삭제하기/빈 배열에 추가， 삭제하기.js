function solution(arr, flag) {
    var answer = [];
    
    arr.forEach((x, idx)=> {
        if (flag[idx]===true) {
            for (let i=0; i<x*2; i++) {
                answer.push(x);
            }
        }
        else {
            for (let i=0; i<x; i++){
                answer.pop();
            }
        }
    });
                
    return answer;
}