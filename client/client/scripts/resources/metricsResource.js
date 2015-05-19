define([], function() {
  'use strict';

  return [ '$resource', 'Uri', function ($resource, Uri) {

    return $resource(Uri.appUri('engine://engine/:engine/metrics/:name/:action'), { name: '@name', action: '@action' }, {
      sum : {method:'GET', params: { 'action' : 'sum'}},
    });
  }];
});
