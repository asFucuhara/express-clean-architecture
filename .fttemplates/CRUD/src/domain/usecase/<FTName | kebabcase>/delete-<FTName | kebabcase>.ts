import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Either } from '@/shared'

export type Delete<FTName | pascalcase> = {
  delete: (params: Delete<FTName | pascalcase>.Params) => Promise<Delete<FTName | pascalcase>.Result>;
}

export namespace Delete<FTName | pascalcase> {
  export type Params = <FTName | pascalcase>Model['id']
  export type Result = Either<true, null>
}
