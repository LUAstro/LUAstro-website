# Welcome to **[LUAstro.space](https://www.luastro.space)**'s directory!

In this README file, I'll explain the basics of the website's code as of the time of writing. I've split this document into several parts detailing, firstly, an Introduction to GitHub (which the site is, of course, hosted in), followed by an Introduction to Web Development (the basics of HTML, CSS & JavaScript),
how each page is formatted (with templates for new Blog pages), how the header, footer, image, and main container code works, and lastly some of the more technical parts like the Stylesheet's code, the scripts code, and (in my opinion 
the most complicated bit of code on the site) how the search bars work and how to add new pages or images to the results.

If you're a future LUAstro member in charge of maintaining this site, welcome, and don't worry too much. I've purposefully tried to make this document as thorough as possible and you probably won't need to know most of it. I didn't have too much coding experience before 
making this site, so don't worry if you haven't either, and much of this is all very straightforward to get to grips with. As the new person in charge of the site, feel free to make any changes you wish! Just bear in mind that 
another Exec member will take over from you at some point, so try and leave comments in your code, or even update this README in order for them to understand the changes.

> Thank you for reading, and happy coding! - John Ray (LUAstro 25/26 President)

<h1>An Introduction to GitHub</h1>

Hosting a website in GitHub has numerous benefits. Firstly, it's free, which is a massive plus! Secondly, it enables easy changes to be made via the green "Commit changes..." button you'll see when you open pages or by 
creating a new pull request (we'll get into them later), and lastly, it has a decent storage capability and good updating time. However it has its drawbacks too, which you should be made away of.

<h2>Downsides to GitHub hosting</h2>

As you can maybe guess already, GitHub isn't built solely around website hosting. Usually, it's used as a public repository for coding projects (whether that be the code for Siril, or for some niche Minecraft plugin, all 
sorts of code is put on here). As a result, some of the parts of GitHub can actually seem a little counter-intuitive for website development, making things more difficult for people who are inexperienced at web development. 
Another drawback is that free GitHub repositories can be "forked". What this means is that all of this code you see here, including this README file, is technically publically accessible by anyone, and can be "forked" (copied 
whilst sharing visibility settings) by absolutely anyone too. As a result, I'd recommend that you keep the name of this GitHub account confidential (which I didn't really make easy when I just called the account "LUAstro", 
sorry about that). The most major drawback though is that there is no easy UI for web development - you have to write the fundamental CSS, HTML & JavaScript code yourself (or use an AI chatbot to do it). This is a benefit too 
in that you'll hopefully get a neat bit of coding experience from all this, but does make adding in new things, even just a new container type, a bit of a pain. Sites like Wordpress, SquareSpace, Wix, etc. exist that can 
enable developers to just easily add things in without coding at all, even with basic templates available to begin with, so maybe one day the site will be moved to one of them instead - I'll leave that up to future Execs.

<h2>The basics</h2>

So, where to begin then? First of all, navigate to the README.md file in the root directory, and click on the edit button (shown by the green triangle in the image below).

![README_INFO1](/images/README_INFO1.png)

From here, you can enter the edit mode of any page in the directory. You'll see a "Cancel changes" button and a "Commit changes" button in the top right which you can use to ignore or apply changes respectively. To the top-left below the blue rectangle "Website" button in the image, you should see buttons saying "Edit" & "Preview" that allow you to easily see what your changes would look like without leaving the edit mode and before applying them. This is very handy for debugging.

The blue rectangle section is the name of your file, which you can edit by simply typing in the box (you can create a folder by typing /foldername/ before entering your file name). To get a site name in the form "luastro.space/pagename/" you would need to save a HTML file with the name showing up there as "website/pagename/index.html". The first "/" denotes the root directory folder (the main folder in which all the code is saved). For ease of access, I've put all images in a "/images/" folder (so all images must be referenced as "/images/imagename.imagetype"), and all scripts in a "/scripts/" folder (so all JavaScript scripts are referenced as "/scripts/scriptname.js"). This improves navigation of the GitHub page and, in the case of the scripts, actually reduces loading time by a small bit.

Another file you should be aware of is the "404.html" file in the root directory. As the name suggests, this is the page that shows when any non-existent page on the site is visited. If deleted, a default Github 404 page is shown, which isn't ideal for the reason I mentioned in the Drawbacks section earlier.

If you make a small edit to a page and click the "Commit changes..." button, the following box appears:

![README_INFO2](images/README_INFO2.png)

Changing the Commit message or adding a description of the change is not required. As this site isn't an open-source piece of software, it isn't even particularly helpful either, so you can just click "Commit changes" to save your edit.

