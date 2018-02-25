import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gender: DS.attr('boolean'),
  wishText: DS.belongsTo('text'),
  createdAt: DS.attr('date', {
    defaultValue() {
		const date = new Date();
		return date.toLocaleDateString("ru") + ' ' + (date.getHours()<10?'0':'') + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
	}
  })
});
