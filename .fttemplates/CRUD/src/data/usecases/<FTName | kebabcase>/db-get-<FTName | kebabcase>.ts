import { Get<FTName | pascalcase> } from '@/domain/usecase'
import {
  Get<FTName | pascalcase>Repository,
} from '@/data/contracts'
import { left, right } from '@/shared'
import { <FTName | pascalcase>NotFound } from '@/domain/error'

export class DbGet<FTName | pascalcase> implements Get<FTName | pascalcase> {
  public constructor(
    private readonly get<FTName | pascalcase>Repository: Get<FTName | pascalcase>Repository,
  ) {}

  public async get(<FTName | camelcase>Id: Get<FTName | pascalcase>.Params): Promise<Get<FTName | pascalcase>.Result> {
    const result = await this.get<FTName | pascalcase>Repository.get(<FTName | camelcase>Id)
    return result !== null ? left(result) : right(new <FTName | pascalcase>NotFound())
  }
}
