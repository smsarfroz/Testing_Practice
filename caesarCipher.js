const  caesarCipher = (str, shiftFactor) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let res = "";
    for (let i = 0; i < str.length; ++i) {
        if (str.charAt(i) === str.charAt(i).toLowerCase() && str.charAt(i) !== str.charAt(i).toUpperCase()) {
            const id = str.charAt(i).toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            res += alphabet[(id + shiftFactor) % 26];
        } else if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i) !== str.charAt(i).toLowerCase()) {
            const id = str.charAt(i).toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            res += Alphabet[(id + shiftFactor) % 26];
        } else {
            res += str.charAt(i);
        }
    }
    return res;
};

module.exports = caesarCipher;