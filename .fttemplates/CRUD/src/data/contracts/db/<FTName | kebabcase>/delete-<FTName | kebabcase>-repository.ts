import { Delete<FTName | pascalcase> } from '@/domain/usecase/'

export interface Delete<FTName | pascalcase>Repository {
  delete: (
    data: Delete<FTName | pascalcase>Repository.Params
  ) => Promise<Delete<FTName | pascalcase>Repository.Result>;
}

export namespace Delete<FTName | pascalcase>Repository {
  export type Params = Delete<FTName | pascalcase>.Params
  export type Result = boolean
}
