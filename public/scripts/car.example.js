class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }



  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.available = available;
  }

  render() {
      return `
          <div class="card d-flex" style="width: 18rem;">
            <div class="card-body flex-fill" id="kedua">
              <img class="card-img-top showCarCard" id="showCarCards" src="${this.image}" alt="${this.manufacture}">
              <div class="d-flex carsName mb-2 mt-3">
                <p id="carName">${this.manufacture}</p>
                <p>/</p>
                <p id="carType">${this.model}</p>
              </div>
              <p class="price mb-1">Rp. ${this.rentPerDay} / Hari</p>
              <p id="deskripsi">${this.description}</p>
              <div class="d-flex ">
                <img class="showCardImg me-2" src="images/fi_users.png" alt="">
                <p class="showCardText" id="passanger">${this.capacity}</p>
              </div>
              <div class="d-flex ">
                <img class="showCardImg me-2" src="images/fi_settings.png" alt="">
                <p class="showCardText" id="transmisi">${this.transmission}</p>
              </div>
              <div class="d-flex mb-3">
                <img class="showCardImg me-2" src="images/fi_calendar.png" alt="">
                <p class="showCardText" id="tahun">${this.year}</p>
              </div>

              <button class="btn btn-success w-100">Pilih Mobil</button>
            </div>
          </div>
    `;
  }
}
