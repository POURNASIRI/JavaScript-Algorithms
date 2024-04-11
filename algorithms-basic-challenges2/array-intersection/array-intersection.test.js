const ArrayIntersection = require("./array-intersection")

test("Array Intersection", () => {
    expect(ArrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([3, 4, 5])
})