import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  gender: DS.attr('boolean'),
  wishes: DS.hasMany('wish')
});
