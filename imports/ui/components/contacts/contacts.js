import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './contacts.html';
import { name as ExtensionsList } from '../extensionsList/extensionsList';
import { name as Navigation } from '../navigation/navigation';

class Contacts {}

const name = 'contacts';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ExtensionsList,
  Navigation,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: Contacts
})
  .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/extensions');
}
