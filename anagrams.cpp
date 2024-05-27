int anagram(string s) {
    int charArr1[26] = {0};
    int charArr2[26] = {0};
    if (s.length() % 2 == 1) {
        return -1;
    }

    for (int i = 0; i < s.length() / 2; i++) {
        charArr1[s[i] - 'a']++;
    }

    for (int i = s.length() / 2; i < s.length(); i++) {
        charArr2[s[i] - 'a']++;
    }

    int sum = 0;
    for (int i = 0; i < 26; i++) {
        int temp = charArr1[i] - charArr2[i];
        if (temp > 0) {
            sum += temp;
        } else {
            sum -= temp;
        }
    }
    return sum / 2;
}
