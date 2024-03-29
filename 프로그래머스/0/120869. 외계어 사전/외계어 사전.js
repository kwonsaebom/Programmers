function solution(spell, dic) {
    var answer = 0;
    var ok = [];
    
    for (let i=0; i<dic.length; i++){
    let chk=0;
        for (let j=0; j<spell.length; j++){
            if(dic[i].indexOf(spell[j]) == -1){
                chk=1;
                answer=2;
                break;
            }
        }
        if(chk == 0) {
            answer=1;
            break;
        }
    }
    
    return answer;
}