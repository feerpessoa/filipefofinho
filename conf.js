exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/indexControllerTest.js'],
  framework: 'mocha',
  capabilities: { browserName: 'chrome' },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
  }
}