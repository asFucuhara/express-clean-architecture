import { Update<FTName | pascalcase> } from '@/domain/usecase/'

export interface Update<FTName | pascalcase>Repository {
  update: (
    <FTName | camelcase>Id: Update<FTName | pascalcase>Repository.<FTName | pascalcase>Id,
    data: Update<FTName | pascalcase>Repository.Params
  ) => Promise<Update<FTName | pascalcase>Repository.Result>;
}

export namespace Update<FTName | pascalcase>Repository {
  export type <FTName | pascalcase>Id = Update<FTName | pascalcase>.<FTName | pascalcase>Id
  export type Params = Update<FTName | pascalcase>.Params
  export type Result = boolean
}
