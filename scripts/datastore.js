((window) => {
  const App = window.App || {}

  let DataStore = () => {
    console.log('running the Datastore function')
  };

  App.DataStore = DataStore
  window.App = App
})(window);
