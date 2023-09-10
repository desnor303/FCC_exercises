function telephoneCheck(str) {
  let regex1 = /^((1-|1 )?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4})$/
  let regex2 = /^((1-|1 |1)?\([0-9]{3}\)[-\s]?[0-9]{3}[-\s]?[0-9]{4})$/
  return regex1.test(str)||regex2.test(str);
}

telephoneCheck("555-555-5555");