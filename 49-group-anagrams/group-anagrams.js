/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let str of strs) {
        let sortedStr = str.split("").sort().join(""); 

        if (!map[sortedStr]) {
            map[sortedStr] = [str];
        } else {
            map[sortedStr].push(str); 
        }
    }

    return Object.values(map); 
};
