import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import template from './contacts.html';
import { name as ExtensionsList } from '../extensionsList/extensionsList';
import { name as Navigation } from '../navigation/navigation';

class Contacts {}

const name = 'contacts';

// create a module
export default angular.module(name, [
  angularMeteor,
  ngMaterial,
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

function config($locationProvider, $urlRouterProvider, $mdIconProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/extensions');

  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';

  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
}
