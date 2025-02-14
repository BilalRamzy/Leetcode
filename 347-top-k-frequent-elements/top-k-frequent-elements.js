



var topKFrequent = function(nums, k) {
    let map = [];
    let bucket = [];
    let result = [];

    // Step 1: Populate the frequency map
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    // Step 2: Populate the bucket with numbers grouped by their frequency
    for(let [num, freq] of Object.entries(map)) {
        if(!bucket[freq]) {
            bucket[freq] = new Set().add(parseInt(num)); // Convert string to integer
        } else {
            bucket[freq] = bucket[freq].add(parseInt(num)); // Convert string to integer
        } 
    }

    // Step 3: Extract the top k frequent elements from the bucket
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }

    // Step 4: Return the result
    return result;
};