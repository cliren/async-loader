import $script from 'scriptjs/dist/script';
import Q from 'kew/kew';

export function loadScript(moduleName, path) {

  let successDefer = Q.defer();

  // injectedModule - for testing only
  $script.get(path, (injectedModule) => {
    successDefer.resolve(injectedModule || window[moduleName])
  });

  return successDefer;
}