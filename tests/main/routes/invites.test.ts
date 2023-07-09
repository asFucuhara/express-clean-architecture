// import supertest from 'supertest'
// import { Application, env } from '@/main/config'

// import { MongoHelper, MongodbUserInviteRepository } from '@/external/db'
// import { mockInviteUserByEmailParams } from '@/tests/domain/mocks'

console.log('for reference')

// const request = supertest(Application())

// const mongoDbInvite = new MongodbUserInviteRepository()

// describe('Company Routes', () => {
//   beforeAll(async () => {
//     await MongoHelper
//       .connect(env.MONGO_URL)
//     await MongoHelper.clearCollection('invites')
//   })
//   afterAll(async () => {
//     await MongoHelper.disconnect()
//   })
//   beforeEach(async () => {
//     await MongoHelper.clearCollection('invites')
//   })

//   describe('GET /v1/invite/:id', () => {
//     test('Should return 200 on success', async () => {
//       const inviteId = await mongoDbInvite.invite(mockInviteUserByEmailParams())

//       await request
//         .get(`/v1/invite/${inviteId}`)
//         .expect(200)
//     })

//     test('Should return filtered vallues on success', async () => {
//       const inviteParams = mockInviteUserByEmailParams()
//       const inviteId = await mongoDbInvite.invite(inviteParams)

//       await request
//         .get(`/v1/invite/${inviteId}`).then((res) => {
//           expect(res.body)
//             .toMatchObject({ id: inviteId, status: 'pending' })
//         })
//     })
//   })
// })
