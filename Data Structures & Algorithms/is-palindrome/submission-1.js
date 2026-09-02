class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //  const ls= s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        // let left = 0,right = ls.length-1;
        // while(left<=right){
        //     if(ls[left]!== ls[right]) return false
        //     left++; 
        //     right--;
        // }
        // return true

        let left = 0,right = s.length-1;
        const isalpha = (char)=> /^[a-z0-9]+$/i.test(char);
        while(left<=right){
            if(!isalpha(s[left])){
                left++;
                continue;
            }
            if(!isalpha(s[right])){
                right--;
                continue;
            }
            if(s[left].toLowerCase()!== s[right].toLowerCase()) return false
            left++; 
            right--;
        }
        return true
    }
}
