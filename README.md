# JKL

A light-weight Jekyll v1.0 blog scaffolding that's ready to deploy after setting up one
config. Still under development. Pull requests encouraged && accepted.

# Get Started
```
git clone git@github.com:mrmrs/jkl.git && cd jkl && rake dev
```

That should do the trick. More verbose explanations below.



## Rake tasks

#### rake dev
```
jekyll serve --watch
```

This sets up a jekyll server for dev on port 4000. Site is regenerated everytime you save a file.
NOTE: Changing _config.yml will require a restart of the jekyll server to see changes.
To restart server, go to terminal tab that server is running in then press
```
ctrl+C ⇧  enter
```

#### rake sass
```
sass --watch _sass:css
```

Starts Sass polling to regenerate css on file save.

#### rake minify
```
sass --watch _sass:css --style compressed
```

Starts Sass polling to regenerate css on file save - minifies the output.

## Notes
Example posts are in jkl/_posts/
There are two layouts, one for posts, one for other pages. Layouts are stored, creatively,
in jkl/_layouts/ Folders that begin with an underscore are not copied over to
_site.

# License

The MIT License (MIT)

Copyright (c) 2015 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


