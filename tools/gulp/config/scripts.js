// Make merged array unique
Array.prototype.unique = function() {
    var array = this.concat();
    for(var i = 0; i < array.length; ++i) {
        for(var j = i + 1; j < array.length; ++j) {
            if(array[i] === array[j])
                array.splice(j--, 1);
        }
    }

    return array;
};

module.exports = {

};