import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Either } from '@/shared'

export type Update<FTName | pascalcase> = {
  update: (<FTName | pascalcase>Id: Update<FTName | pascalcase>.<FTName | pascalcase>Id, params: Update<FTName | pascalcase>.Params) => Promise<Update<FTName | pascalcase>.Result>;
}

export namespace Update<FTName | pascalcase> {
  export type <FTName | pascalcase>Id = <FTName | pascalcase>Model['id']
  export type Params = Partial<Omit<<FTName | pascalcase>Model, 'id'>>
  export type Result = Either<boolean, null>
}

