define(['recentlist'], function(RecentList) {
    describe('recentlist', function() {
        beforeEach(function(){
            recentlist = RecentList(2);
            recentlist.push('b');
            recentlist.push('a');
            recentlist.push('b');
            recentlist.push('a');
            recentlist.push('c');
        });

        it('pushes out old element', function() {
            expect(recentlist.indexOf('b')).toBe(-1);
        });
        it('finds elements', function() {
            expect(recentlist.get(recentlist.indexOf('a'))).toBe('a');
        });
        it('has length', function() {
            expect(recentlist.length).toBe(2);
        });
        it('has iterator', function() {
            var i = 0;
            results = ['c', 'a'];
            recentlist.forEach(function(elem) { 
                expect(elem).toBe(results[i++]);
            });
            expect(i).toBe(2);
        });
    });
});
