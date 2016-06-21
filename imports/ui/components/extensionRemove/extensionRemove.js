import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './extensionRemove.html';
import { Extensions } from '../../../api/extensions';

class ExtensionRemove {
  remove() {
    if(this.extension) {
      Extensions.remove(this.extension._id);
    }
  }
}

const name = 'extensionRemove';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
      extension: '<'
  },
  controllerAs: name,
  controller: ExtensionRemove
});
