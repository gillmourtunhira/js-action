const sum = require( './index.js' );

test( 'adds 1 + 3 equals 4', () => {
    expect( sum( 1, 3) ).toBe(5);
} );

