import { customerFormSchema, loginFormSchema } from '@/utils/validationSchemas'
import { VALIDATIONS } from '@/constants'

describe('customerFormSchema', () => {
  it('should validate firstName', () => {
    try {
      customerFormSchema.validateSync({
        firstName: '',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.firstName.required)
    }
  })

  it('should validate firstName min length', () => {
    try {
      customerFormSchema.validateSync({
        firstName: '1',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.firstName.min)
    }
  })

  it('should validate firstName max length', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.firstName.max)
    }
  })

  it('should validate lastName', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: '',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.lastName.required)
    }
  })

  it('should validate lastName min length', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: '1',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.lastName.min)
    }
  })

  it('should validate lastName max length', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.lastName.max)
    }
  })

  it('should validate email', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: '',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.email.required)
    }
  })

  it('should validate email invalid', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.email.invalid)
    }
  })

  it('should validate phone', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.phone.required)
    }
  })

  it('should validate phone invalid', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123',
        password: 'password',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.phone.testLength)
    }
  })

  it('should validate password length', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: '1',
        passwordConfirm: '1',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.password.min)
    }
  })

  it('should validate password match', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: '',
        passwordConfirm: 'password',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.passwordConfirm.oneOf)
    }
  })

  it('should validate passwordConfirm', () => {
    try {
      customerFormSchema.validateSync({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@email.com',
        phone: '123-456-7890',
        password: 'password',
        passwordConfirm: '',
        terms: true,
      })
    } catch (error) {
      console.log(error)
      expect((error as Error).message).toEqual(VALIDATIONS.passwordConfirm.required)
    }
  })
})
