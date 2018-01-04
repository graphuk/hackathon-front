import Component from '@ember/component'

export default Component.extend({
	actions: {
		add(x) {
			const gender  = this.getProperties('gender').gender;

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