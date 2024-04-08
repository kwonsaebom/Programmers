function solution(arr, queries) {
    var answer = [];
  
    for (let j=0; j<queries.length; j++){
        let [s, e, k] = queries[j];
        
        for (let i=s; i<=e; i++){
            if (i%k==0) arr[i]+=1;
        }
    }
    
    answer = arr;
    
    return answer;
}