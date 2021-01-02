class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(type, handler) {
		if (!this.events[type]) {
			this.events[type] = [];
		}
		this.events[type].push(handler);
	}

	off(type, handler) {
		if (!this.events[type]) {
			return;
		}
		this.events[type] = this.events[type].filter((item) => item !== handler);
	}

	emit(type, ...args) {
		this.events[type].forEach((item) => {
			// Reflect.apply(item, this, args);
			item(args);
		});
	}
}

const emitter = new EventEmitter();

// emitter.on('click', () => {
// 	console.log('click1'); //jing-log
// });

const lister = () => {
	console.log('click2'); //jing-log
};

emitter.on('click', lister);

emitter.emit('click');
emitter.emit('click');
emitter.off('click', lister);
emitter.emit('click');
