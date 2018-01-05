import Controller from '@ember/controller';

export default Controller.extend({
    isFilled: false,
	message: '',

	actions: {
		add(message) {
			this.toggleProperty('isFilled');
			this.set('message', message);
		}
	}
});
