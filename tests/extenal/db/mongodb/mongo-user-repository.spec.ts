// import { env } from '@/main/config'
// import { MongoHelper, MongodbUserRepository } from '@/external/db'

// import { mockAddUserParams } from '@/tests/domain/mocks'

console.log('for reference')

// describe('Mongodb User repository', () => {
//   beforeAll(async () => {
//     await MongoHelper
//       .connect(env.MONGO_URL)
//     await MongoHelper.clearCollection('user')
//   })

//   afterAll(async () => {
//     await MongoHelper.disconnect()
//   })

//   beforeEach(async () => {
//     await MongoHelper.clearCollection('user')
//   })

//   test('should add user', async () => {
//     const sut = new MongodbUserRepository()
//     await sut.add(mockAddUserParams())
//     const users = await sut.list()
//     expect(users).toHaveLength(1)
//   })

//   test('should delete user by id', async () => {
//     const sut = new MongodbUserRepository()
//     await sut.add(mockAddUserParams({ name: 'test' }))
//     const result = await sut.list()
    
//     const processedDocument = result[0]
//     if ((processedDocument == null) || processedDocument === undefined) {
//       throw new Error('we shouldnt be here')
//     } else {
//       const id = processedDocument.id
//       await sut.delete(id)  
//       const result2 = await sut.get(id)
//       expect(result2).toBeNull()
//     }
//   })

//   test('should update user', async () => {
//     const sut = new MongodbUserRepository()
//     await sut.add(mockAddUserParams())
//     const result = await sut.list()
//     await sut.update(result[0].id, { displayName: 'test' })
//     const result2 = await sut.get(result[0].id)

//     expect(result2?.displayName).toBe('test')
//   })

//   test('when user is not added, it should not exist', async () => {
//     const sut = new MongodbUserRepository()
//     expect(await sut.list()).toHaveLength(0)
//   })

//   test('find all should return all added users', async () => {
//     const sut = new MongodbUserRepository()
//     await sut.add(mockAddUserParams({ name: 'test0' }))
//     await sut.add(mockAddUserParams({ name: 'test1' }))
//     const users = await sut.list()
//     expect(users).toHaveLength(2)
//   })

//   test('getUserByEmail should return user', async () => {
//     const sut = new MongodbUserRepository()
//     const email = 'test@test.com' 
//     await sut.add(mockAddUserParams({ email }))
//     const user = await sut.getByEmail(email)
//     expect(user?.email).toBe(email)
//   })

//   test('getUserByEmail should return null if user does not exist', async () => {
//     const sut = new MongodbUserRepository()
//     const email = 'test1@test.com' 
//     const user = await sut.getByEmail(email)
//     expect(user).toBeNull()
//   })
// })
