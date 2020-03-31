# Webscraping-With-Puppeteer-API
Web scraping is the extraction of data from sites and exporting it into useful formats like Excel, CSV, PDF, APIs. 
A scraper loads code like HTML, CSS and JS from specified sites,extracts the specific data a user wants and returns output in a useful, understandable

Puppeteer is a Node API for headless chrome that scrapes sites.Built by Google Chrome, it enables one to use a browser class without a GUI i.e you can run your scrapers on the terminal
It uses Node's asynch and await feature to return a promise(advanced calback functions).
To build a scraper using Puppeteer you must have node.js and puppeteer installed. These scrapers can be used to take screenshots of sites/pages, generate PDFS, get data across pages like product details, prices or stats.


In this case, I scraped data from a local e-commerce store (Jumia) i.e an image, title and price of a product. 
However, I'm experiencing trouble running this scraper because browsers do not recognize node's server side js syntax. I need a node js bundle compiler that a browser can use e.g browserify. I'm still figuringthis out. 
