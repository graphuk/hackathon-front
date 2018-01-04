import Component from '@ember/component';
import maleWish from '../../wishes/male.js';

export default Component.extend({
	actions: {
		add(x) {
			const gender  = this.getProperties('gender').gender;
			console.log(maleWish);

			if (gender === 'male') {
				const wish = Ember.$.getJSON("../../wishes/male.json");
				console.log(wish)
			} else {
				const wish = Ember.$.getJSON("../../wishes/male.json");
				console.log(wish)
			}
		}
	}
});
