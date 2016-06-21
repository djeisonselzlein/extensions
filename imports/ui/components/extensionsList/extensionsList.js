import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './extensionsList.html';
import { Extensions } from '../../../api/extensions';
import { name as ExtensionAdd } from '../extensionAdd/extensionAdd';
import { name as ExtensionRemove } from '../extensionRemove/extensionRemove';

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
  angularMeteor,
  ExtensionAdd,
  ExtensionRemove
]).component(name, {
  template,
  controllerAs: name,
  controller: ExtensionsList
});
