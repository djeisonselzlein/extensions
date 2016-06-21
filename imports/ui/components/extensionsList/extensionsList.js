import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './extensionsList.html';

class ExtensionsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      extensions() {
        return Extensions.find({});
      }
    });
  }
}

const name = 'extensionsList';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ExtensionsList
});
