import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gender: DS.attr('boolean'),
  wishText: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
