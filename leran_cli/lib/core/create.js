const program = require('commander');
const { createProjectAction, addComponentAction, addPageAndRouteAction, addStoreAction } = require('./action');
const createCommands = () => {
	program
		.command('create <project> [destination...]')
		.description('clone a repository into a newly created directory')
		.action(createProjectAction);

	program
		.command('addcpn <name>')
		.description('add vue component, 例如: jing addcpn HelloWorld [-d src/components]')
		.action((name) => {
			addComponentAction(name, program.dest || 'src/components');
		});

	program
		.command('addpage <page>')
		.description('add vue page and router config, 例如: jing addpage Home [-d src/pages]')
		.action((page) => {
			addPageAndRouteAction(page, program.dest || 'src/pages');
		});

	program
		.command('addstore <store>')
		.description('add vue page and router config, 例如: jing addpage Home [-d src/pages]')
		.action((store) => {
			addStoreAction(store, program.dest || 'src/store/modules');
		});
};

module.exports = createCommands;
