import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Contacts } from '../imports/ui/components/contacts/contacts';

angular.module('extensions', [
    angularMeteor,
    Contacts
  ]);
