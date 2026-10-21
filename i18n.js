// English lives in index.html; this holds the Italian translations.
// To edit Italian text, change the matching key below.
(function () {
  var it = {
    title: 'Rosticceria Cina — Udine',
    metaDesc: 'Rosticceria Cina, Udine — Cucina cinese da asporto e a domicilio.',
    navMenu: 'Menù',
    navLocation: 'Dove siamo',
    navCall: 'Chiama',
    eyebrow: 'Cucina cinese · Udine',
    tagline: 'Piatti della tradizione cinese preparati con cura. Asporto e consegna a domicilio.',
    viewMenu: 'Vedi il menù',
    menu: 'Menù',
    starters: 'Antipasti',
    m1: '1. Involtini di primavera',
    m2: '2. Nuvole di gamberi',
    m3: '3. Verdure miste fritte',
    m4: '4. Toast di gamberi',
    m4Desc: 'C’è anche carne.',
    m5: '5. Ravioli al vapore*',
    m6: '6. Ravioli ai ferri*',
    m7: '7. Ravioli con gamberi*',
    m7Desc: 'C’è anche carne di maiale.',
    m8: '8. Ravioli di verdure*',
    m9: '9. Antipasto misto caldo',
    m9a: '9a. Baozi',
    soups: 'Zuppe',
    m10: '10. Zuppa agropiccante',
    m11: '11. Zuppa ai frutti di mare',
    m11a: '11a. Zuppa di miso (alghe)',
    riceNoodles: 'Primi piatti',
    m12: '12. Riso saltato con frutti di mare',
    m12a: '12a. Riso oriente',
    m13: '13. Riso bianco',
    m13a: '13a. Riso con verdure',
    m14: '14. Riso alla cantonese',
    m15: '15. Riso con gamberi',
    m16: '16. Riso con curry',
    m17: '17. Spaghetti di soia',
    m17a: '17a. Spaghetti di soia con frutti di mare',
    m18: '18. Spaghetti di riso con verdure',
    m18a: '18a. Spaghetti di riso con frutti di mare',
    m19: '19. Spaghetti ai frutti di mare',
    m19a: '19a. Spaghetti con gamberi',
    m20: '20. Gnocchi di riso cinese',
    m21: '21. Pane cinese',
    m21Desc: 'Al vapore o fritto.',
    meat: 'Secondi di carne',
    m22: '22. Pollo con funghi e bambù*',
    m23: '23. Pollo con curry*',
    m24: '24. Pollo piccante*',
    m25: '25. Pollo con mandorle*',
    m26: '26. Pollo con peperoni*',
    m27: '27. Pollo fritto*',
    m27a: '27a. Pollo al limone*',
    m28: '28. Tre delizie*',
    m28Desc: 'Pollo, gamberi e funghi.',
    m29: '29. Pollo agrodolce*',
    m29a: '29a. Pollo con patate*',
    m30: '30. Maiale agrodolce',
    m31: '31. Maiale con funghi e bambù*',
    m32: '32. Maiale piccante*',
    m33: '33. Cucina dello chef*',
    m34: '34. Anatra con aromi cinesi*',
    m35: '35. Anatra con funghi e bambù*',
    m36: '36. Anatra in salsa cinese*',
    m37: '37. Manzo con funghi e bambù*',
    m38: '38. Manzo con curry*',
    m39: '39. Manzo piccante*',
    m40: '40. Manzo in salsa d’ostrica*',
    m41: '41. Manzo ai cinque aromi*',
    m41a: '41a. Manzo con patate*',
    fish: 'Secondi di pesce',
    m42: '42. Gamberetti fritti*',
    m43: '43. Gamberetti agrodolce*',
    m44: '44. Gamberetti con funghi e bambù*',
    m45: '45. Gamberetti con curry*',
    m46: '46. Gamberetti piccanti*',
    m47: '47. Gamberetti alla griglia*',
    m48: '48. Gamberetti cinque colori*',
    m49: '49. Otto gioielli nel nido di pavone*',
    m50: '50. Gamberoni fritti all’imperiale*',
    m51: '51. Misto di pesce alla piastra*',
    m51a: '51a. Misto di pesce fritto*',
    m52: '52. Gamberoni piccanti*',
    m53: '53. Gamberoni con porri*',
    m54: '54. Gamberoni alla griglia*',
    m55: '55. Totani piccanti*',
    m56: '56. Totani fritti*',
    m57: '57. Filetti di platessa agrodolce*',
    m57Desc: 'Anche piccanti o al limone.',
    m58: '58. Chele di granchio*',
    omelettes: 'Omelette',
    m59: '59. Omelette con verdure',
    m60: '60. Omelette con granchio',
    vegetables: 'Verdure',
    m61: '61. Funghi e bambù',
    m62: '62. Germogli di soia',
    m63: '63. Verdura mista saltata',
    m64: '64. Insalata con gamberetti',
    m65: '65. Insalata con granchio',
    m66: '66. Patatine fritte*',
    desserts: 'Dolci',
    m67: '67. Gelato fritto*',
    m68: '68. Frutta fritta',
    m69: '69. Cocco fritto*',
    m70: '70. Dolce di riso con cocco fritto*',
    m71: '71. Cioccolata fritta',
    pdfText: 'Preferisci l’originale? Guarda il nostro menù stampato, così come lo trovi al ristorante.',
    pdfLink: 'Vedi il menù originale (PDF)',
    location: 'Dove siamo',
    directions: 'Indicazioni stradali →',
    hours: 'Orari',
    monday: 'Lunedì',
    tuesday: 'Martedì',
    closed: 'Chiuso',
    wedSun: 'Mer – Dom',
    callUs: 'Chiamaci',
    callNote: 'Per asporto, consegna a domicilio e prenotazioni. Accettiamo contanti, carte e Apple Pay.'
  };
  var textEls = document.querySelectorAll('[data-i18n]');
  var attrEls = document.querySelectorAll('[data-i18n-content]');
  var en = {};
  textEls.forEach(function (el) { en[el.dataset.i18n] = el.textContent; });
  attrEls.forEach(function (el) { en[el.dataset.i18nContent] = el.content; });

  var button = document.getElementById('lang-toggle');

  function apply(lang) {
    var dict = lang === 'it' ? it : en;
    textEls.forEach(function (el) { el.textContent = dict[el.dataset.i18n] || en[el.dataset.i18n]; });
    attrEls.forEach(function (el) { el.content = dict[el.dataset.i18nContent] || en[el.dataset.i18nContent]; });
    document.documentElement.lang = lang;
    button.textContent = lang === 'it' ? 'EN' : 'IT';
    button.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all’italiano');
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || ((navigator.language || '').toLowerCase().indexOf('it') === 0 ? 'it' : 'en');
  if (lang === 'it') apply('it');

  button.addEventListener('click', function () {
    apply(document.documentElement.lang === 'it' ? 'en' : 'it');
  });
})();
