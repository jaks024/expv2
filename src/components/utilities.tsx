export const GetUniqueId = (function () {
    let i = 1;

    return function () {
        return i++;
    }
})();