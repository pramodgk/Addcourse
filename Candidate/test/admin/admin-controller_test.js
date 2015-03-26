/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('adminCtrl', function () {
  var ctrl,scope;

  beforeEach(module('admin'));

  beforeEach(inject(function ($rootScope, $controller) {
  	scope= $rootscope.new();
    ctrl = $controller('adminCtrl',{
    	$scope:scope
    });
  }));
 console.log('My new app initialized');
  it('should have ctrlName as adminCtrl', function () {
  	// console.log(ctrl.ctrlName);
    // expect(ctrl.ctrlName).toEqual('adminCtrl');
  });

});
