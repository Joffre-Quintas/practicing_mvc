import { expect, test} from 'vitest'
import { User } from './User'

test('Create user', () => {
  const user = new User({name:"Joffre", email:"joffre@email.com", password:"123"})

  expect(user).toBeInstanceOf(User)
  expect(user.id.length).toEqual(36)
})
