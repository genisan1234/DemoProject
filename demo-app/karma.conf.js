// Karma configuration
// Generated on Mon Nov 16 2020 17:35:11 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugin: ['karma-jquery'],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs','jquery-1.8.3'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'src/js/libs/**/*.js', included: false},
      {pattern: 'src/js/viewModels/*.js', included: false},
      {pattern: 'test/*.js', included: false},
       'test-main.js'
    ],


    exclude: [
      'src/js/main.js',
    ],
    preprocessors: {
      'src/js/viewModels/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeCanary', 'Firefox', 'Safari', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
