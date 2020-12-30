const program = require('commander');
const { createProjectAction } = require('./action');
const createCommands = () => {
	program
		.command('create <project> [destination...]')
		.description('clone a repository into a newly created directory')
		.action(createProjectAction);
};

module.exports = createCommands;
