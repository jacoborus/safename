import { safename } from './safename'

describe('safename', function () {
  it('return safe file name', function () {
    expect(safename('My file name 1234 Ñáëîò~'))
      .toEqual('My_file_name_1234_Naeio')
  })

  it('Change all dashes to “-”', function () {
    expect(safename('a—b–c−d‐e‒f­g⁃h―j'))
      .toEqual('a-b-c-d-e-f-g-h-j')
  })
})

describe('safename#low', function () {
  it('return safe file name', function () {
    expect(safename('My file name 1234 Ñáëîò~', '_'))
      .toEqual('My_file_name_1234_Naeio')
  })
})

describe('safename#middle', function () {
  it('return safe file name', function () {
    expect(safename('My file name 1234 Ñáëîò~', '-'))
      .toEqual('My-file-name-1234-Naeio')
  })
})

describe('safename#dot', function () {
  it('return safe file name', function () {
    expect(safename('My file name 1234 Ñáëîò~', '.'))
      .toEqual('My.file.name.1234.Naeio')
  })
})
