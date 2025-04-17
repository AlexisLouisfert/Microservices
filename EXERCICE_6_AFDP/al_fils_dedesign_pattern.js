class Mammifere {
    courir() {
        throw new Error("Méthode 'courir()' non implémentée !");
    }
}

class Poisson {
    nager() {
        throw new Error("Méthode 'nager()' non implémentée !");
    }
}

class Oiseau {
    voler() {
        throw new Error("Méthode 'voler()' non implémentée !");
    }
}

class Lion extends Mammifere {
    courir() {
        return "Le lion marche majestueusement dans la savane.";
    }
}

class AucunPoissonSafari extends Poisson {
    nager() {
        return "Aucun poisson dans le safari.";
    }
}

class AucunOiseauSafari extends Oiseau {
    voler() {
        return "Aucun oiseau dans ce safari.";
    }
}

class AucunMammifereAquarium extends Mammifere {
    courir() {
        return "Aucun mammifère dans cet aquarium.";
    }
}

class Requin extends Poisson {
    nager() {
        return "Le requin nage rapidement dans l'eau.";
    }
}

class AucunOiseauAquarium extends Oiseau {
    voler() {
        return "Aucun oiseau dans l'aquarium.";
    }
}

class AucunMammifereVoliere extends Mammifere {
    courir() {
        return "Aucun mammifère dans la volière.";
    }
}

class AucunPoissonVoliere extends Poisson {
    nager() {
        return "Aucun poisson dans la volière.";
    }
}

class Perroquet extends Oiseau {
    voler() {
        return "Le perroquet vole de branche en branche.";
    }
}

class ZooFactory {
    creerMammifere() {
        throw new Error("Méthode 'creerMammifere()' non implémentée !");
    }

    creerPoisson() {
        throw new Error("Méthode 'creerPoisson()' non implémentée !");
    }

    creerOiseau() {
        throw new Error("Méthode 'creerOiseau()' non implémentée !");
    }
}

class SafariFactory extends ZooFactory {
    creerMammifere() {
        return new Lion();
    }

    creerPoisson() {
        return new AucunPoissonSafari();
    }

    creerOiseau() {
        return new AucunOiseauSafari();
    }
}

class AquariumFactory extends ZooFactory {
    creerMammifere() {
        return new AucunMammifereAquarium();
    }

    creerPoisson() {
        return new Requin();
    }

    creerOiseau() {
        return new AucunOiseauAquarium();
    }
}

class VoliereFactory extends ZooFactory {
    creerMammifere() {
        return new AucunMammifereVoliere();
    }

    creerPoisson() {
        return new AucunPoissonVoliere();
    }

    creerOiseau() {
        return new Perroquet();
    }
}

function afficherActivites(factory) {
    const mammifere = factory.creerMammifere();
    const poisson = factory.creerPoisson();
    const oiseau = factory.creerOiseau();

    console.log(mammifere.courir());
    console.log(poisson.nager());
    console.log(oiseau.voler());
}

console.log(" Safari :");
afficherActivites(new SafariFactory());

console.log("\n Aquarium :");
afficherActivites(new AquariumFactory());

console.log("\n Volière :");
afficherActivites(new VoliereFactory());
