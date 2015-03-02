import AsyncLoader from '../src/async-loader';
import * as scriptLoader from '../src/script-loader';

describe("AsyncLoader", function() {
  let load;
  beforeEach(function() {
    load = function(moduleName, path) {
      AsyncLoader.load(moduleName, path);
      expect(scriptLoader.loadScript).toHaveBeenCalledWith(moduleName, path);
    };
    spyOn(scriptLoader, 'loadScript');
  });

  it('load a remote script', function() {
    load('foo', 'http://foo.com/foo.js');
  });

  it('load a relative script', function() {
    load('foo', '../foo.js');
  });

});
