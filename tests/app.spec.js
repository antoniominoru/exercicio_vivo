const percentChocolate = require('../app/app.js')

describe('Test percentChocolate', () => {
    it ('percentChocolate() with A return 80%', ()=>{
        expect(percentChocolate('A')).toBe('80%')
        expect(percentChocolate('a')).toBe('80%')
    })
})

describe('Test percentChocolate', () => {
    it ('percentChocolate() with B return 85%', ()=>{
        expect(percentChocolate('B')).toBe('85%')
        expect(percentChocolate('b')).toBe('85%')
    })
})

describe('Test percentChocolate', () => {
    it ('percentChocolate() with C return 90%', ()=>{
        expect(percentChocolate('C')).toBe('90%')
        expect(percentChocolate('c')).toBe('90%')
    })
})

describe('Test percentChocolate', () => {
    it ('percentChocolate() with outer return Error', ()=>{
        expect(percentChocolate('D')).toBe('Error')
        expect(percentChocolate('d')).toBe('Error')
        expect(percentChocolate('aa')).toBe('Error')
        expect(percentChocolate('AA')).toBe('Error')
        expect(percentChocolate('%')).toBe('Error')
        expect(percentChocolate('@')).toBe('Error')
    })
})