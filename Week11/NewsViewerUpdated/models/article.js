class Article {
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      description,
      imageUrl
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.description = description;
      this.imageUrl = imageUrl;
      
    }
  
    toString() {
      return `${this.headline} - ${this.type} - ${this.date} - ${this.author} - ${this.agency} - ${this.description} - ${this.imageUrl}`;
    }
  }

  export default Article;
