class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
    const sorted=[];
    for(let i=0;i<strs.length;i++){
        sorted.push(strs[i].split('').sort().join(''))
    }
    for(let i=0;i<sorted.length;i++){
        result.set(sorted[i],[...(result.get(sorted[i])??[]),strs[i]])
    }
    return [...result.values()]
    }
}
