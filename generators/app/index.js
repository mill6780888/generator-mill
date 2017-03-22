'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(`
      您需要使用${chalk.red('generator-mill')}什么样的生成工具呢？
      `));

    var prompts = this.fs.readJSON('prompts.json');

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  default:function (argument) {
    switch(this.props.fenlei){
      case "yeoman":
       this.composeWith('myo');
       break;
      case "maven":
       this.composeWith('mill-maven');
       break;
      case "java":
        this.composeWith('mill-java');
        break;
      case "node":
        this.composeWith('mnode');
        break; 
      case "gulp":
        this.composeWith('mgulp');
        break;
    }
  },
  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  },

  install: function () {
    // this.installDependencies();
  }
});
