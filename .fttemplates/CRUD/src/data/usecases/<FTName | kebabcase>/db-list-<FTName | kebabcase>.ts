import { List<FTName | pascalcase> } from '@/domain/usecase'
import {
  List<FTName | pascalcase>Repository,
} from '@/data/contracts'
import { left } from '@/shared'

export class DbList<FTName | pascalcase> implements List<FTName | pascalcase> {
  public constructor(
    private readonly list<FTName | pascalcase>Repository: List<FTName | pascalcase>Repository,
  ) {}

  public async list(params: List<FTName | pascalcase>.Params): Promise<List<FTName | pascalcase>.Result> {
    return left(await this.list<FTName | pascalcase>Repository.list({ ...params, filter: {} }))
  }
}
