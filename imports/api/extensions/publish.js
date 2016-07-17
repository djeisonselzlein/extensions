import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Extensions } from './collection';

if (Meteor.isServer) {
  Meteor.publish('extensions', function(options, searchString) {
    const selector = {};

    if (typeof searchString === 'string' && searchString.length) {
         selector.name = {
           $regex: `.*${searchString}.*`,
           $options : 'i'
         };
    }

    Counts.publish(this, 'numberOfExtensions', Extensions.find(selector), {
      noReady: true
    });

    return Extensions.find(selector, options);
  });
}
