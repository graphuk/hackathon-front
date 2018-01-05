import Component from '@ember/component';
import maleWish from '../wishes/male';
import femaleWish from '../wishes/female';

export default Component.extend({
	actions: {
		add(name) {
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
			const wishArray = wishData[gender].array;
			const wish = wishArray[Math.floor(Math.random() * wishArray.length)];
			const message = wishData[gender].prefix + ' ' + name + ', ' + wish;
			this.sendAction('actionToCall', message);
		}
	}
});
