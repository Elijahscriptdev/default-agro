export const validate = {
  name: (value) => !/[A-Za-z]{2,}/gi.test(value),
  email: (value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
}