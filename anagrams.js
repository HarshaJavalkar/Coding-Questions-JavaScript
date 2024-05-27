function anagram(s) {
    let n = s.length;
    if (n % 2 !== 0) return -1;

    let a = Array.from(Array(26), () => 0);
    let b = Array.from(Array(26), () => 0);

    for (let i = 0; i < (n / 2); i++) {
        a[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = n / 2; i < n; i++) {
        b[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let res = 0;
    for (let i = 0; i < 26; i++) {
        res += Math.abs(a[i] - b[i]);
    }
    
    return res / 2;
}
