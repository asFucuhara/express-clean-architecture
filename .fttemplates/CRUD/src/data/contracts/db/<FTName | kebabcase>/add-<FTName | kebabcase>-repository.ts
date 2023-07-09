import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Add<FTName | pascalcase> } from '@/domain/usecase/'

export interface Add<FTName | pascalcase>Repository {
  add: (
    data: Add<FTName | pascalcase>Repository.Params
  ) => Promise<Add<FTName | pascalcase>Repository.Result>;
}

export namespace Add<FTName | pascalcase>Repository {
  export type Params = Add<FTName | pascalcase>.Params
  export type Result = <FTName | pascalcase>Model
}
