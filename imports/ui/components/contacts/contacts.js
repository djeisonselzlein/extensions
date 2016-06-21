import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './contacts.html';
import { name as ExtensionsList } from '../extensionsList/extensionsList';

class Contacts {}

const name = 'contacts';

// create a module
export default angular.module(name, [
  angularMeteor,
  ExtensionsList
]).component(name, {
  template,
  controllerAs: name,
  controller: Contacts
});
