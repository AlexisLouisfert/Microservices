class Formatter {
    format(article) {
        throw new Error("La méthode 'format' doit être implémentée.");
    }
}

class HTMLFormatter extends Formatter {
    format(article) {
        return `<h1>${article.title}</h1><p>${article.content}</p>`;
    }
}

class MarkdownFormatter extends Formatter {
    format(article) {
        return `# ${article.title}\n${article.content}`;
    }
}


