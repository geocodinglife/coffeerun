class Truck {
  constructor(truckId, db) {
    this.truckId = truckId;
    this.db      = db;
  }

  createOrder(order) {
    console.log(`Adding order for' ${order.emailAdress}`);
    this.db.add(order.emailAdress, order);
  }

  deliverOrder(customerId) {
    console.log(`Delivering order for ${customerId}`);
    this.db.remove(customerId);
  }

  printOrders() {
    // is only returning one error to bind all the elements
    let customerIdArray = Object.keys(this.db.getAll());

    console.log(`Truck # ${this.truckId} has pending orders:`);
    customerIdArray.forEach((id) => {
      console.log(this.db.get(id));
    })
  }
}
