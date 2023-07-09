import { Delete<FTName | pascalcase> } from '@/domain/usecase'
import { Delete<FTName | pascalcase>Repository } from '@/data/contracts'
import { left, right } from '@/shared'
import { <FTName | pascalcase>NotFound } from '@/domain/error'

export class DbDelete<FTName | pascalcase> implements Delete<FTName | pascalcase> {
  public constructor(
    private readonly delete<FTName | pascalcase>Repository: Delete<FTName | pascalcase>Repository,
  ) {}

  public async delete(
    <FTName | camelcase>Id: Delete<FTName | pascalcase>.Params,
  ): Promise<Delete<FTName | pascalcase>.Result> {
    const result = await this.delete<FTName | pascalcase>Repository.delete(<FTName | camelcase>Id)
    return result ? left(true) : right(new <FTName | pascalcase>NotFound())
  }
}
