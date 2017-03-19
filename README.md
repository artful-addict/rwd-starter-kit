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
* base
* components
* layout
* pages
* units
* vendors

I know it seems like a lot is going on in this one **scss** folder, but look on the bright side! It is unlikely that you'll be making any additional imports from the base of this folder. These sub-folders have been carefully categorized to accommodate for the more commonly used elements, page-types, and components. It is also great to know that if you aren't well-versed in Sass, the existing partials in these folders are saved with the **.scss** extension, which support regular **CSS** and not just the superset of it like LESS and Sass alike. This means you can style your projects in plain CSS if need be.