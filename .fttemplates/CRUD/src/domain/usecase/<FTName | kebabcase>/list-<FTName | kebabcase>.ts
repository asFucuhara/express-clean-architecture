import { <FTName | pascalcase>Model } from '@/domain/dto'
import { Either } from '@/shared'

export type List<FTName | pascalcase> = {
  list: (params: List<FTName | pascalcase>.Params) => Promise<List<FTName | pascalcase>.Result>;
}

export namespace List<FTName | pascalcase> {
  export type Params = {
    limit?: string;
    offset?: string;
  }
  export type Result = Either<<FTName | pascalcase>Model[], null>
}
