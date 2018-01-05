import Component from '@ember/component';
import maleWish from '../wishes/male';
import femaleWish from '../wishes/female';

export default Component.extend({
	isNameEmpty: false,
	isGenderEmpty: false,

	actions: {
		create(name) {
			const wishData = {
				male: {
					array: maleWish,
					prefix: 'Дорогой'
				},
				female: {
					array: femaleWish,
					prefix: 'Дорогая'
				}				
			}
			const gender  = this.getProperties('gender').gender;
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
				const message = wishData[gender].prefix + ' ' + name + ', ' + wish;
				this.sendAction('actionToCall', message);
			}
		}
	}
});
