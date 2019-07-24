((window) => {
  const App = window.App || {}

  class DataStore {
    constructor() {
    console.log('running the Datastore function');
    }
  }

  // let DataStore = () => {
    // console.log('running the Datastore function')
    // this.data = {}
  // }

  App.DataStore = new DataStore();
  window.App = App
})(window);
