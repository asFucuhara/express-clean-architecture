// import { DbDeleteUser } from '@/data/usecases'
// import { throwError, mockUserId } from '@/tests/domain/mocks'
// import {
//   DeleteUserRepositorySpy,
// } from '@/tests/data/mocks'

console.log('for reference');


// type SutTypes = {
//   sut: DbDeleteUser;
//   deleteUserRepositorySpy: DeleteUserRepositorySpy;
// }

// const makeSut = (): SutTypes => {
//   const deleteUserRepositorySpy = new DeleteUserRepositorySpy()
//   const sut = new DbDeleteUser(
//     deleteUserRepositorySpy,
//   )
//   return {
//     sut,
//     deleteUserRepositorySpy,
//   }
// }

// describe('Db Get User UseCase', () => {
//   test('Should call deleteUserRepository with right values', async () => {
//     const { sut, deleteUserRepositorySpy } = makeSut()
//     const userId = mockUserId()
//     await sut.delete(userId)
//     expect(deleteUserRepositorySpy.userId).toEqual(userId)
//   })

//   test('Should return true if success', async () => {
//     const { sut } = makeSut()   
//     const userId = mockUserId()
//     const result = await sut.delete(userId)
//     expect(result).toBe(true)
//   })

//   test('Should throw if deleteUserRepository throws', async () => {
//     const { sut, deleteUserRepositorySpy } = makeSut()
//     jest
//       .spyOn(deleteUserRepositorySpy, 'delete')
//       .mockImplementationOnce(throwError)
//     const promise = sut.delete(mockUserId())
//     await expect(promise).rejects.toThrow()
//   })
// })
