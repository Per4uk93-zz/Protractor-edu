let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 20000,
  getPageTimeout: 10000,

    specs: ['C:/Users/Sergey/protractor/specs/*Spec.js'],

   /* suites:{

        yandex: 'C:/Users/Sergey/protractor/yandex/*Spec.js'



    },*/

    


onPrepare: function () {

    browser.ignoreSynchronization=true;

    browser.get('https://yandex.by/');

    //browser.get('https://yandex.by/');

    //browser.waitForAngularEnabled(false);

    //browser.manage().timeouts().implicitlyWait(5000);

    //browser.manage().window().maximize();

  
    jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: true,
        }
    }));

  
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({

        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,

        consolidate: false,
        consolidateAll: false,

        savePath: 'C:/Users/Sergey/protractor/screenshots'



    }));

    beforeEach(() => {
        
        let matchers = require('jasmine-protractor-matchers')
        jasmine.addMatchers(matchers);
      });

  },


  jasmineNodeOpts: {

  showColors: true,
   
   print: function() {}
},

    multiCapabilities: [
        //{'browserName': 'internet explorer'},
        {'browserName': 'chrome'},
        //{'browserName': 'firefox'}
    ],

    maxSessions: 1,


/*capabilities: {
  browserName: 'firefox',

  chromeOptions: {
     //args: [ "--headless", "--disable-gpu", "--window-size=1366,768" ]
  }
},*/



params: {

    /*qsURL: 'https://qs.emfit.com',
  qsDeviceSerial: 'per4uk93@gmail.com',
  qsDevicePin: '63956',
  qsAccountPassword: 'per4uk93',
  qsAccountEmail: 'test'*/

  
},

};