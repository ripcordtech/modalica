Modalica
========

Modalica est un plugin jQuery de boite modale qui se veut le plus simple possible.

##Sommaire

Installation
------------
L'installation du plugin est très simple : il suffit d'appeler les deux fichiers suivants dans votre page : `modalica.js` ainsi que `modalica.js`
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/modalica.css">
    
    <!-- SCRIPTS -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/min/modalica-min.js"></script>
  

Pour créer un block de contenu à afficher dans le modal, il suffit d'ajouter votre contenu ce dans l'exmple suivant :

    <div class="modalica--content" id="contenu1">
      <h1>Ma superbe boite modal</h1>
      <p>
        Ceci est le contenu de ma boite modal. Passionnant n'est-ce pas ?
      </p>
    </div>
    
--



*NB:* L'identifiant de la div doit correspondre au `href` du lien qui a pour but d'appeler la boite modal.

Exemple:

    <a href="#contenu1" class="modalica">
        Ce lien ouvre la boite modal liée au contenu "#contenu1"
    </a>

