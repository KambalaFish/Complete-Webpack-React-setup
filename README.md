# Webpack React setup

## Initial setup for React app development that will help you to get started without create-react-app.

### Installation
Just fork the repository and hit
```sh
npm i
```
in command line and you are good to go!

### The webpack starter pack has support for:

- <mark>jsx, tsx (**React**), js, ts code</mark>  
    The code is compiled through these loaders in the following order: 
    - **typescript**  
    On this stage webpack checks for type errors and trasnpiles typescript code to javascript code.
    - **babel**  
    [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) presets are set. 
    On this stage webpack transpiles new js, jsx syntax to older syntax and adds pollyfills (from core-js) according to [.browserslistrc](https://github.com/browserslist/browserslist) file settings.
\
&nbsp;
- <mark>Styles</mark>
    - **CSS**
    - [**SASS/SCSS**](https://sass-lang.com/)
    - [**CSS Modules**](https://github.com/css-modules/css-modules)  
    CSS Modules support is enabled for scss/sass files as well as for css. All you need to do is to name your file as **name.module.scss** or **name.module.css**.  CSS Modules automatically generates unique name for your css class, so you don't need to worry about class name collisions. If you want to learn details of css modules configuration in webpack follow [the link](https://webpack.js.org/loaders/css-loader/#modules).
    Here is how you can import your class names from module files (#code-spnippet-1): 

    ```typescript
    import React from 'react';
    import { container } from '@styles/layout/containers.module.scss';
    import { rotator, title } from '@styles/pages/home.module.scss';
    import reactIcon from '@assets/react.svg';

    const Home = () => {
    return (
        <div className={container}>
        <img src={reactIcon} className={rotator} alt='react' />
        <h1 className={title}>Webpacked React starter</h1>
        </div>
    );
    };
    ```

    - [**PostCSS**](https://postcss.org/)  
    [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) plugin is set to support auto vendor prefixing depending on [.browserslistrc](https://github.com/browserslist/browserslist) values. Also the plugin is configured to support new css features starting from stage 1. For features available since different stages check [this](https://cssdb.org/) out.
\
&nbsp;
- <mark>Images</mark>  
    Support for following image types import is enabled: png, svg, jpg, jpeg, gif. Example of image import is presented on #code-spnippet-1.
    According to webpack documentation: 
    When you `import reactIcon from '@assets/react.svg'`, that image will be processed and added to your [output](https://webpack.js.org/configuration/output) directory and the reactIcon variable will contain the final url of that image after processing. For more details on image import you can [check webpack documentation](https://webpack.js.org/guides/asset-management/#loading-images)
\
&nbsp;
- <mark>Fonts</mark>  
    Support for following image types import is enabled: png, svg, jpg, jpeg, gif.
    >With the loader configured and fonts in place, you can incorporate them via an @font-face declaration. The local url(...) directive will be picked up by webpack, as it was with the image:
```css
@font-face {
  font-family: Acme;
  font-weight: 400;
  font-style: normal;
  src: url("./Acme-Regular.ttf") format("truetype");
}
.someClass {
  color: blue;
  font-family: Acme;
}
```
\
&nbsp;
- <mark>Linters and code formatters</mark>  
    - **ESLint**
    ESLint is a tool that helps to find problematic patterns js/ts code.
    - **Prettier**
    Prettier helps to format your js/ts code, so all the code is going to look in one consistent style.
    - **Stylelint**
    Helps to find errors and to enforce formatting conventions in your css/scss/sass code.
\
&nbsp;
- <mark>Pre-commit job</mark>  
    Linting the whole project before commit takes a longer time and doesn't make much sense as we want to commit only staged files (which will go to our repository). [**lint-staged**](https://github.com/okonet/lint-staged) runs our linters mentioned above before commit only against git files that are staged, so it takes a shorter time. And ofcourse the main goal is being achived, we can be sure that only linted and formatted code goes to our repository. Linting configurations for lint-staged are stored in our .lintstagedrc.json file. Rre-commit git hook is set with [**Husky**](https://github.com/typicode/husky). You don't need to worry about configuring lint-staged and husky, everything is already configured out of the box by myself.

### Available scripts

To run webpack in development mode with [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) use: 
```sh
npm run dev
```

To run webpack in production mode with all optimizations use:

```sh
npm run build
```

To visualize content of your bundle, to learn which parts of it make up most of its size, to find chunks that got there by mistake use bundle analyzer:
```sh
npm run analyze
```

To lint js/ts/jsx/tsx code use: 
```sh
npm run lintJs
```

To lint and format css/scss/sass code use:
```sh
npm run lintStyles
```

To format js/ts/jsx/tsx code use:
```sh
npm run format
```

### Installed webpack plugins

The following plugins are installed:

| Plugin                                                                                | Description                                                                                                                                                                                             |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)              | The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation |
| [EslintWebpackPlugin](https://webpack.js.org/plugins/eslint-webpack-plugin)           | This plugin uses eslint to find and fix problems in your JavaScript code. It runs eslint checks against your code during build/development                                                              |
| [StylelintWebpackPlugin](https://webpack.js.org/plugins/stylelint-webpack-plugin)     | This plugin uses stylelint that helps you avoid errors and enforce conventions in your styles. It lints your css/scss/sass code during build/development                                                |
| [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin)        | This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.                                                |
 | [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin)|This plugin uses cssnano to optimize and minify your CSS.|
| [CompressionWebpackPlugin](https://webpack.js.org/plugins/compression-webpack-plugin) | Prepare compressed versions of assets to serve them with Content-Encoding. Check example of nginx server that serves compressed files below.                                                            |
| [BundleAnalyzerPlugin](https://github.com/webpack-contrib/webpack-bundle-analyzer)    | A plugin and CLI utility that represents bundle content as a convenient interactive zoomable treemap.                                                                                                   |


#### Example of nginx server config for compressed files
```
server {
        listen 80;
        listen [::]:80;

        root /var/www/webpacked/html;
        index index.html index.htm index.nginx-debian.html;

        server_name localhost www.localhost;

	gzip on;
	gzip_static on;    
	gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
	gzip_proxied  any;
	gzip_vary on;
	gzip_comp_level 9;
	gzip_buffers 16 8k;
	gzip_http_version 1.1;

        location / {
		#try_files $uri $uri/ =404;
		if (!-e $request_filename){
			rewrite ^(.*)$ /index.html break;
		}
        }
}
```

### Tree shaking

[Tree shaking](https://webpack.js.org/guides/tree-shaking/) is a term commonly used in the JavaScript context for dead-code elimination. That mechanism allows to decrease size of your bundle.

>You can imagine your application as a tree. The source code and libraries you actually use represent the green, living leaves of the tree. Dead code represents the brown, dead leaves of the tree that are consumed by autumn. In order to get rid of the dead leaves, you have to shake the tree, causing them to fall.

In order to take advantage of tree shaking, you must...

>- **Use ES2015 module syntax (i.e. import and export).**  
>- Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of the popular Babel preset @babel/preset-env - *I already configured @babel/preset-env to transform to es modules, you don't need to worry here*).  
>- **Add a "sideEffects" property to your project's package.json file.**
>>A "side effect" is defined as code that performs a special behavior when imported, other than exposing one or more exports. An example of this are polyfills, which affect the global scope and usually do not provide an export.
>- Use the production mode configuration option to enable various optimizations including minification and tree shaking.  
>*This basically means use:* ``npm run build`` *in our case*.


# Hit star if you found it helpful ;)