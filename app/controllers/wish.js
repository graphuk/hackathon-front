import Controller from '@ember/controller';

export default Controller.extend({
    isFilled: false,
	message: '',

	actions: {
		add(prefix, message) {
			this.toggleProperty('isFilled');
			this.set('message', message);
			this.set('prefix', prefix);
		}
	}
});
