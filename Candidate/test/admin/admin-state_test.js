/*global describe, inject*/
'use strict';

describe('Course.admin', function () {
  var $rootScope, $state, $injector,$state = 'Course.admin';

  inject(function ($rS, $st, $injt, $templateCache) {
    $rootScope = $rS;
    $state = $st;
    $injector = $injt;

    $templateCache.put('admin.tpl.html', '');
    console.log("state ");
  });
});
