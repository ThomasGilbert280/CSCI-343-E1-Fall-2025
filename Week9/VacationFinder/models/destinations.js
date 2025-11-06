class Destination {
  constructor(id, countryId, name, avgCost, foundedYear, rating, desc, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgCost = avgCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.desc = desc
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Number of Sites: ${this.numSites}, Rating: ${this.rating}`;
  }
}

export default Destination;
