# Welcome to **[LUAstro.space](https://www.luastro.space)**'s directory!

In this README file, I'll explain the basics of the website's code as of the time of writing. I've split this document into several parts detailing, firstly, how to use GitHub (which the site is, of course, hosted in), 
how each page is formatted (with templates for new Blog pages), how the header, footer, image, and main container code works, and lastly some of the more technical parts like the Stylesheet's code, the scripts code, and (in my opinion 
the most complicated bit of code on the site) how the search bars work and how to add new pages or images to the results.

If you're a future LUAstro member in charge of maintaining this site, welcome, and don't worry too much. I've purposefully tried to make this document as thorough as possible and you probably won't need to know most of it. I didn't have too much coding experience before 
making this site, so don't worry if you haven't either, and much of this is all very straightforward to get to grips with. As the new person in charge of the site, feel free to make any changes you wish! Just bear in mind that 
another Exec member will take over from you at some point, so try and leave comments in your code, or even update this README in order for them to understand the changes.

> Thank you for reading, and happy coding! - John Ray (LUAstro 25/26 President)

<h1>GitHub, an Introduction</h1>

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

<h1>Web development, an Introdution</h1>

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

JavaScript, a word that fills most programmers and web developers with fear, is the default programming language for websites. Unlike HTML and CSS, JavaScript is a true programming language, not a markup language, and is used on this site for niche uses like choosing an automatic background on startup or magnifying images once they're clicked on. It is the most tricky of the three to grasp, and I would **strongly** recommend learning it through an online tutorial if you wish to mess around with it. Other programming languages exist, like C, C++, Python, Java, etc. but JavaScript is considered the Web standard. On this site, all the JavaScript files are in the "scripts" folder, and end in ".js". I'll explain some example JavaScript code below.

` /*

                       ~ Astronomy Background selector ~
                         ~ randomises on page load ~

                                by John Ray

*/ `

As mentioned earlier, JavaScript comments are the same as in CSS.

`
  (function() {`

Here a function is defined without any parameters (parameters are inherent properties of the function, and would usually be inserted inside the ending brackets).
  
  `  const images = [`

Here an array is defined with the name of "images". An array is an object type that enables a collection of different items in one name. JavaScript is what's known as an "Object-oriented" programming language, with objects like arrays forming the heart of it. More information is best taught by online tutorials from people who know more than me about this kind of thing.

    `  '/images/JRAndromedaRevisited.jpg', // image selected if choice = 0
      '/images/bgRosetteNebulabyFinlay.jpg', // image selected if choice = 1
      '/images/bgOrionNebulabyIanto.jpg', // image selected if choice = 2
      '/images/JRCalNebREPROCESSED.jpg', // image selected if choice = 3
      '/images/bgPleiadesbyOrlando.jpg' // image selected if choice = 4
    ];
Here the array is filled with a set of 5 images denotes by file names that are in the images folder of the directory. Notice the `//` single-line comments. The array is importantly closed with another square bracket to prevent further code from being mistaken for any further entries. A single `;` is put afterwards.

   ` const choice = images[Math.floor(Math.random() * images.length)];`


Next, a constant variable named "choice" is created. Constant variables cannot be redefined (notice how the array earlier is defined using the `const` keyword too). The keywords `var` or preferably `let` are used to define variables that can be redefined. "choice" is defined further as being an item of the array "images". Array items can be referenced by writing `arrayname[0]` for the first item in an array called "arrayname", or `arrayname[1]` for the second item, etc. so therefore, to make the image chosen random, the value in the square brackets (called the "index" of the array) must be randomised. We use the `Math.random()` function available as a default in JavaScript to do this, which chooses a random number from 0 to 1. We then multiply this number by the length of the array which is defined using a `.length` function assigned to the images array (this length will be 5 for the current array as there are 5 total entries). Lastly, the code would break if we defined "choice" as something like `images[1.36437247432]`; an array index **must** be an integer value. The `Math.floor` function fixes this, and would round the value down to 1, so the second entry (in this case a picture of the Rosette Nebula by Finlay) would be chosen as the background.

 `   document.body.style.setProperty('--page-bg', /url(${choice}));
  })();`

Finally, the following code sets the CSS `--page-bg` variable that represents the page's background as the chosen image using an awkward mix of references in the form of `document.body.style.setProperty(...)`. This variable must be defined as a URL to a specific image, hence the `URL(${choice})` code (which would usually be inside a set of dropticks), where the dollar symbol references the JavaScript variable of "choice". Finally, each line is ended with a `;` and a suitable number and type of brackets.
