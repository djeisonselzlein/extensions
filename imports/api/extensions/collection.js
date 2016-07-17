import { Mongo } from 'meteor/mongo';

export const Extensions = new Mongo.Collection('extensions');

Extensions.allow({
  insert(userId, extension){
    return userId && extension.owner === userId;
  },
  update(userId, extension, fields, modifier) {
    return userId && extension.owner === userId;
  },
  remove(userId, extension) {
    return userId && extension.owner === userId;
  }
});
