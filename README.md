# Fricandó Rostisseria

1. [Introduction](#1-introduction)
2. [Install](#2-install)
3. [Deploy](#3-deploy)
4. [Use DatoCMS to publish content](#4-use-datocms-to-publish-content)
5. [Manage DatoCMS records](#5-manage-datocms-records)
6. [Resources](#6-resources)
7. [Authors](#7-authors)

## 1. Introduction

**Fricandó Rostisseria** is a handmade / to take away food shop located in Badalona (Barcelona).

The site has been created using [Jekyll](https://jekyllrb.com/), [GitHub](https://github.com/), [Netlify](https://www.netlify.com/) and [DatoCMS](https://www.datocms.com/).

- **Jekyll** is a simple, blog-aware, static site generator.
- **GitHub** is a development platform where you can host and review code.
- **Netlify** is a platform to deploy modern static websites with an automated process.
- **DatoCMS** is an API-based administrative area for your static websites, to let your clients publish new content independently.

## 2. Install

First install [Ruby](https://www.ruby-lang.org/) and [RubyGems](https://rubygems.org/).

Then you can install Jekyll with the following command:

```
$ gem install jekyll bundler
```

Clone GitHub repo:

```
$ git clone git@github.com:yourusername/yoursitename.git
```

Change into your new directory:

```
$ cd yoursitename
```

Use the right Ruby version:

```
$ rvm use // this will use the version specified in `/.ruby-version` file
```

Build the site on the preview server:

```
$ bundle exec jekyll server
```

Now browse to http://localhost:4000

## 3. Deploy

We linked the Netlify site to the GitHub repo to allow an automated deploy on every commit.

Now, everytime you push some change to GitHub `master` branch, Netlify will repeat the build process and deploy a new version of the site, to your custom domain:

http://www.yoursitename.com/

### Deploy manual changes

1. Set this setting under yout "Netlify > Site settings > Build settings > Build command": `jekyll build`.
2. Edit any of your markdown files locally (i.e. "\_comidas/menu-1.md"), commit your changes and push them to `master` branch.
3. This will trigger a Production deploy.

### Deploy DatoCMS changes

1. Set this setting under yout "Netlify > Site settings > Build settings > Build command": `bundle exec dato dump --token=SITE_READONLY_TOKEN && jekyll build`. Replace the `SITE_READ_ONLY_TOKEN` string with the actual token (you can find it your DatoCMS Admin area).
2. Follow [point 4](#4-use-datocms-to-publish-content) and [point 5](#5-manage-datocms-records) below.

### Possible issues

Eventually, Netlify can return a "Deploy failed" message, like this:

```
failed during stage 'building site': Build script returned non-zero exit code: 1
```

Deploy log:

```
ruby_dep-1.5.0 requires ruby version >= 2.2.5, which is incompatible with the current version, ruby 2.1.2p95
Error during gem install
```

Netlify's default Ruby version is `2.1.2` but you can pick a different version by adding a `/.ruby-version` file to your repository. It should contain nothing but one of the below version strings. Netlify currently support the following ruby versions:

```
2.0.0-p247
2.1.2
2.2.1
2.2.3
2.3.0
2.3.1
2.3.3
2.4.0
2.4.1
2.4.2
```

## 4. Use DatoCMS to publish content

The deploy process described above can be fine, but it certainly cannot be done if the person in charge of updating catalog is not a programmer and or is not comfortable with terminal.

To solve this issue, just access your DatoCMS administrative area to populate your content:

https://yoursitename.admin.datocms.com/

## 5. Manage DatoCMS records

If you want to get rid of the Markdown files in the Jekyll project and integrate the data from DatoCMS instead, just use the [dato gem](https://github.com/datocms/ruby-datocms-client/). This gem let's you programmatically read/create/edit/destroy DatoCMS records.

Assuming `gem "dato"` has already been added to your `Gemfile`, install the [dato gem](https://github.com/datocms/ruby-datocms-client/):

```
$ bundle install
```

Assuming there's a `dato.config.rb` file into your project root directory, to fetch the data from DatoCMS, you should dump all the remote data into local files. That would replace the ones in the Jekyll project:

```
$ bundle exec dato dump --token=SITE_READONLY_TOKEN // replace the 'SITE_READ_ONLY_TOKEN' string with the actual token (you can find it your DatoCMS Admin area)
```

Now make sure that the files in the Jekyll project have been replaced.

**BE CAREFUL!** This script will delete all the files in the specified directories.

## 6. Resources

Documentation and tutorials:

- [DatoCMS: How it works](https://www.datocms.com/how-it-works/)
- [DatoCMS with Jekyll: A beginner's guide (tutorial)](https://www.datocms.com/blog/datocms-with-jekyll-a-beginners-guide/)
- [DatoCMS documentation: Integrating with Jekyll](https://docs.datocms.com/jekyll/overview.html)
- [DatoCMS documentation: Deploy your website to Netlify](https://docs.datocms.com/deployment/netlify.html)
- [Netlify documentation: Custom domains](https://www.netlify.com/docs/custom-domains/)

Dashboards:

- [Netlify dashboard](https://app.netlify.com/).
- [DatoCMS dashboard](https://dashboard.datocms.com/)

## 7. Authors

This project has been designed and developed by 🎩 🐧 [Mr. Puffin Studio](http://mrpuffin.studio/)

| <img width="150" height="150" src="https://github.com/nadalsol.png?s=150"> | <img width="150" height="150" src="https://bit.ly/3sUi187"> |
| -------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Nadal Soler](https://github.com/nadalsol)                                 | [Miriam Soto](https://www.linkedin.com/in/miriamsoto)       |
| @nadalsol                                                                  | @coolcolors                                                 |
| UI / Front-end Developer                                                   | UI & Brand Designer                                         |
