/*

                       ~ Astro' Background selector ~
                         ~ randomises on page load ~

                                by John Ray

 This code takes a basic JS array of images, rolls an RNG (from 0 to 1),
       multiplies the result of the RNG by the length of the array
 floors this result (rounds it to the nearest integer), assigns a constant
   "choice" to be this integer, then selects the image in the array that
          is that nth value in the array to be the background.
          
  Feel free to add in more images if desired, it should not break the code.

 
 */

  (function() {
    const images = [
      '/images/JRAndromedaRevisited.jpg', // image selected if choice = 1
      '/images/bgRosetteNebulabyFinlay.jpg', // image selected if choice = 2
      '/images/bgOrionNebulabyIanto.jpg', // image selected if choice = 3
      '/images/JRCalNebREPROCESSED.jpg', // image selected if choice = 4
      '/images/bgPleiadesbyOrlando.jpg' // image selected if choice = 5
    ];
    const choice = images[Math.floor(Math.random() * images.length)];
    document.body.style.setProperty('--page-bg', `url(${choice})`);
  })();
