#!/usr/bin/env node

const program = require('commander');

const helpOptions = require('./lib/core/help');

// 查看版本号
program.version(require('./package.json').version);

helpOptions();

program.parse(process.argv);
