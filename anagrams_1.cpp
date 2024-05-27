int anagram(string s) {
    int n = s.length();
    if (n % 2 != 0) {
        return -1;
    }

    string s1 = s.substr(0, n / 2);
    string s2 = s.substr(n / 2, n);
    map<char, int> m1, m2;

    for (int i = 0; i < s1.length(); i++) {
        m1[s1[i]]++;
        m2[s2[i]]++;
    }

    int ans = 0;
    for (char c = 'a'; c <= 'z'; c++) {
        ans += abs(m1[c] - m2[c]);
    }

    return ans / 2;
}
