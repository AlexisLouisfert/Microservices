class ArticleManager {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

class CreateArticle {
  constructor(articles) {
    this.articles = articles;
  }

  create(title, content) {
    const newArticle = new ArticleManager(title, content);
    this.articles.push(newArticle);
    console.log('Article created:', newArticle);
  }
}

class EditArticle {
  constructor(articles) {
    this.articles = articles;
  }

  edit(title, newContent) {
    const article = this.articles.find(article => article.title === title);
    if (article) {
      article.content = newContent;
      console.log('Article updated:', article);
    } else {
      console.log('Article not found:', title);
    }
  }
}

class DeleteArticle {
  constructor(articles) {
    this.articles = articles;
  }

  delete(title) {
    const index = this.articles.findIndex(article => article.title === title);
    if (index !== -1) {
      this.articles.splice(index, 1);
      console.log('Article deleted:', title);
    } else {
      console.log('Article not found:', title);
    }
  }
}

class PublishArticle {
  constructor(articles) {
    this.articles = articles;
  }

  publish(title) {
    const article = this.articles.find(article => article.title === title);
    if (article) {
      console.log('Article published:', title);
    } else {
      console.log('Article not found:', title);
    }
  }
}
