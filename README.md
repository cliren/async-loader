# Async Loader

A light weight Asynchronous module loader to load JavaScript modules.


# Dependencies

- none

# Getting Started

```
npm install async-loader --save-dev
```

# API

<a name="AsyncLoader..load"></a>
##AsyncLoader~load(moduleName, path)
Returns a promise

**Params**

- moduleName `String` - name of the exported source module loaded by the path script
- path `String` - relative or absolute path of the script to be loaded

**Example**

```html
<script src="node_modules/dist/async-loader.min.js"></script>

  <script>

      document.addEventListener('DOMContentLoaded', function() {
          AsyncLoader.load('AsyncLoader', 'node_modules/dist/async-loader.js').then(function(Loader) {
              //loaded module
              console.log(Loader);
          });
      });

  </script>
```


# Build

Default gulp tasks runs a sequence of tasks to clean, lint, test and build

```sh
gulp
```