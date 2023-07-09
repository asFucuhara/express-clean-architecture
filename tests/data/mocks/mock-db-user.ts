// /* eslint-disable max-classes-per-file */
// import faker from 'faker'

export * from './'

// import {
//   AddUserRepository,
//   GetUserRepository,
//   ListUserRepository,
//   UpdateUserRepository,
//   DeleteUserRepository,
//   GetUserByEmailRepository,
// } from '@/data/contracts/db'
// import { GetUserByEmail } from '@/domain/usecase'

// import {
//   mockUserId,
//   mockGetUserModel,
//   mockUserModel,
// } from '@/tests/domain/mocks'

// export class AddUserRepositorySpy implements AddUserRepository {
//   public params: AddUserRepository.Params
//   public result = { userId: mockUserId() }

//   public async add(
//     params: AddUserRepository.Params,
//   ): Promise<AddUserRepository.Result> {
//     this.params = params
//     return this.result
//   }
// }

// export class GetUserRepositorySpy implements GetUserRepository {
//   public userId: GetUserRepository.Params
//   public result: GetUserRepository.Result = mockUserModel()
//   public async get(userId: GetUserRepository.Params): Promise<GetUserRepository.Result> {
//     this.userId = userId
//     return this.result
//   }
// }

// export class DeleteUserRepositorySpy implements DeleteUserRepository {
//   public userId: DeleteUserRepository.Params
//   public result = true
//   public async delete(userId: DeleteUserRepository.Params): Promise<DeleteUserRepository.Result> {
//     this.userId = userId
//     return this.result
//   }
// }

// export class ListUserRepositorySpy implements ListUserRepository {
//   public result = [mockUserModel()]
//   public async list(): Promise<ListUserRepository.Result> {
//     return this.result
//   }
// }

// export class UpdateUserRepositorySpy implements UpdateUserRepository {
//   public userId: UpdateUserRepository.UserId
//   public params: UpdateUserRepository.Params
//   public result = mockUserModel() 

//   public async update(
//     userId: UpdateUserRepository.UserId,
//     params: UpdateUserRepository.Params,
//   ): Promise<UpdateUserRepository.Result> {
//     this.userId = userId
//     this.params = params
//     return this.result
//   }
// }

// export class GetUserByEmailRepositorySpy implements GetUserByEmailRepository {
//   public params: GetUserByEmailRepository.Params
//   public result: GetUserByEmailRepository.Result = mockUserModel()
//   public async getByEmail(params: GetUserByEmailRepository.Params): Promise<GetUserByEmailRepository.Result> {
//     this.params = params
//     return this.result
//   }
// }


