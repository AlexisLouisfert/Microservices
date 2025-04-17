class User {
    accessContent() {
        console.log("Accès au contenu général.");
    }
  
    accessPremiumContent() {
        console.log("Contenu premium non disponible pour les utilisateurs standards.");
    }
}
  
class PremiumUser extends User {
    accessPremiumContent() {
        super.accessPremiumContent();
        console.log("Accès au contenu premium.");
    }
}

function showContent(user) {
    user.accessContent();
    user.accessPremiumContent(); 
}

const basicUser = new User();
const premiumUser = new PremiumUser();

showContent(basicUser);     
showContent(premiumUser);   