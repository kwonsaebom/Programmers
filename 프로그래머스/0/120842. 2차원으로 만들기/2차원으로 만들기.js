function solution(num_list, n) {
    var answer = [[]];
    var idx=0;
    
    for (let y=0; y<Math.ceil(num_list.length/n); y++) {
        answer[y]=[];
        
        for (let x=0; x<n; x++) {
            answer[y].push(num_list[idx]);
            idx++;
        }
    }
    return answer;
}