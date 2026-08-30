class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(s, k) {
      const map= new Map();
      for(let i=0;i<s.length;i++){
        const rem = k - s[i];
        if(map.has(rem)){
            const j = map.get(rem);
            return j < i ? [j, i] : [i, j];
        }
        map.set(s[i], i);
      }    
    }
}
