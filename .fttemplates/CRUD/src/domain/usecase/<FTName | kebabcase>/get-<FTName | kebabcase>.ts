import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Either } from '@/shared'

export type Get<FTName | pascalcase> = {
  get: (params: Get<FTName | pascalcase>.Params) => Promise<Get<FTName | pascalcase>.Result>;
}

export namespace Get<FTName | pascalcase> {
  export type Params = <FTName | pascalcase>Model['id']
  export type Result = Either<<FTName | pascalcase>Model, null>
}
