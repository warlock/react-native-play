import t from 'tcomb-form-native'

export const formValidation = {
  email: t.refinement(t.String, s => {
    return /@/.test(s) && s.length >= 6
  }),
  password: t.refinement(t.String, s => {
    return s.length >= 6
  })
}

export const registerValidation = {
  birthdate: t.maybe(t.String),
  password_clear: t.refinement(t.String, s => {
    return s.length >= 6
  }),
  confirm_password: t.refinement(t.String, s => {
    return s.length >= 6
  }),
  first_name: t.String,
  last_name: t.String,
  //locale: t.String,
  //telephone: t.String
}