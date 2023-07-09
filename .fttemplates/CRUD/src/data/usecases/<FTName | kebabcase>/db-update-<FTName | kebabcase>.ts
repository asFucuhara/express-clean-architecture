import { Update<FTName | pascalcase> } from '@/domain/usecase'
import {
  Update<FTName | pascalcase>Repository,
} from '@/data/contracts'
import { left, right } from '@/shared'
import { <FTName | pascalcase>NotFound } from '@/domain/error'

export class DbUpdate<FTName | pascalcase> implements Update<FTName | pascalcase> {
  public constructor(
    private readonly update<FTName | pascalcase>Repository: Update<FTName | pascalcase>Repository,
  ) {}

  public async update(
    <FTName | camelcase>Id: Update<FTName | pascalcase>.<FTName | pascalcase>Id,
    <FTName | pascalcase>Data: Update<FTName | pascalcase>.Params,
  ): Promise<Update<FTName | pascalcase>.Result> {
    const result = await this.update<FTName | pascalcase>Repository.update(<FTName | camelcase>Id, <FTName | pascalcase>Data)
    return result !== null ? left(result) : right(new <FTName | pascalcase>NotFound())
  }
}
