import { Add<FTName | pascalcase> } from '@/domain/usecase'
import {
  Add<FTName | pascalcase>Repository,
  
} from '@/data/contracts'
import { left } from '@/shared'

export class DbAdd<FTName | pascalcase> implements Add<FTName | pascalcase> {
  public constructor(
    private readonly add<FTName | pascalcase>Repository: Add<FTName | pascalcase>Repository,
  ) {
  }

  public async add(<FTName | camelcase>Data: Add<FTName | pascalcase>.Params): Promise<Add<FTName | pascalcase>.Result> {
    const <FTName | camelcase> = await this.add<FTName | pascalcase>Repository.add(<FTName | camelcase>Data)
    return left(<FTName | camelcase>)
  }
}
