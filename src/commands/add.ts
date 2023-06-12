import {Command, ux, Flags} from '@oclif/core'
import select from '@inquirer/select'
import {Record} from '../models/record'

import DBClient from '../modules/mongo-client'

export default class Add extends Command {
  static description = 'add a vinyl record to your catalogue'
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

  private async getReleaseDate(): Promise<void> {
    this.record.releaseDate = await ux.prompt('Release Year')
  }

  private async getPressingDate(): Promise<void> {
    this.record.pressingDate = await ux.prompt('Pressing Year')
  }

  private async getSerialNumber(): Promise<void> {
    this.record.serialNumber = await ux.prompt('Serial Number')
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
    await this.getReleaseDate()
    await this.getPressingDate()
    await this.getSerialNumber()
    await this.getBarcode()
    await this.getCondition()
    await this.getDescription()
  }

  private async saveRecord(): Promise<boolean> {
    const record: Record = this.record

    const db = new DBClient()
    await db.connect()

    const dataAdded = await db.addData(record, 'records')
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

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Add)
    const continuous = flags.continuous

    let saved: boolean

    if (continuous) {
      const c = true
      while (c) {
        await this.getRecordInput()
        saved = await this.saveRecord()
        this.logRecordStatus(saved)

        // set c to false if user no longer wants to continue adding records
      }
    } else {
      await this.getRecordInput()
      saved = await this.saveRecord()
      this.logRecordStatus(saved)
    }
  }
}
