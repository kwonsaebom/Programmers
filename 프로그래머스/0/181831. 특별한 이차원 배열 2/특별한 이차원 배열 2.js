function solution(arr) {
    var answer = 1;
    var n = arr.length;
    
    for (let i=0; i<n; i++){
        for(let j=0; j<n; j++) {
            if(arr[i][j] != arr[j][i]){
                return 0;
            }
        }
    }
    
    return answer;
}