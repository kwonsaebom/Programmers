function solution(a, b, c, d) {
    var answer = 0;
    let list = [a, b, c, d];
    let dice = Array(7).fill(0);
    
    // 주사위 값의 빈도를 계산
    for(let i = 0; i < list.length; i++) {
       dice[list[i]]++;
    }
    
    if (dice.includes(4)) {
        // 모든 주사위 값이 같을 때
        answer = 1111 * list[0];
    } else if (dice.includes(3)) {
        // 세 개의 주사위 값이 같을 때
        let three = dice.indexOf(3);
        let one = dice.indexOf(1);
        answer = (10 * three + one) * (10 * three + one);
    } else if (dice.includes(2)) {
        // 두 쌍이 존재할 때와 한 쌍만 존재할 때 구분
        let pairs = [];
        for (let i = 1; i <= 6; i++) {
            if (dice[i] === 2) {
                pairs.push(i);
            }
        }
        if (pairs.length === 2) {
            // 두 쌍이 존재할 때
            answer = (pairs[0] + pairs[1]) * Math.abs(pairs[0] - pairs[1]);
        } else if (pairs.length === 1) {
            // 한 쌍만 존재할 때
            let others = list.filter(num => num !== pairs[0]);
            answer = others[0] * others[1];
        }
    } else {
        // 모든 주사위 값이 다를 때
        answer = Math.min(...list);
    }
    
    return answer;
}
