
// /* eslint-disable max-classes-per-file */
// import { AddUser, GetUser, ListUser, DeleteUser, UpdateUser, Authenticate, FinishRegistration, UpdateUserProfile } from '@/domain/usecase'
// import { mockUserId, mockUserModel } from '@/tests/domain/mocks'
// import { left } from '@/shared'

console.log('for reference')

// export class AuthenticateSpy implements Authenticate {
//   public params: Authenticate.Params
//   public result: Authenticate.Result = { authenticated: true, user: mockUserModel() }

//   public async authenticate(params: Authenticate.Params): Promise<Authenticate.Result> {
//     this.params = params
//     return this.result
//   }
// }

// export class AddUserSpy implements AddUser {
//   public params: AddUser.Params
//   public result: AddUser.Result = { userId: mockUserId() }

//   public async add(params: AddUser.Params): Promise<AddUser.Result> {
//     this.params = params
//     return this.result
//   }
// }

// export class GetUserSpy implements GetUser {
//   public params: GetUser.Params
//   public result: GetUser.Result = left(mockUserModel())

//   public async get(userId: GetUser.Params): Promise<GetUser.Result> {
//     this.params = userId
//     return this.result
//   }
// }

// export class ListUserSpy implements ListUser {
//   public result: ListUser.Result = [mockUserModel(), mockUserModel()]

//   public async list(): Promise<ListUser.Result> {
//     return this.result
//   }
// }

// export class DeleteUserSpy implements DeleteUser {
//   public userId: DeleteUser.Params
//   public result: true

//   public async delete(userId: DeleteUser.Params): Promise<DeleteUser.Result> {
//     this.userId = userId
//     return this.result
//   }
// }

// export class UpdateUserSpy implements UpdateUser {
//   public params: UpdateUser.Params
//   public userId: UpdateUser.UserId
//   public result: UpdateUser.Result = mockUserModel()

//   public async update(userId: UpdateUser.UserId, params: UpdateUser.Params): Promise<UpdateUser.Result> {
//     this.params = params
//     this.userId = userId
//     return this.result
//   }
// }

// export class FinishRegistrationSpy implements FinishRegistration {
//   public params: FinishRegistration.Params
//   public result: FinishRegistration.Result = { userId: mockUserId() }

//   public async finishRegistration(params: FinishRegistration.Params): Promise<FinishRegistration.Result> {
//     this.params = params
//     return this.result
//   }
// }

// export class UpdateUserProfileSpy implements UpdateUserProfile {
//   public params: UpdateUserProfile.Params
//   public userId: UpdateUserProfile.UserId
//   public result: UpdateUserProfile.Result = left(mockUserModel())

//   public async updateProfile(userId: UpdateUserProfile.UserId, params: UpdateUserProfile.Params):
//   Promise<UpdateUserProfile.Result> {
//     this.params = params
//     this.userId = userId
//     return this.result
//   }
// }
