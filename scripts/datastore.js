class DataStore {
  constructor() {
    this.data = {};
  }

  add(key, value) {
    this.data[key] = value;
  }

  remove(key) {
    delete this.data[key];
  }

  get(key) {
    return this.data[key];
  }

  getAll() {
    return this.data;
  }
}
