import { Document, ObjectId } from 'mongodb'
import { MongoHelper } from './mongo-helper'
import { 
  Add<FTName | pascalcase>Repository,
  Get<FTName | pascalcase>Repository,
  List<FTName | pascalcase>Repository,
  Update<FTName | pascalcase>Repository,
  Delete<FTName | pascalcase>Repository, 
} from '@/data/contracts/'
import { <FTName | pascalcase>Model } from '@/domain/dto'


interface <FTName | pascalcase>ModelWithObjectId extends <FTName | pascalcase>Model{
  _id: ObjectId;
}

export const <FTName | constantcase>_COLLECTION = '<FTName | plural&kebabcase>'

export class Mongodb<FTName | pascalcase>Repository 
implements
    Add<FTName | pascalcase>Repository, 
    Get<FTName | pascalcase>Repository,
    List<FTName | pascalcase>Repository,
    Update<FTName | pascalcase>Repository,
    Delete<FTName | pascalcase>Repository {
  public async add(params: Add<FTName | pascalcase>Repository.Params): Promise<Add<FTName | pascalcase>Repository.Result> {
    const <FTName | camelcase>Collection = await MongoHelper.getCollection(<FTName | constantcase>_COLLECTION)
    const result = await <FTName | camelcase>Collection.insertOne(params)
    return { ...params, id: result.insertedId.toHexString() }
  }

  public async get(<FTName | camelcase>Id: Get<FTName | pascalcase>Repository.Params): Promise<Get<FTName | pascalcase>Repository.Result> {
    const id = new ObjectId(<FTName | camelcase>Id)
    const <FTName | camelcase>Collection = await MongoHelper.getCollection(<FTName | constantcase>_COLLECTION)
    const result = await <FTName | camelcase>Collection.findOne({ _id: id })
    
    interface helperDocument extends Omit<Exclude<Get<FTName | pascalcase>Repository.Result, null>, 'id'> {
      _id: ObjectId;
    }
    const process = (document: Document | undefined | null): Get<FTName | pascalcase>Repository.Result => {
      if (document == null) return null // handle undefined
      const { _id, ...rest } = document as helperDocument
      return { ...rest, id: _id.toHexString() }
    }
    const processedResult: Get<FTName | pascalcase>Repository.Result = process(result)
    return processedResult
  }

  public async list(params: List<FTName | pascalcase>Repository.Params): Promise<List<FTName | pascalcase>Repository.Result> {
    const <FTName | camelcase>Collection = await MongoHelper.getCollection(<FTName | constantcase>_COLLECTION)
    const result = await <FTName | camelcase>Collection.aggregate(
      MongoHelper.makePaginationPipeline(params?.filter, params?.offset, params?.limit),
    ).toArray()
    return result as List<FTName | pascalcase>Repository.Result
  }

  public async update(
    <FTName | camelcase>Id: Update<FTName | pascalcase>Repository.<FTName | pascalcase>Id, 
    params: Update<FTName | pascalcase>Repository.Params,
  ): Promise<Update<FTName | pascalcase>Repository.Result> {
    const <FTName | camelcase>Collection = await MongoHelper.getCollection(<FTName | constantcase>_COLLECTION)
    const id = new ObjectId(<FTName | camelcase>Id)
    const result = await <FTName | camelcase>Collection.findOneAndUpdate({ _id: id }, { $set: params })
    return Boolean(result.ok) // returns true if truthy or false if falsy
  }

  public async delete(<FTName | camelcase>Id: Delete<FTName | pascalcase>Repository.Params): Promise<Delete<FTName | pascalcase>Repository.Result> {
    const <FTName | camelcase>Collection = await MongoHelper.getCollection(<FTName | constantcase>_COLLECTION)
    const id = new ObjectId(<FTName | camelcase>Id)
    const result = await <FTName | camelcase>Collection.findOneAndDelete({ _id: id })
    return Boolean(result.ok) // returns true if truthy or false if falsy
  }
}
