import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Either } from '@/shared'

export type Add<FTName | pascalcase> = {
  add: (params: Add<FTName | pascalcase>.Params) => Promise<Add<FTName | pascalcase>.Result>;
}

export namespace Add<FTName | pascalcase> {
  export type Params = Omit<<FTName | pascalcase>Model, 'id'>
  export type Result = Either<<FTName | pascalcase>Model, null>
}
