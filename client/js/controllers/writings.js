/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function WritingsController() {
  const vm = this;
  vm.printWritings = 'My Writings';
  vm.summary = `Wikipedia is a live collaboration differing from paper-based
                reference sources in important ways. Unlike printed encyclopedias,
                Wikipedia is continually created and updated, with articles on
                historic events appearing within minutes, rather than months
                or years. Because everybody can help improve it, Wikipedia
                has become more comprehensive than any other encyclopedia.
                In addition to quantity, its contributors work on improving
                quality as well. Wikipedia is a work-in-progress, with articles
                in various stages of completion. As articles develop, they tend
                to become more comprehensive and balanced. Quality also improves
                over time as misinformation and other errors are removed or repaired.
                However, because anyone can click "edit" at any time and add stuff in,
                any article may contain undetected misinformation, errors, or vandalism.
                Awareness of this helps the reader to obtain valid information, avoid
                recently added misinformation (see Wikipedia:Researching with Wikipedia),
                and fix the article.`;
}

angular.module('myApp').controller('WritingsController', WritingsController);
