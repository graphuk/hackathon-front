import Route from '@ember/routing/route';
import data from '../wishes/db';

export default Route.extend({
	model() {
		this.get('store').push({
			data
		});
	}
});
