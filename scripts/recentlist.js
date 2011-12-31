define([], function() {
    return function(size) {
        var elements = [];
        var counter = 0;
        var self = {
            get: function(n) { 
                try { 
                    return elements[n].value 
                } catch(e) { }; 
            },
            indexOf: function(elem) {
                for(var i = 0; i < elements.length; ++i) {
                    if(elements[i].value === elem) {
                        return i;
                    }
                }
                return -1;
            },
            push: function(elem) {
                var min, minpos, pos;
                min = counter;

                for(var pos = 0; pos < elements.length; ++pos) {
                    if(elements[pos].value === elem) {
                        break;
                    }
                    if(elements[pos].stamp <= min) {
                        min = elements[pos].stamp;
                        minpos = pos;
                    }
                }
                if(pos >= size) {
                    pos = minpos;
                }

                elements[pos] = {value: elem, stamp: ++counter};
                return self;
            },
            forEach: function(fn) {
                for(var i = 0; i < elements.length; ++i) {
                    fn(elements[i].value);
                }
                return self;
            },
            length: size
        }
        return self;
    }
});
