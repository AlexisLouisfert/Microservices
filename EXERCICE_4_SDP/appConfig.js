const AppConfig = (function () {
    let instance; 
  
    function createInstance() {
        const config = {
            settings: {},
    
            set: function (obj, value) {
                this.settings[obj] = value;
            },
    

            get: function (obj) {
                return this.settings[obj];
            }
        };
    
        return config;
    }
  
    return {
        getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
        }
    };
  })();

const configA = AppConfig.getInstance();
const configB = AppConfig.getInstance();
const configC = AppConfig.getInstance();

configA.set("apiURL", "https://api.acme.com");
configB.set("mode", "dev");
configC.set("lang", "fr");

console.log("API URL :", configA.get("apiURL"));
console.log("Mode :", configA.get("mode"));
console.log("Langue :", configA.get("lang"));
  
console.log("API URL :", configB.get("apiURL"));
console.log("Mode :", configB.get("mode"));
console.log("Langue :", configB.get("lang"));
  
console.log("API URL :", configC.get("apiURL"));
console.log("Mode :", configC.get("mode"));
console.log("Langue :", configC.get("lang"));
  
console.log("est-ce la meme instance ?", configA === configB && configB === configC && configA === configC);
  