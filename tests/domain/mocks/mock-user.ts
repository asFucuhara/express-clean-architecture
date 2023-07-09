import faker from 'faker'
import { AddUser, FinishRegistration, UpdateUser, UpdateUserProfile } from '@/domain/usecase'
import { UserModel, Address, GetUserModel } from '@/domain/dto'

export const mockAddUserParams = (params?: Partial<AddUser.Params>|undefined): AddUser.Params => ({
  name: params?.name ?? faker.name.findName(),
  email: params?.email ?? faker.internet.email(),
  backupEmail: params?.backupEmail ?? faker.internet.email(),
  companyId: params?.companyId ?? faker.datatype.uuid(),
  displayName: params?.displayName ?? faker.internet.userName(),
  jobTitle: params?.jobTitle ?? faker.lorem.word(),
  img: params?.jobTitle ?? faker.internet.avatar(),
  mobile: params?.mobile ?? faker.phone.phoneNumber(),
  registration: params?.registration ?? faker.datatype.uuid(),
  password: params?.registration ?? faker.internet.password(),
  address: mockAddressParams(params?.address),
  birthday: faker.date.past(),
  bio: faker.lorem.lines(),
  selectedValues: [faker.company.bsAdjective(), faker.company.bsAdjective(), faker.company.bsAdjective()],
  groups: [faker.datatype.uuid()],
  meritMoneySchemeId: faker.datatype.uuid(),
})

export const mockAddressParams = (params?: Partial<Address>): Address => ({
  city: params?.city ?? faker.address.cityName(),
  district: params?.district ?? faker.lorem.word(),
  street: params?.street ?? faker.address.streetName(),
  state: params?.state ?? faker.address.state(),
  postalCode: params?.postalCode ?? faker.address.zipCode(),
  numberAndComplement: params?.numberAndComplement ?? faker.address.secondaryAddress(),
})

export const mockUserModel = (): UserModel => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  backupEmail: faker.internet.email(),
  companyId: faker.datatype.uuid(),
  displayName: faker.internet.userName(),
  jobTitle: faker.lorem.word(),
  img: faker.internet.avatar(),
  mobile: faker.phone.phoneNumber(),
  registration: faker.datatype.uuid(),
  password: faker.internet.password(),
  address: mockAddressParams(),
  bio: faker.lorem.paragraph(),
  birthday: faker.date.recent(),
  selectedValues: [faker.company.bsAdjective(), faker.company.bsAdjective(), faker.company.bsAdjective()],
  groups: [faker.company.bsAdjective()],
  meritMoneySchemeId: faker.company.bsAdjective(),
})

export const mockGetUserModel = (): UserModel => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  backupEmail: faker.internet.email(),
  companyId: faker.datatype.uuid(),
  displayName: faker.internet.userName(),
  jobTitle: faker.lorem.word(),
  img: faker.internet.avatar(),
  mobile: faker.phone.phoneNumber(),
  registration: faker.datatype.uuid(),
  password: faker.internet.password(),
  address: mockAddressParams(),
  bio: faker.company.catchPhraseDescriptor(),
  birthday: faker.date.recent(),
  selectedValues: [faker.company.bsAdjective()],
  // meritus: faker.datatype.number(),
  // meritMoney: faker.datatype.number(),
  groups: [faker.company.bsAdjective()],
  meritMoneySchemeId: faker.company.bsAdjective(),
})

export const mockUpdateUserParams = (params?: Partial<UpdateUser.Params>|undefined): AddUser.Params => ({
  name: params?.name ?? faker.name.findName(),
  email: params?.email ?? faker.internet.email(),
  backupEmail: params?.backupEmail ?? faker.internet.email(),
  companyId: params?.companyId ?? faker.datatype.uuid(),
  displayName: params?.displayName ?? faker.internet.userName(),
  jobTitle: params?.jobTitle ?? faker.lorem.word(),
  img: params?.jobTitle ?? faker.internet.avatar(),
  mobile: params?.mobile ?? faker.phone.phoneNumber(),
  registration: params?.registration ?? faker.datatype.uuid(),
  password: params?.registration ?? faker.internet.password(),
  address: mockAddressParams(params?.address),
  birthday: faker.date.past(),
  bio: faker.lorem.lines(),
  selectedValues: [faker.company.bsAdjective(), faker.company.bsAdjective(), faker.company.bsAdjective()],
  groups: [faker.datatype.uuid()],
  meritMoneySchemeId: faker.datatype.uuid(),
})

export const mockUpdateUserProfileParams = 
(params?: Partial<UpdateUserProfile.Params>|undefined): UpdateUserProfile.Params => ({
  backupEmail: params?.backupEmail ?? faker.internet.email(),
  password: params?.password ?? faker.company.bsAdjective(),
  displayName: params?.displayName ?? faker.internet.userName(),
  mobile: params?.mobile ?? faker.phone.phoneNumber(),
  bio: faker.lorem.lines(),
  selectedValues: [faker.company.bsAdjective(), faker.company.bsAdjective(), faker.company.bsAdjective()],
  file: {
    originalname: `${faker.company.bsAdjective()}.jpg`,
    buffer: faker.company.bsAdjective(),
  },
})


export const mockUpdateUserProfileFile = { 
  
}

export const mockFinishRegistration = 
  (params?: Partial<FinishRegistration.Params>|undefined): FinishRegistration.Params => (
    {
      user: {
        backupEmail: params?.user?.backupEmail ?? faker.internet.email(),
        displayName: params?.user?.displayName ?? faker.internet.userName(),
        jobTitle: params?.user?.jobTitle ?? faker.lorem.word(),
        img: params?.user?.jobTitle ?? faker.internet.avatar(),
        mobile: params?.user?.mobile ?? faker.phone.phoneNumber(),
        password: params?.user?.password ?? faker.internet.password(),
        address: mockAddressParams(params?.user?.address),
        birthday: faker.date.past(),
        bio: faker.lorem.lines(),
        selectedValues: [faker.company.bsAdjective(), faker.company.bsAdjective(), faker.company.bsAdjective()],
      },
      inviteId: params?.inviteId ?? faker.datatype.uuid(),
    }
  )

export const mockUserId = (): UserModel['id'] => faker.datatype.uuid()
