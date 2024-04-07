function solution(a, b, c) {
    var answer = 0;
    
    if (a!=b && b!=c && a!=c) answer = a+b+c;
    else if ((a==b && a!=c)||(a==c && a!=b)||(b==c && a!=b)) answer = (a+b+c)*(a*a + b*b + c*c);
    else if (a==b && b==c) answer = (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c)
    
    return answer;
}