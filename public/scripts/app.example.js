class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.searchPassengerNumber = document.getElementById("passenger-number");
    this.searchDate = document.getElementById("car-date");
    this.searchTime = document.getElementById("car-time");
    this.searchType = document.getElementById("driver-type");
    // this.banyakk = document.getElementById("banyak");
    // this.aa = document.getElementById('aa')
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }


    let tempList = Car.list
    console.log(this.searchPassengerNumber.value)
    let passengerNumber = this.searchPassengerNumber.value
    if (!this.searchPassengerNumber.value.length == 0) tempList = tempList.filter(check => check.capacity == passengerNumber)
    if (!this.searchType.selectedIndex == 0) tempList = tempList.filter(check => check.available === (this.searchType.value == "true" ? true : false))
    if (this.searchDate.value) tempList = tempList.filter(check => new Date(check.availableAt) > new Date(this.searchDate.value))
    if (this.searchTime.value) tempList = tempList.filter(check => {
      let a = new Date(check.availableAt)
      let b = this.searchTime.value
      return a.getHours() > b.split(":")[0]
    })

    // console.log(tempList)
    // console.log(this.searchDate.value)
    // console.log(this.searchTime.value)
    // // console.log(new Date(this.searchTime.value))
    // console.log(this.searchType.value)
    // // tempList.some(e=>console.log(e.available))
    // console.log(true === "true")

    tempList.forEach(car => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    })
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   // node.className = "card w-100";
    //   // node.setAttribute("id", "aa");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);

    //   // const node = document.createElement("div");
    //   // node.className = "card w-100";
    //   // node.innerHTML = car.render();
    //   // this.banyakk.appendChild(node);

    //   // const gambar = document.getElementById('showCarCards');
    //   // // gambar.src = car.image;

    //   // const desc = document.getElementById('deskripsi');
    //   // // desc.innerHTML = car.description;

    //   // const carnama = document.getElementById('carName');
    //   // // carnama.innerHTML = car.model;

    //   // const cartipe = document.getElementById('carType');
    //   // // cartipe.innerHTML = car.type;

    //   // const carpassanger = document.getElementById('passanger');
    //   // // carpassanger.innerHTML = car.capacity;

    //   // const cartrans = document.getElementById('transmisi');
    //   // // cartrans.innerHTML = car.transmission;

    //   // const caryear = document.getElementById('tahun');
    //   // // caryear.innerHTML = car.year;
    // });
  };


  // Hasil
  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }

    this.searchPassengerNumber.value = ""
    this.searchDate.value = ""
    this.searchTime.value = ""
    this.searchType.selectedIndex = 0
  };
}
