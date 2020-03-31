// 1.NAVIGATE TO A WEBPAGE YOU WANT SCRAPE FOR DATA


const puppeteer = required('puppeteer'); //import puppeteer libraries

(async function scrapeProduct(url){
	const browser = await puppeteer.launch();  //launch a browser class
	const page = await browser.newPage();		//starts a new blank page on our browser(instantiate a page)
	await page.goto(url);						// load  url of the webpage you want to scrape

// scraping for first element(product img)
	const [el] = await page.$x('//*[@id="imgs"]/a[1]/img"]') 
	/*the link is an xpath from the element we want to scrape on the web page. Click on the element, inspect
	and copy its Xpath. the link selects the item we inspected and returns an array. 
	we us [el] to pull the first variable of the array through destructuring*/	

	const src = await el.getProperty('src');		// pull src attribute of this element
	const imageURl = await src.jsonvalue();			//outputs a string

// scraping for second element(product title)
	const [el2] = await page.$x('//*[@id="jm"]/main/div[2]/section/div/div[2]/div[1]/div/h1') 
	const txt = await el.getProperty('txt');		
	const title = await txt.jsonvalue();			

// scraping for third element(product price)
	const [el3] = await page.$x('//*[@id="jm"]/main/div[2]/section/div/div[2]/div[2]/div[3]/span') 
	const txt2 = await el.getProperty('txt2');		
	const price = await txt.jsonvalue();			

	console.log({imageURL,title, price});

	

	browser.close();	
})();

scrapeProduct('https://www.jumia.co.ke/asus-x543ua-gq1911t-intel-core-i3-7020u-15.6-4gb-ram-1tb-hdd-star-grey.-27932002.html');
			//i'd probably shorten this url: it's from the webpage nav-link we want to scrape
