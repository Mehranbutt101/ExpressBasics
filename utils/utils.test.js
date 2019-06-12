const utils = require('./utils');
it('should add two numbers', () => {
    var res = utils.add(11, 11);
    if (res != 22) {
        throw new Error(`Expected 22 but got ${res}`);
    }
})