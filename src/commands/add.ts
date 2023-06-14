import {Command, ux, Flags} from '@oclif/core'
import select from '@inquirer/select'
import {Record} from '../models/record'

import DBClient from '../modules/mongo-client'

export default class Add extends Command {
  static description: string = 'add a vinyl record to your catalogue'
  record: Record = <Record>{}

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    continuous: Flags.boolean({char: 'c', description: 'continuous record adding', required: false}),
  }

  static args = {}

  private async getArtist(): Promise<void> {
    this.record.artist = await ux.prompt('Artist')
  }

  private async getAlbum(): Promise<void> {
    this.record.album = await ux.prompt('Album Title')
  }

  private async getReleaseYear(): Promise<void> {
    const releaseYearStr: string = await ux.prompt('Release Year')
    const releaseYear: number = Number(releaseYearStr);
    this.record.releaseYear = releaseYear
  }

  private async getPressingYear(): Promise<void> {
    const pressingYearStr: string = await ux.prompt('Pressing Year')
    const pressingYear: number = Number(pressingYearStr);
    this.record.pressingYear = pressingYear
  }

  private async getSideAMatrix(): Promise<void> {
    this.record.sideAMatrix = await ux.prompt('Side A Matrix')
  }
  
  private async getSideBMatrix(): Promise<void> {
    this.record.sideBMatrix = await ux.prompt('Side B Matrix')
  }

  private async getCatalogNumber(): Promise<void> {
    this.record.catalogNumber = await ux.prompt('Catalog Number')
  }

  private async getBarcode(): Promise<void> {
    this.record.barcode = await ux.prompt('Barcode')
  }

  private async getCondition(): Promise<void> {
    this.record.condition = await select(
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
          {name: 'P', value: 'P'},
        ],
      },
    )
  }

  private async getDescription(): Promise<void> {
    this.record.description = await ux.prompt('Description')
  }

  private async getRecordInput(): Promise<void> {
    await this.getArtist()
    await this.getAlbum()
    await this.getReleaseYear()
    await this.getPressingYear()
    await this.getSideAMatrix()
    await this.getSideBMatrix()
    await this.getCatalogNumber()
    await this.getBarcode()
    await this.getCondition()
    await this.getDescription()
  }

  private async saveRecord(): Promise<boolean> {
    const record: Record = this.record

    const db: DBClient = new DBClient()
    await db.connect()

    const dataAdded: boolean = await db.addData(record, 'records')
    await db.disconnect()

    return dataAdded
  }

  private logRecordStatus(saved: boolean): void {
    const album: string = this.record.album

    if (saved) {
      this.log(`${album} was succesfully added to your catalog`)
    } else {
      this.log(`there was an error adding ${album} to your catalog`)
    }
  }

  private async continueAdd(): Promise<boolean> {
    const result: boolean = await ux.confirm('Add another record?')
    return result
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Add)
    const continuous = flags.continuous

    let saved: boolean

    if (continuous) {
      let c: boolean = true
      
      while (c) {
        await this.getRecordInput()
        saved = await this.saveRecord()
        this.logRecordStatus(saved)
        c = await this.continueAdd()
        this.record = <Record>{}
      }

    } else {
      await this.getRecordInput()
      saved = await this.saveRecord()
      this.logRecordStatus(saved)
    }
  }
}
