import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Get<FTName | pascalcase> } from '@/domain/usecase/'

export interface Get<FTName | pascalcase>Repository {
  get: (
    data: Get<FTName | pascalcase>Repository.Params
  ) => Promise<Get<FTName | pascalcase>Repository.Result>;
}

export namespace Get<FTName | pascalcase>Repository {
  export type Params = Get<FTName | pascalcase>.Params
  export type Result = <FTName | pascalcase>Model | null
}
