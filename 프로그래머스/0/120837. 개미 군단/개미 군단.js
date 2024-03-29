function solution(hp) {
    var answer = 0;
    
    var five;
    var three;
    var one;
    
    five = parseInt(hp / 5);
    three = parseInt((hp % 5) / 3);
    one = parseInt((hp % 5) % 3)
    
    answer = five + three + one;
    return answer;
}