export class Settings {
  constructor(data) {
    this.difficulty = data.difficulty ? data.difficulty : ''
    this.type = data.type ? data.type : ''
    this.category = data.category ? data.category : ''
    this.qty = data.qty ? data.qty : 10
  }

}
