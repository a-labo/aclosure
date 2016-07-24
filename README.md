aclosure
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/a-labo/aclosure
[bd_travis_url]: http://travis-ci.org/a-labo/aclosure
[bd_travis_shield_url]: http://img.shields.io/travis/a-labo/aclosure.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/a-labo/aclosure
[bd_travis_com_shield_url]: https://api.travis-ci.com/a-labo/aclosure.svg?token=
[bd_license_url]: https://github.com/a-labo/aclosure/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/a-labo/aclosure
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/a-labo/aclosure.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/a-labo/aclosure.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/a-labo/aclosure
[bd_gemnasium_shield_url]: https://gemnasium.com/a-labo/aclosure.svg
[bd_npm_url]: http://www.npmjs.org/package/aclosure
[bd_npm_shield_url]: http://img.shields.io/npm/v/aclosure.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Closure compiler wrapper

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install aclosure --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const aclosure = require('aclosure')
const co = require('co')

co(function * () {
  // Compile script with closure compiler
  yield aclosure(
    'public/bundle.js',
    'public/bundle.cc.js'
  )
}).catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/a-labo/aclosure/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClosureCompiler][closure_compiler_url]

[closure_compiler_url]: https://github.com/dcodeIO/ClosureCompiler.js#readme

<!-- Links End -->
