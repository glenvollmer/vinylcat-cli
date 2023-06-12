
import {Command, ux} from '@oclif/core'
import select from '@inquirer/select'
import {Record} from '../models/record'

import DBClient from '../modules/mongoClient'

export default class Add extends Command {

  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  private async getRecordInput(): Promise<Record> {
    // const {args, flags} = await this.parse(Add)
    // add error handling for each input
    
    const record = <Record>{};
    
    record.artist = await ux.prompt('Artist')
    record.album = await ux.prompt('Album Title')
    record.releaseDate = await ux.prompt('Release Year')
    record.pressingDate = await ux.prompt('Pressing Year')
    record.serialNumber = await ux.prompt('Serial Number')
    record.barcode = await ux.prompt('Barcode')
    
    record.condition = await select(
      {
        message: 'select the condition of the record',
        choices: [
          {name: 'M', value: 'M'}, 
          {name: 'NM', value: 'NM'}, 
          {name: 'VG+', value: 'VG+'}, 
          {name: 'VG', value: 'VG'}, 
          {name: 'G+', value: 'G+'}, 
          {name: 'G', value: 'G'}, 
          {name: 'F', value: 'F'}, 
          {name: 'P', value: 'P'}
        ],
      }
    )
    
    record.description = await ux.prompt('Description')
    return record;
  }

  private async saveRecord(record:Record): Promise<Boolean> {
    const db = new DBClient();
    await db.connect();

    const dataAdded = await db.addData(record, 'records');
    await db.disconnect();
    
    return dataAdded;
  }

  public async run(): Promise<void> {
    const record = await this.getRecordInput();
    const saved = await this.saveRecord(record);

    if (saved) {
      this.log(`${record.album} was succesfully added to your catalog`)
    
    } else {
      this.log(`there was an error adding ${record.album} to your catalog`)
    }
  }
}
