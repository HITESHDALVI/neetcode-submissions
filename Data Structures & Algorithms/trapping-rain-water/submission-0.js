class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length-1;
        let lMax = height[l];
        let rMax = height[r];
        let bucket = 0;
        while(l<r){
            if(lMax<rMax){
                l++;
                lMax= Math.max(lMax,height[l]);
                bucket += lMax-height[l]
            }else{
                r--;
                rMax=Math.max(rMax,height[r]);
                bucket+=rMax-height[r]
            }
        }
        return bucket
    }
}
