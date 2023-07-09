import { <FTName | pascalcase>Model } from '@/domain/dto'

export interface List<FTName | pascalcase>Repository {
  list: (
    params: List<FTName | pascalcase>Repository.Params
  ) => Promise<List<FTName | pascalcase>Repository.Result>;
}

export namespace List<FTName | pascalcase>Repository {
  export type Params = {
    limit?: string;
    offset?: string;
  }
  export type Result = <FTName | pascalcase>Model[]
}
