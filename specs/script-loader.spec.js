import {loadScript} from '../src/script-loader';
import $script from 'scriptjs/dist/script';

describe("ScriptLoader", function() {

  beforeEach(function() {
    spyOn($script, 'get');
  });


  it("loadScript", function(done) {
    var promiseResponse = {};
    var promiseCallback = jasmine.createSpy();

    var resourceURL = 'http://foo.com/foo';

    var promise = loadScript('foo', resourceURL);


    var scriptCall = $script.get.calls.argsFor(0);

    var actualPath = scriptCall[0];
    var scriptCallback = scriptCall[1];

    scriptCallback(promiseResponse);

    done();

    promise.then(promiseCallback);
    expect(actualPath).toBe(resourceURL);
    expect(promiseCallback).toHaveBeenCalledWith(promiseResponse);

  });
});