
export class Category {
  constructor(data) {
    this.id = data.id
    this.name = data.name
  }

  get categoryListEntry() {
    return `
        <option value="${this.id}">${this.name}</option>
    `
  }
}

// https://opentdb.com/api_category.php
// {
//   "id": 9,
//   "name": "General Knowledge"
// },