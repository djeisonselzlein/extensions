import { Mongo } from 'meteor/mongo';
import { Extensions } from '../imports/api/extensions';

Meteor.startup(() => {
  if (Extensions.find().count() === 0) {
    const extensions = [{
      'name': 'Ceroni',
      'number': '910'
    }, {
      'name': 'Edison',
      'number': '930'
    }, {
      'name': 'Renato',
      'number': '925'
    }];

    extensions.forEach((extension) => {
      Extensions.insert(extension)
    });
  }
});
