const DisplayLikes = require('./display-likes')

test("Display Likes", () => {
    expect(DisplayLikes([])).toBe("no one likes this")
    expect(DisplayLikes(["erfan","arman","eleya","ali","ramin"])).toBe("erfan, arman and 3 others like this")
})