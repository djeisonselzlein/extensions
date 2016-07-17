import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './extensionsSort.html';

class ExtensionsSort {
  constructor() {
    this.changed();


    this.sizes = [
        "small (12-inch)",
        "medium (14-inch)",
        "large (16-inch)",
        "insane (42-inch)"
    ];
  }

  changed() {
    this.onChange({
      sort: {
        [this.property]: parseInt(this.order)
      }
    });
  }
}

const name = 'extensionsSort';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    onChange: '&',
    property: '@',
    order: '@'
  },
  controllerAs: name,
  controller: ExtensionsSort
});
