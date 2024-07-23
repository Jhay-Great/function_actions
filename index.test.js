const {
    greet,
    add,
} = require('./index')

test('should greet user with hello',  () => {
    expect(greet('mavis')).toBe('hello mavis');
})

test('should add two numbers and return a value', () => {
    expect(add(1, 3)).toBe(4);
})
