import * as mongoDB from 'mongodb'
import * as dotenv from 'dotenv'

export default class DBClient {
    private db: any;
    private mongoClient: any;

    // constructor() {}

    public async connect(): Promise<void> {
      // create conditional for mongo, or EVM blockchain storage
      this.db = await this.connectToMongo()
    }

    public async disconnect(): Promise<void> {
      await this.closeMongo()
    }

    private async closeMongo(): Promise<void> {
      await this.mongoClient.close()
    }

    private async connectToMongo(): Promise<mongoDB.Db> {
      dotenv.config()
      const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb://127.0.0.1')
      await client.connect()

      this.mongoClient = client
      const db: mongoDB.Db = client.db('vinylcat')

      return db
    }

    public async addData(data:any, collection:string): Promise<boolean> {
      const result = await this.addMongoData(data, collection)
      return result
    }

    public async editData(): Promise<boolean> {
      const result = this.editMongoData()

      return result
    }

    public async deleteData(): Promise<boolean> {
      const result = this.deleteMongoData()

      return result
    }

    public async getData(): Promise<boolean> {
      const result = this.getMongoData()

      return result
    }

    private async addMongoData(data:any, collection:string): Promise<boolean> {
      const c = this.db.collection(collection)
      const result = await c.insertOne(data)
      return true
    }

    private async editMongoData(): Promise<boolean> {
      return true
    }

    private async deleteMongoData(): Promise<boolean> {
      return true
    }

    private async getMongoData(): Promise<boolean> {
      return true
    }
}
