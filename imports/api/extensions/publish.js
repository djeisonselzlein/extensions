import { Meteor } from 'meteor/meteor';

import { Extensions } from './collection';

if (Meteor.isServer) {
  Meteor.publish('extensions', function() {
    return Extensions.find();
  });
}
