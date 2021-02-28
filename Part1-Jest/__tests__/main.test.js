const main = require('../assets/scripts/main');

const level = {
    l0: 0,
    l1: 32,
    l2: 65,
    l3: 86,
    lNeg: -69,
}

describe('volume level is', () => {
    test('0', () => {
        expect(main(level.l0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    })
    
    test('1', () => {
        expect(main(level.l1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    })

    test('2', () => {
        expect(main(level.l2)).toBe(`./assets/media/icons/volume-level-2.svg`);
    })

    test('3', () => {
        expect(main(level.l3)).toBe(`./assets/media/icons/volume-level-3.svg`);
    })

    test('err', () => {
        expect(main(level.lNeg)).toBe(`./assets/media/icons/volume-level-0.svg`);
    })


})

