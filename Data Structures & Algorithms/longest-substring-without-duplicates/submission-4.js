class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let maxLen =0;
    let left=0;
    let wind = new Set();
    for(let i=0;i<s.length;i++){
        while(wind.has(s[i])){
            wind.delete(s[left]);
            left++;
        }
        wind.add(s[i]);
        maxLen=Math.max(maxLen,i-left+1)
    }
    return maxLen
    }
}
