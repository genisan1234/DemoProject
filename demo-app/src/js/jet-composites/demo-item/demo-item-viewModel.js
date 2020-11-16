/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 'ojL10n!./resources/nls/demo-item-strings', 'ojs/ojcontext','ojs/ojarraydataprovider','ojs/ojinputtext','ojs/ojknockout'], function (ko, componentStrings, Context,ArrayDataProvider) {
    
    function ExampleComponentModel(context) {
        var self = this;
        self.currencydata = [{
          'label':'US','value':'US'
        }
      ,{
      'label':'RS','value':'RS'
      },
      {
        'label':'EU','value':'EU'
        }   ];
      self.currVal = ko.observable('US');
      self.currencyDataProvider =ko.observable();
      self.inputVal=ko.observable(25000);
      self.outputVal = ko.computed(function(){
        if(self.currVal()=='US'){
          return self.inputVal()*1.0;
        }
        else if(self.currVal()=='RS'){
          return self.inputVal()*0.013;
        }
        else if(self.currVal()=='EU'){
          return self.inputVal()*1.18;
        }

      },this);

      self.currencyDataProvider(new ArrayDataProvider(self.currencydata,{keyAttributes:'value'}));
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Hello from demo-item');
        self.properties = context.properties;
        self.res = componentStrings['demo-item'];
        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});
