const { promisify } = require('util');
// 将 download-git-repo 转为 promise

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');

const createProjectAction = async (project) => {
	// 拉代码的提示信息
	console.log('jing is creating your project, please wait a minute'); //jing-log
	// 1、clone 项目
	await download(vueRepo, project, { clone: true });

	// 2、安装依赖
	const command = process.platform === 'win32' ? 'npm.cwd' : 'npm';
	await commandSpawn(command, ['install'], { cwd: `./${project}` });

	// 3、启动项目
	commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });

	// 4、打开浏览器
	open('http://localhost:8080/');
};

module.exports = {
	createProjectAction,
};
