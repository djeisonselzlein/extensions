import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './extensionsList.html';
import { Extensions } from '../../../api/extensions/index';
import { name as ExtensionsSort } from '../extensionsSort/extensionsSort';
import { name as ExtensionAdd } from '../extensionAdd/extensionAdd';
import { name as ExtensionRemove } from '../extensionRemove/extensionRemove';

class ExtensionsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.perPage = 10;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('extensions', () => [{
        limit: parseInt(this.perPage),
        skip: parseInt((this.getReactively('page') - 1) * this.perPage),
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);

    this.helpers({
      extensions() {
        return Extensions.find({}, {
          sort : this.getReactively('sort')
        });
      },
      extensionsCount() {
        return Counts.get('numberOfExtensions');
      },
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
  }

  isOwner(extension) {
    return this.isLoggedIn && extension.owner === this.currentUserId;
  }

  pageChanged(newPage){
    this.page = newPage;
  }

  sortChanged(sort) {
    this.sort = sort;
  }
}

const name = 'extensionsList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  ExtensionsSort,
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
