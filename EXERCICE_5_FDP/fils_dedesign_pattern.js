class Document {
    constructor({ title, content }) {
      this.title = title;
      this.content = content;
    }
  
    afficher() {
      throw new Error("La méthode 'afficher' doit être implémentée");
    }
  }
  
  class Report extends Document {
    constructor(metadata) {
      super(metadata);
      this.findings = []; 
    }
  
    addFinding(finding) {
      this.findings.push(finding);
    }
  
    afficher() {
      return `Report: ${this.title} (${this.findings.length} conclusions)`;
    }
  }
  
  class Letter extends Document {
    constructor(metadata) {
      super(metadata);
      this.recipient = '';
    }
  
    setRecipient(recipient) {
      this.recipient = recipient;
    }
  
    afficher() {
      return `Letter: ${this.title} (To: ${this.recipient || 'Pas de destinataire'})`;
    }
  }
  
  class Memo extends Document {
    constructor(metadata) {
      super(metadata);
      this.priority = 'Medium';
    }
  
    setPriority(priority) {
      this.priority = priority;
    }
  
    afficher() {
      return `Memo: ${this.title} (Priorité: ${this.priority})`;
    }
  }
  
  // Document Factory
  class DocumentFactory {
    static createDocument(type, metadata) {
      switch (type) {
        case 'report':
          return new Report(metadata);
        case 'letter':
          return new Letter(metadata);
        case 'memo':
          return new Memo(metadata);
        default:
          throw new Error(`Type de document invalide: ${type}`);
      }
    }
  }
  

  
  const report = DocumentFactory.createDocument('report', {title: 'Rapport Entreprise',content: 'Analyse de performance annuelle 2024'});
  report.addFinding('CA augmentés de 15%');
  report.addFinding('Satisfaction client à 92%');
  console.log(report.afficher());
  console.log('Conclusions:', report.findings);
  console.log();
  
  const letter = DocumentFactory.createDocument('letter', {title: 'Proposition Client', content: 'Proposition pour nouveau projet'});
  letter.setRecipient('Jean Dupont');
  console.log(letter.afficher());
  console.log('Destinataire:', letter.recipient);
  console.log();
 
  const memo = DocumentFactory.createDocument('memo', {title: 'Réunion Équipe', content: 'Points de discussion pour prochaine réunion'});
  memo.setPriority('High');
  console.log(memo.afficher());
  console.log('Priorité:', memo.priority);
  console.log();