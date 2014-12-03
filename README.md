Modalica
========

Modalica est un plugin jQuery de boite modale qui se veut le plus simple possible.




Installation
------------

###Prérequis
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
    

*NB:* L'identifiant de la div doit correspondre au `href` du lien qui a pour but d'appeler la boite modal.

Exemple:

    <a href="#contenu1" class="modalica">
        Ce lien ouvre la boite modal liée au contenu "#contenu1"
    </a>

--

###JS
La partie javascript est très simple, il suffit d'appeler le plugin comme ceci :

    $(document).ready(function() {
        $('.modalica').modalica(); 
    });



Customisation
--------------
Les feuilles de style de ce plugin ont été écrite à l'aide de SASS et Compass, de ce fait, si vous souhaitez modifier l'apparence globale de la boite, il vous suffit de modifier les variables à votre disposition dans le fichier `_modalica-settings.scss` :

    $modalica-max-width:960px;
    $modalica-background:#253d5b;
    $modalica-text-color:#a8bbdf;
    $close-btn-background:#f06d55;
    $transition-background:all ease .2s;
    $transition-content:all ease .3s;
