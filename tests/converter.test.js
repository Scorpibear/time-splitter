const converter = require('../sources/converter');

describe('converter', () => {
  test('format date to YYYY-MM-DD format', () => {
    expect(converter.formatDate(new Date("2021-03-31"))).toBe("2021-03-31");
  })
  test('format date to YYYY-MM-DD format', () => {
    expect(converter.formatDate(new Date("2021-03-31"))).toBe("2021-03-31");
  })
  test('give false date to formatDate and check for returned same false date', () => {
    jest.spyOn(console, 'error').mockImplementation(() => "Could not parse date"); 
    expect(converter.formatDate("2021-n-31")).toBe("2021-n-31");
  })
  test('formatDateToUSFromDays', () => {
    expect(converter.formatDateToUSFromDays(2)).toBe("1/2/1900");
  })
  test('formatDateFromDays use formatDate', () => {
    // could be different dates due to local timezone 
    expect(converter.formatDateFromDays(3)).toMatch("1900-01-");
  })
}) 