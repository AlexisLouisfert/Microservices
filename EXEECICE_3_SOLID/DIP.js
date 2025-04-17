class ArticleStorage {
    save(article) {
        console.log("Article saved in local storage:", article);
    }
}
class ArticlePublisher {
    constructor(storage) {
        this.storage = storage;
    }
  
    publish(article) {
        this.storage.save(article);
        console.log("Article published:", article);
    }
}
  
const storage = new ArticleStorage();
const publisher = new ArticlePublisher(storage);
  
publisher.publish("DIP publié wouhou");
  