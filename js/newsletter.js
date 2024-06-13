/* eslint-disable no-undef */
/**
 * @file Script dédié à la fonctionnalité Newsletter
 */
const newsletter = {
  element: document.querySelector('.newsletter'),
  formElement: document.querySelector('.newsletter form'),
  emailElement: document.getElementById('subscriber-email'),

  forbiddenDomains: [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ],

  /*
    Dans un objet, on ajoute des PROPRIÉTÉS en utilisant un
    système de « clé/valeur »

    La clé peut être :
    - une chaîne de caractères
    - un nombre (plus rare)

    La valeur peut-être de tout type !
    - string, number, boolean, null, undefined…
    - array, object
    - function → objectName.functionName()
  */
  init: function () {
    // console.log('coucou de la part de newsletter');
    newsletter.addEvents();
  },

  /*
    Avec ES6 (ES2015), on a une autre syntaxe pour déclarer
    une MÉTHODE (fonction dans un objet) :
    on peut utiliser directement les FUNCTION EXPRESSION
    le nom de la fonction sans le mot-clé `function`
  */
  addEvents() {
    console.log('addEvents');
    console.log(document.getElementById('newsletter-btn'));

    // clic sur l'élément de menu
    document.getElementById('newsletter-btn')
      .addEventListener(
        'click',
        newsletter.show,
        { once: true } // l'écouteur est actif seulement une fois
        // note : ici c'est juste pour un rappel
      );

    // clic sur le bouton de fermeture du bloc
    document.querySelector('.newsletter__close')
      .addEventListener('click', newsletter.hide);

    // soumission du formulaire
    newsletter.formElement
      .addEventListener('submit', newsletter.submit);
  },

  show(event = null) {
    // if (event !== null) {
    if (event) {
      // empêche le comportement par défaut d'un lien
      // = ouverture d'une nouvelle page
      event.preventDefault();
    }

    // mon intention
    // console.log('ouvre la newsletter');
    // ouvre = enlever la classe `newsletter--hidden`
    newsletter.element.classList.remove('newsletter--hidden');

    // je donne le focus au champ de formulaire
    newsletter.emailElement.focus();
  },

  // je ne me sers d'`event`, je ne suis pas obligé de
  // le récupérer en paramètre
  hide() {
    // ferme = ajouter la classe `newsletter--hidden`
    newsletter.element.classList.add('newsletter--hidden');
  },

  submit(event) {
    const email = newsletter.emailElement.value;
    console.log(email);

    let badEmail = false;

    for (const domain of newsletter.forbiddenDomains) {
      // pour chaque élément de tableau,
      // à chaque tout de boucle,
      // il assigne la valeur à la variable `domain`

      // SI l'email contient `domain`
      //    ALORS je bloque la soumission et j'affiche une erreur
      // → je passe `badEmail` à true
      if (email.includes(domain)) {
        badEmail = true;
        // dès qu'on en a trouvé un mauvais,
        // inutile de continuer → je sors de la boucle
        break;
      }
    }

    // quand on a un mail interdit,
    // on bloque la soumission et on affiche l'erreur
    if (badEmail) {
      event.preventDefault();
      // alert('Bad email');
      message.error(
        'Les emails jetables sont interdits',
        newsletter.formElement
      );
    } else {
      newsletter.hide();
      // alert('Merci de votre inscription !');
      message.success(
        '<strong>Bienvenue !</strong> Merci de votre intérêt ♥',
        document.body
      );
    }
  }

};
