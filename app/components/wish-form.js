import Component from '@ember/component';
// import maleWish from '../wishes/male';
// import femaleWish from '../wishes/female';

export default Component.extend({
	isNameEmpty: false,
	isGenderEmpty: false,

	store: Ember.inject.service(),

	actions: {
		create(name) {
			const store = this.get('store');
			const wishData = {
				male: {
					array: store.peekAll('text').filter(text => text.toJSON().gender),
					prefix: 'Дорогой'
				},
				female: {
					array: store.peekAll('text').filter(text => !text.toJSON().gender),
					prefix: 'Дорогая'
				}
			};
			const gender = this.getProperties('gender').gender;
			if (!gender) {
				this.set('isGenderEmpty', true);
			} else {
				this.set('isGenderEmpty', false);
			}
			if (!name) {
				this.set('isNameEmpty', true);
			} else {
				this.set('isNameEmpty', false);
			}
			if (!this.isNameEmpty && !this.isGenderEmpty) {
				const wishArray = wishData[gender].array;
				const wish = wishArray[Math.floor(Math.random() * wishArray.length)];
				const prefix = wishData[gender].prefix + ' ' + name + ', ';

				store.createRecord('wish', {
					name: name,
					gender: gender === 'male',
					wishText: wish
				});
				console.log(this.get('store').peekAll('wish').map(wish => wish.toJSON()));
				this.sendAction('actionToCall', prefix, wish.toJSON().content);
			}
		}
	}
});
