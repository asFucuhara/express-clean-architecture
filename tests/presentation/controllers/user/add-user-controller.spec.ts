// import { AddUserController } from '@/presentation/controllers'
// import { AddUserSpy } from '@/tests/presentation/mocks'
// import { created, serverError } from '@/presentation/helpers'
// import { mockAddUserParams, throwError } from '@/tests/domain/mocks'

console.log('for reference')

// const makeMockRequest = (): AddUserController.Request => ({
//   body: mockAddUserParams(),
// })

// type SutTypes = {
//   sut: AddUserController;
//   addUserSpy: AddUserSpy;
// }

// const makeSut = (): SutTypes => {
//   const addUserSpy = new AddUserSpy()
//   const sut = new AddUserController(addUserSpy)
//   return { sut, addUserSpy }
// }

// describe('Add User Controller', () => {
//   test('should be reimplemented when controller is being reimplemented ', () => {
//     expect(true).toBe(true)
//   })
//   // test('Should call addUser with right values', async () => {
//   //   const { sut, addUserSpy } = makeSut()
//   //   const request = makeMockRequest()
//   //   await sut.handle(request)
//   //   expect(addUserSpy.params).toEqual(request.body)
//   // })

//   // // test('Should call Validation with correct values', async () => {
//   // //   const { sut, addUserSpy } = makeSut()
//   // //   const request = mockRequest()
//   // //   await sut.handle(request)
//   // //   expect(validationSpy.input).toEqual(request)
//   // // })

//   // // test('Should return 400 if Validation fails', async () => {
//   // //   const { sut, addUserSpy } = makeSut()
//   // //   validationSpy.error = new Error()
//   // //   const httpResponse = await sut.handle(mockRequest())
//   // //   expect(httpResponse).toEqual(badRequest(validationSpy.error))
//   // // })

//   // test('Should return 201 on success', async () => {
//   //   const { sut } = makeSut()
//   //   const request = makeMockRequest()
//   //   const httpResponse = await sut.handle(request)
//   //   expect(httpResponse.statusCode).toEqual(201)
//   // })

//   // test('Should return 400 if addUser throws', async () => {
//   //   const { sut, addUserSpy } = makeSut()
//   //   jest.spyOn(addUserSpy, 'add').mockImplementationOnce(throwError)
//   //   const httpResponse = await sut.handle(makeMockRequest())
//   //   expect(httpResponse.statusCode).toEqual(400)
//   // })
// })
