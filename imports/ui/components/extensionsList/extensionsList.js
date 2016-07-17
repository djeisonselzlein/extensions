import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './extensionsList.html';
import { Extensions } from '../../../api/extensions/index';
import { name as ExtensionAdd } from '../extensionAdd/extensionAdd';
import { name as ExtensionRemove } from '../extensionRemove/extensionRemove';

class ExtensionsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('extensions');

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
  uiRouter,
  ExtensionAdd,
  ExtensionRemove
]).component(name, {
  template,
  controllerAs: name,
  controller: ExtensionsList
})
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider
      .state('extensions', {
        url: '/extensions',
        template: '<extensions-list></extensions-list>'
      });
  }
