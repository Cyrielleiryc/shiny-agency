import { formatJobList, formatQueryParams } from './'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The formatQueryParams function', () => {
  // tests écrits par Cyrielle
  it('should return a string', () => {
    expect(typeof(formatQueryParams({1: true, 2: false}))).toBe('string')
  })
  it("should contain n-1 '&' in the returned string", () => {
    const answers = {1: false, 2: true, 3: true}
    const result = formatQueryParams(answers)
    const numberOfAnd = result.split('&').length - 1
    expect(numberOfAnd).toEqual(Object.keys(answers).length - 1)
  })
  // tests écrits par OpenClassrooms
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    )
  })
})
