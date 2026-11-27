function isPalindrome(x: number): boolean {
    let nums:number = 0;
    if (x < 0) 
    return false;
    for (let i = x; Math.trunc(i) > 0; i/=10) {
        nums *= 10;
        nums += Math.trunc(i % 10);
    }
    return (x===nums)
};