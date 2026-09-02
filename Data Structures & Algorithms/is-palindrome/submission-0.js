class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         const ls= s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let left = 0,right = ls.length-1;
        while(left<=right){
            if(ls[left]!== ls[right]) return false
            left++; 
            right--;
        }
        return true
    }
}
