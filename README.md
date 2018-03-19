#### Adapted from [React Slignshot](https://github.com/coryhouse/react-slingshot)

# Get Started

1. **Initial Machine Setup**

   First time running the starter kit? Then complete the [Initial Machine Setup](#initial-machine-setup).

2. **Clone the project**

   `git clone https://github.com/coryhouse/react-slingshot.git`.

3. **Run the setup script**

   `npm run setup`

4. **Run the example app**

   `npm start -s`

   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

5. **Having issues?** See [Having Issues?](#having-issues-try-these-things-first).

## Initial Machine Setup

1. **Install [Node 4.0.0 or greater](https://nodejs.org)**

   (5.0 or greater is recommended for optimal build performance)
   Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.

   ### On Linux

   * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

     `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

   ### On Windows

   * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
   * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.

     [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.

     If you already have Visual Studio installed:
     Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
     The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

---

## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Or install [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).
8. Install watchman with `brew install watchman` if you are having the following error after an initial `npm start -s`:

   ```bash
   2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
   2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
   events.js:160
         throw er; // Unhandled 'error' event
         ^

   Error: Error watching file for changes: EMFILE
       at exports._errnoException (util.js:1022:11)
       at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
   ```

9. Tip: Things to check if you get an `npm run lint` error or build error:

   * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

     1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`
     1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

     > Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.

   * Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

10. Rebuild node-sass with `npm rebuild node-sass` if you are having and error like `Node Sass does not yet support your current environment on macOS XXX` after an initial `npm start -s`.

---

## Questions?

Check out the [FAQ](./docs/FAQ.md)
