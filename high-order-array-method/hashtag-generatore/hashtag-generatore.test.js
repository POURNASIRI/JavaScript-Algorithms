const HashTagGeneratore = require('./hashtag-generatore')


test('Genarating Hashtages',()=>{
    expect(HashTagGeneratore("Javascript is awesome")).toBe("#JavascriptIsAwesome")
    expect(HashTagGeneratore(" ")).toBe(false)
})