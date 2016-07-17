import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './extensionAdd.html';
import { Extensions } from '../../../api/extensions/index';

class ExtensionAdd {
  constructor() {
    this.extension = {};
  }

  submit() {
    this.extension.owner = Meteor.user()._id;
    Extensions.insert(this.extension);
    this.reset();
  }

  reset() {
    this.extension = {};
  }
}

const name = 'extensionAdd';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ExtensionAdd
});
