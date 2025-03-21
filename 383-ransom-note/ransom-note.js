/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let megaHash = {};

    for(let c of magazine)
    {
        megaHash[c] = (megaHash[c] || 0) +1;
    }

    for(let c of ransomNote)
    {
        if(!megaHash[c] || megaHash[c] <= 0)
        {
            return false;
        }
        megaHash[c]--
    }
    return true;
};