function solution(arr, delete_list) {
    var answer = [];
    
    for (let i=0; i<delete_list.length; i++){
        if (arr.indexOf(delete_list[i])>-1) {
            let idx = arr.indexOf(delete_list[i]);
            arr.splice(idx, 1);
        }
    }
    answer = arr;
    return answer;
}