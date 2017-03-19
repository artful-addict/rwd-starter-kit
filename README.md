# RWD Starter-Kit

This is just a simple website starter kit I created for my team at CEDR Systems to help out with the workflow of starting a new website project. It is also for best practice with developing a healthy medium between us designers and programmers as multiple people have their hands on any one project at a time.

Version 1.0
This version of my RWD Starter Kit includes the following:
* Bootstrap 3
* GulpJS
* Node Package Manager
* Sass

## Get Sassy with Sass

While you can still setup the Sass folder any which way you'd like, there is no need in configuring where your Sass files are located and where they'll need to be compiled to. I did the light-work of organizing the Sass folders, partials, and manifestation documents.

### Get Familiar with the File/Folder Structure
Inside of the **scss** folder, the partials are broken up into six categories, and a Sass file called **manifest.scss**. The **manifest** document imports a partial named **_module.scss** from each category-folder. The **module** partials are also manifest files that pull from all the partials within the cetgory folder, to then be exported to the main **manifest.scss** document in the base of the **scss** folder.
#### Categories:
* base/
* components/
* layout/
* pages/
* units/
* vendors/

I know it seems like a lot is going on in this one **scss** folder, but look on the bright side! It is unlikely that you'll be making any additional imports from the base of this folder. These sub-folders have been carefully categorized to accommodate for the more commonly used elements, page-types, and components. It is also great to know that if you aren't well-versed in Sass, the existing partials in these folders are saved with the **.scss** extension, which support regular **CSS** and not just the superset of it like LESS and Sass alike. This means you can style your projects in plain CSS if need be.

## Gulp

Gulp is the task manager used to run tasks like compiling Sass, concatinating Javascript files, or even minifying CSS, JS, and images. It helps to know a few things about the command prompt, however. (__Note:__ I'll update the minor instructions for Windows users with command prompt when the time comes)

## Command Line (for Mac)

`ls` - lists all the files and folders in the directory you're currently in. It is best practice to type `ls` while in your terminal so you can see which folder you're in.

`cd` - used to change the directory (or folder) from the one you're currently in. Best practiced with `ls`.

`mkdir` - used to make a directory (or folder).

`rm -r` - used to remove a directory.

`rm -rf` - used to remove a file within a directory.

`touch` - used to create a file.

`../` - used to back out of a particular directory into its parent-directory.

`which` used with `name of software` - used to find out where a dependency is installed on your local drive


### Combining the above actions in command prompt
#### Making a new directory
You're working on a new project, and open the built-in terminal at the bottom of your text editor. Typically, you'd be within the base directory (or base folder) of your project. Type `ls` and hit `enter` on your keyboard. A list of files and folders should appear to give you clearer indication of which directory you're in. You then want to add a few files and folders to your base-directory to place your **CSS**, **JS**, and **web fonts**; but first, you must make a **src** directory to place them in (or name it whatever you want):
`mkdir src` then press `enter` on your keyboard
What's awesome about command prompt is you can create multiple files and folders in one whole line of command; first starting with the action you want to commit, and followed by the values of what you want to do… in this case, naming conventions of files and folders. Now you'll make the sub-directories of the **src** folder you just created:
`mkdir src/css src/js src/img` then press `enter` on your keyboard
With the above code, you have entered, you should now see three folders within the **src** folder we initially created from our base-directory. Now for the files. If you're still in your base-directory (and to find out if so, type `ls` and `enter` on the keyboard to get a list of folders and files), let's create the files:
`touch src/css/styles.css src/js/main.js` and press `enter` on your keyboard

Great! You've successfully navigated and created some folders and files within your base-directory. Let's try installing dev dependencies now. Here are a few more codes you should know:

`-g` and `--global` - a flag used for installing software globally to your computer; not just as a dev dependency within a prject. This should be placed before the name of some software you're installing if used globally.

Example: `package-manager-name install -g software-or-dependency-name`

`--save-dev` - a flag used to determine if some software installation is a dev dependency. This is typically saved in the modules folder of whichever package manager you're using for your project (example: Bower or NPM).

`-v` - a more conventional code for checking the version of some software. Also a good indication if whether or not the software is installed on your computer to begin with.

`npm` - the prefix used for initiating Node Package Manager. This should be initiated with `npm init` when setting up a project with tasks ran with Gulp or any other node-based software. (NPM is **not** NodeJS)

`bower` - the prefix used for initiating Bower.

#### Installing a Dev Dependency
In your terminal, let's install Gulp. Before we're able to do that, let's create our Gulp file, **gulpfile.js** in the base of our directory, NodeJS, NPM, and then we'll install Gulp both globally, and as a dev dependency:
Check to see if NodeJS is installed:

`node -v` Press `enter` on your keyboard. If it is installed, a version number will appear, otherwise you'll likely be prompted that NodeJS is **not** installed, and will be given brief suggestions on how to install it via your Terminal App. Now that we have NodeJS installed, let's initiate it.

`npm init` press `enter` on your keyboard. You'll notice a node_modules folder appear in your folder tree. This is where all your dev dependencies will go. Most importantly, a package.json file should now appear in the base of your directory. This is where we can see what dependencies are actually being used. Next, install Gulp globally first, and then as a dev dependency:

`npm install -g gulp` press `enter` on your keyboard. For some Mac users, you may have to use the `sudo` prefix before `npm install -g gulp` for admin access. Now as a dev dependency:

`npm install gulp --save-dev` now press `enter` on your keyboard.

Notice that we used the two flags `-g` and `--save-dev` for installing Gulp on both your machine and as a dev dependency. You'll find yourself using these flags quite often - for some dev dependencies rely on the software being installed globally as well. Depending on what text editing software you're using (VSCode, SublimeText, Atom, etc.), you may have to refresh your tree, if the option is available. Otherwise, look inside the **node_modules** folder for the gulp folder to know it installed there. Next, check the package.json file and search for `"dependencies:"`. There should be `gulp` with a version number to the right of it. Using command prompt are some best practices in adding new dev dependencies to your RWD Starter Kit. Enjoy!