Finally, in the root directory, or on the most-recently edited page, you'll then see text appear and a circle as shown by the red circle in the first image. This turns into a green tick once the change is finalised. Edits can take anytime from 30s to 5 minutes to save, so don't worry if it takes a while.

<h2>Pull requests and branches</h2>

I'm only going to mention this as a partial aside. As mentioned earlier, GitHub is designed mainly around public coding repositories, which sometimes require larger changes to be made across multiple files simultaneously. To do this, GitHub can enable repositories to have "branches". As the name suggests, branches are essentially offshoots of the main repository. For example, let's say you wanted to change the header image on all the webpages. One solution would be to perform several commits, one on each page, updating each page individually. Another, better solution however is to use branches and create a branch (a copy of the original luastro.space code in its entirety) with each image updated. Then the branch can be "pulled" to the main branch (the actual main repository) to make the header images on each webpage update simultaneously. You can create a branch and pull request by switching to the "pull request" tab at the top of the GitHub page. I don't use them much personally, but if you wish to find out more visit the link below: <br><br> https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests.

> Congrats, you now know how to make edits to GitHub pages!

<h1>An Introdution to Web Development</h1>

There are three main computer languages that are vital to front-end web development: HTML, CSS, & JavaScript. Knowledge of these languages to some degree is vital if you wish to code a website. Here, I'm going to go over the most fundamental basics of each language. If you wish to learn more, I'd highly recommend free tutorials available on [W3schools](https://www.w3schools.com/), [Codecademy](https://www.codecademy.com/), etc. for a more thorough overview.

<h2>HTML</h2>

HTML, or HyperText Markup Language, is the standard markup language for defining the structure and content of a webpage. It is the most important of the three, and, rather convienently, is in my opinion the easiest of the three to learn.

To create a HTML document (for example the homepage of the website), you first need to ensure the correct version of HTML is used, rather than other older versions or different languages like XML. To do this we have a small initialisation tag at the top of any HTML page:

`<!DOCTYPE html>`

which ensures that the most current version is used. We also ensure that the file ends in .html so that the file is the correct type, and use this tag to set the default language as english:

`<html lang="en">`

Additionally, as explained earlier, almost all of the HTML documents in the repository have the form of /pagename/index.html, too. Now, for the basic formatting:

`<head>`
`</head>`

This is the next part of code you'll see on the webpages. Inside the `<head>` tag contains the metadata page code, the flavicon code (the image shown at the top of browsers), the title shown in browsers, any used non-default fonts, and very importantly, code linking the page to the CSS stylesheet. Don't worry, I'll explain all of this in more detail later on. Most HTML tags **must** be ended by typing a `/` in front of their initial names. This is to prevent conflict with other tags, and to accurately contain code to determined sections of the page.

`<body>`
`</body>`

This is the main part of code. Inside the body of the page is all the code for everything shown on the physical page, including any JavaScript scripts. The `<header>`, `<main>` & `<footer>` codes are all nested inside this tag.

`<header>`
`</header>`

This is the code to create a header for the webpage (where the top image, the navigation bar, etc. shows).

`<main>`
`</main>`

This is the tag in which all of the "main" code goes, such as containers, images, etc.

`<footer>`
`</footer>`

This is the code to create a footer for the webpage (similar to the header).

`</html>`

Finally, the html tag **must** be closed for the page to work correctly.

All other parts will be explained in more detail later.

<h2>CSS</h2>

CSS, or "Cascading Style Sheets" is a stylesheet language used to describe the presentation and styling of a webpage. It defines the colours of elements, padding, layout, any stylistic effects, fonts sizes, and much more. There is only one CSS file for the website, named as **styles.css**. It is this stylesheet that every page on the website references off for styling - so any changes you make to it will affect all pages on the site - and has had the code categorised into sections by me for better understanding.

You will not need to create any further CSS files for the website. For simplicity, only the one CSS file is required, which you can feel free to update with new additions or changes.

I will explain how to work CSS code in more detail later on. For now, I'm just going to give a snippet of CSS code and talk you through the basics.

`/*============================
  3. Header & Navigation
============================*/`

Single-line comments are made by inserting `//` before writing on the stylesheet. Here `/* ... */` is used for a multi-line comment. Comments are how you can insert descriptions in code without affecting the code itself. Comments are written in the same way in CSS as in JavaScript, but are written differently in HTML. We'll revisit this in more depth later, in this example this is just how I've defined sections of code in the stylesheet.

`.container {`

Here we initialise the CSS element "container" that is used to create the grey text boxes on the homepage and elsewhere.

`  padding: 20px;
  max-width: 1200px;
  margin: 40px auto;`

Here we define the padding, maximum width, and margins of the container in terms of pixels shown on the page (px). Each line here **must** be ended with a **;**, otherwise later code is not run.

`  --containercolour: rgba(33, 33, 33,0.7);
  background-color: var(--containercolour);
  --textcolour: white;
  color: var(--textcolour);
  --linkcolour: #bbb;`

Here we define the background colour, text colour, and linked-text colour for the container. The `--` before the names denotes the following word as representing a variable. This means that we can actually vary this value later on in a specific .HTML page (e.g. if we wanted the text for one of the containers to be blue we could change the variable `--containercolour`), whilst having the defaults set to a white text colour (given by the word "white"), a light-grey link colour (given using a HEX colour code that denotes the exact shade as `#bbb`), and a partially transparent dark-grey colour (using an RGBA format, where the A = 0.7 represents an opaqueness of 70% in the Alpha channel). I've used various different formats here for each to illustrate the options available, so don't worry if it seems confusing! Variables can have any name you wish (notice the British English "colour" in the variable names), but the properties of elements **must be referenced specifically using keywords** (notice the American English "color" in the actual property names calling it using the British English "colour" would not work). All CSS properties & variables are defined in the format of `Property: ValueOfTheProperty1, ValueOfTheProperty2, etc. ;`.

`  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  text-align: center;
  font-family: Helvetica, sans-serif;`

Here, a subtle shadow is defined in a box-shape around the container using RGBA notation (due to the choice of colour it's practically unnoticeable). The `border-radius` defines the radius of the curved edge to the container, removing any pointy ends off the box to give a smoother look. The text is aligned as center, and the exact font also defined. Fonts may sometimes need to be referenced on the .HTML page files too (usually in the `<head>` section alongside the webpage metadata and title).

`}`

Importantly, the container element is then finalised by another curly bracket.

Further specifics of the CSS code in the Stylesheet file itself will be explained later on.

<h2>JavaScript</h2>

JavaScript, a word that fills most programmers and web developers with fear, is the default programming language for websites. Unlike HTML and CSS, JavaScript is a true programming language, not a markup language, and is used on this site for niche uses like choosing an automatic background on startup or magnifying images once they're clicked on. It is the most tricky of the three to grasp, and I would **strongly** recommend learning it through an online tutorial if you wish to mess around with it. Other programming languages exist, like C, C++, Python, Java, etc. but JavaScript is considered the Web standard. On this site, all the JavaScript files are in the "scripts" folder, and end in ".js".

Below, I explain some of the basics of JavaScript with reference to the [Astro_Background.js](/scripts/Astro_Background.js) script that determines the background image for webpages once they are loaded. This barely scrapes the surface of JavaScript coding - again, online tutorials would explain it much better.

` /*

                       ~ Astronomy Background selector ~
                         ~ randomises on page load ~

                                by John Ray

*/ `

Here, a multi-line comment introduces the file. As mentioned earlier, JavaScript comments are the same as in CSS.

`
  (function() {`

Here, a function is defined without any parameters (parameters are inherent properties of the function, and would usually be inserted inside the ending brackets).
  
  `  const images = [`

Here, an array is defined with the name of "images". An array is an object type that enables a collection of different items in one name. JavaScript is what's known as an "Object-oriented" programming language, with objects like arrays forming the heart of it. More information is best taught by online tutorials from people who know more than me about this kind of thing.

    `  '/images/JRAndromedaRevisited.jpg', // image selected if choice = 0
      '/images/bgRosetteNebulabyFinlay.jpg', // image selected if choice = 1
      '/images/bgOrionNebulabyIanto.jpg', // image selected if choice = 2
      '/images/JRCalNebREPROCESSED.jpg', // image selected if choice = 3
      '/images/bgPleiadesbyOrlando.jpg' // image selected if choice = 4
    ];`
    
Here, the array is filled with a set of 5 images denotes by file names that are in the images folder of the directory. Notice the `//` single-line comments. The array is importantly closed with another square bracket to prevent further code from being mistaken for any further entries. A single `;` is put afterwards.

   ` const choice = images[Math.floor(Math.random() * images.length)];`


Next, a constant variable named "choice" is created. Constant variables cannot be redefined (notice how the array earlier is defined using the `const` keyword too). The keywords `var` or preferably `let` are used to define variables that can be redefined. "choice" is defined further as being an item of the array "images". Array items can be referenced by writing `arrayname[0]` for the first item in an array called "arrayname", or `arrayname[1]` for the second item, etc. so therefore, to make the image chosen random, the value in the square brackets (called the "index" of the array) must be randomised. We use the `Math.random()` function available as a default in JavaScript to do this, which chooses a random number from 0 to 1. We then multiply this number by the length of the array which is defined using a `.length` function assigned to the images array (this length will be 5 for the current array as there are 5 total entries). Lastly, the code would break if we defined "choice" as something like `images[1.36437247432]`; an array index **must** be an integer value. The `Math.floor` function fixes this, and would round the value down to 1, so the second entry (in this case a picture of the Rosette Nebula by Finlay) would be chosen as the background.

 `   document.body.style.setProperty('--page-bg', /url(${choice}));
  })();`

Finally, the following code sets the CSS `--page-bg` variable that represents the page's background as the chosen image using an awkward mix of references in the form of `document.body.style.setProperty(...)`. This variable must be defined as a URL to a specific image, hence the `URL(${choice})` code (which would usually be inside a set of dropticks), where the dollar symbol references the JavaScript variable of "choice". Finally, each line is ended with a `;` and a suitable number and type of brackets.

> Congratulations! Now you know the (extremely fundamental) basics of Web Development!

<h1>Creating or editing a HTML page</h1>

Now you know the basics of Web Development, we're ready to move onto specifics. Every webpage on **[www.luastro.space](https://www.luastro.space)** has the same basic template. Each page has a header LUAstro image, a navigation bar and search bar underneath, some main text, images, or other content, and a footer at the bottom of the page. In this section, I will explain how each part of code works for these sections, before moving onto to how to use this knowledge to create new pages or blog posts in the next section. **This part is recommended**, as it will provide you with a better knowledge of how the site functions, and allow you to make changes without damaging essential parts of page code. However if you just want to make minor editions like creating new blog posts or adding new images to the Astrophotography page, and not create entire new pages, feel free to skip this part. Details of how to easily make minor changes will be explained in a later section.

<h1>The Head & Header</h1>

All pages on the site have a similar Head & Header code. This code defines the title of the page (on the physical page, on tabs, and even in search engine results), the keywords that give the page as a result when typed in the site's search bar, the top LUAstro image and flavicon, the navigation bar, and the search bar. Let's begin!

<h2>Head code</h2>

`<!DOCTYPE html>` <br>
`<html lang="en">`

This code initialises the page as using Modern HTML5, in English.

`<head>` <br>
`  <meta charset="UTF-8" />` <br>
`  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>` <br>
`  <meta name="description" content="Newsletters page - contains all the most recent newsletters by the Society">` <br>
`  <meta name="keywords" content="Newsletters, News, updates, info, latest news, communications, LUAstro">` <br>
`  <title>Newsletters | LUAstro</title>` <br>

This begins the `<head>` code (the rather confusingly-named `<header>` code will be initialised later on), followed by the webpage's specific `<meta>` code. The `<meta>` code is vital for the webpage to work correctly. The first line of `<meta>` code specifies that the page will run using UTF-8 character encoding (which is already the standard) to enable the search bar magnifying glass to load correctly, as well as enabling the use of other emoticons on the page.

The next line ensures that the page is viewed exactly as large as the browser window (again, this is also a standard, but is good for safeguarding).

The third `<meta>` line creates a description for the page. This description appears in search results not only from the site's domestic search bar, but also in universal search engines like Google, Bing, AskJeeves, etc.

The fourth, and final, `<meta>` line defines the "keywords" for the page. This forms [luastro.space's](https://www.luastro.space) entire SEO, or "Search-Engine Optimisation"; each keyword is tied to the page in search results. For example, searching for "latest news" on the site's searchbar will return this page as an entry (as we're using the Newsletters page code as an example here), but also increases the rating of the page to appear when "luastro latest news" is searched for in Google.

> **IMPORTANT: Please ensure to tailor both the description and keywords to each page!**

Additionally, please include **luastro** as a keyword on every page that is added, to improve the overall site's rating in Search Engine results.

The `<title>` code defines the text that shows at the top of a browser tab for the webpage. For consistency, it's best to use the format of "PAGENAME | LUAstro".

`<link rel="preconnect" href="https://fonts.googleapis.com">` <br>
`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` <br>
`<link` <br>
`  href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"` <br>
`  rel="stylesheet"` <br>
`/>` <br>
`  <link rel="stylesheet" href="/styles.css" />` <br>
`  <link rel="icon" href="/images/JR's LUAstro Logo.png" type="png">` <br>
`</head>`

This is the second part of the `<head>` code. Unlike the previous part, this is the same for **ALL** pages, so you can just copy-and-paste this in for any new webpages. The first two lines allow the webpage to use all of the site's default fonts. The first closing `<link/>` specifically loads in the font Source Sans Pro. The second closing `<link/>` links to the website's main CSS stylesheet. This line is essential, without it the page will have no actual format and will display as black HTML code on a white background (in default light mode), without any images, links, or elements. The final closing `<link/>` links the page to the Newer LUAstro logo, for use as a "flavicon". A flavicon is the image displayed on tabs, search engines, or browser favourites to represent a page. Feel free to change this if desired.

Finally, the `<head>` tag is closed.

<h2>Header code</h2>

The confusingly-named `<header>` is where the code for the physical top of the webpage is kept. As it's code that creates a physical display on the page (unlike the `<head>` code which just adds properties to the page), it is inside the `<body>` tag of the main page.

`<body>` <br>
`  <header>` <br>
`    <div class="star-bar"></div>` <br>
`    <h1>Archive of Society Newsletters</h1>` <br>
`    <img class="follow-logo" src="/images/LUAstro_NavBar.png" alt="LUAstro">` <br>

As mentioned earlier, the `<body>` tag is initialised first. This is finalised with a `</body>` tag at the absolute end of all the webpage code.

After this, the `<header>` tag is initialised too. Code for the area where stars can be created when clicking by the "Easter_Egg.js" file is called in the next line. Please include this - it's very fun!

Next, a webpage header is included. This shows up underneath the main LUAstro text in the image, and resizes according to the size of the browser window. Without it, the header image looks a bit off, so try and include something here.

Finally, the header image is inserted. It's best to copy-and-paste this line, again. The `alt="LUAstro"` bit at the end is just an alternative text associated with the image, just so you know if you didn't already. Images are usually called on the website with the `<img>` tag, but occasionally a reference `<href>` tag is used instead like for the flavicon earlier. The header image **must** have the class of `"follow-logo"`, or else it won't fit properly at the top of the page. Images are usually called using the source property of the image file, which is done using the `<src>` tag as shown. You will see this again later for images in the footer, as well as in the code for Blog Posts and for the Astrophotography Gallery.

`<nav>` <br>
`      <ul>`<br>
`        <li><a href="/">Home</a></li>`<br>
`        <li><a href="/astrophotography/">Astrophotography</a></li>`<br>
`        <li><a href="/store/">Store</a></li>`<br>
`        <li><a href="/newsletters/">Newsletters</a></li>`<br>
`        <li><a href="/blog/">Blog</a></li>`<br>
`        <li><a href="/exec/">Exec</a></li>`<br>
`        <li><a href="/aboutus/">About us</a></li>`<br>
`      </ul>`<br>
`    </nav>`

Next, is the code for the Navigation Bar. This is the bit where users can click on links to other pages. It is called using the `<nav>` tag, and contains each link as a member of a HTML list. Lists are called with the Unordered List `<ul>` tag, with each member called by containing the name of the list entry in a list item tag `<li>`.

Importantly, all Navigation Bar entries are links - they link to the appropriate page. Links in HTML are created using Action tags, paired with the reference property with the appropriate link name. As you can see, this is done with `<a href="/PAGENAMEINDIRECTORY/">PAGE NAME ON WEBPAGE</a>` and is done in the same format for links in all HTML text.

As you should have guessed by now, the `<ul>` and `<nav>` tags are then closed, in that respective order.

` <form id="siteSearchForm"` <br>
`      class="site-search-form"`<br>
`      action="/search/"`<br>
`      method="get">`<br>
`    <input type="text"`<br>
`         id="siteSearchInput"`<br>
`         name="q"`<br>
`         placeholder="Search the site…"`<br>
`         aria-label="Site search"/>`<br>
`    <button type="submit">🔍</button>`<br>
`    </form>`<br>
`  </header>`<br>

The last part of the `<header>` code is for the Search Bar. This code is complicated, and the Search Bar itself actually uses an entirely different coding language called PHP to function. Thankfully, all you need to do is copy-and-paste this code, so no worries there. The Search Bar uses a `<form>` tag to allow user-input, with the corresponding `action="/search/"` which redirects the user to the `/search/index.html` page. A search page specific to the query is then created using the corresponding query request (represented by a letter q), to give the user the correct results. A `<button>` tag is used to create a physical search button too, and the `<form>` and `<header>` tags are then closed. The Search Bar code will explained in greater detail later on.

<h1>Main code</h1>

Text boxes, images, and most general page content is contained inside `<main>` tags. Here, I will explain all the different types of containers you might see on pages, how to use them, and how they function.

