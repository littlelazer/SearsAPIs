function SearsAPI ( initObj ) {
	var apiKey = initObj.apiKey,
			searsAppID = initObj.appID,
			searsAuthID = initObj.authID,
			apiURL = 'http://api.developer.sears.com/v1/',
			sApiURL = 'https://webservices.sears.com/shcapi/',
			webApiURL = 'http://webservices.sears.com/shcapi/',
			clientSessionKey,
	
	// Error Responses		
			
	// Helper functions		
	saveCSKey = function ( key ) {
		clientSessionKey = key;
	},
	checkForArguments = function ( ) {
		
	},

	/*****************************/
	/* Store & Product Functions */
	/*****************************/
	
	// Product Search API
	this.productSearch = function ( prodArgs ) {
		
	};
	
	// Store Locator API
	this.storeLocator = function ( storeArgs ) {
		var serviceURL = apiURL + 'StoreLocator',
				options = {
					cache = false;
					store : 'Sears',
					contentType : 'json',
					dataType : 'json'
				};
		
		$.extend(options, storeArgs);

		return $.ajax({
			cache: storeArgs.cache,
			url:		serviceURL,
			dataType:	storeArgs.dataType,
			data : {
				store : storeArgs.store,
				searchType : storeArgs.searchType,
				sortFlag : storeArgs.sortFlag,
				zipCode : storeArgs.zipCode,
				apikey : storeArgs.apiKey,
				contentType : storeArgs.contentType
			}
		});
	};
	
	// Pass-through API 
	this.passThrough = function ( ) {
		
	};
	
	// Compare Products API
	this.compareProducts = function ( ) {
		
	};
	
	// Main-in Rebate API
	this.mailRebate = function ( ) {
		
	};
	
	// Top Sellers API 
	this.topSellers = function ( ) {
		
	};
	
	// Real-time Inventory API
	this.realInventory = function ( ) {
		
	};
	
	// Sales & Deals API
	this.salesDeals = function ( ) {
		
	};
	
	// Product Details API
	this.productDetails = function ( ) {
	
	};
	
	// Check Product Availability for Delivery
	this.checkDeliveryAvailability = function ( ) {
		
	};
	
	
	/***************************/
	/* Gift Registry Functions */
	/***************************/
	
	// Get Gift Registry Event Ids
	this.giftRegistryEvents = function ( ) {
		
	};
	
	// Create Gift Regustry
	this.createRegistry = function ( ) {
		
	};
	
	// Gift Registry Search
	this.searchRegistries = function ( ) {
		
	};
	
	// Add Items to Gift Registry
	this.addItemsToRegistry = function ( ) {
		
	};
	
	// Add to Cart from Gift Registry
	this.addCartFromRegistry = function ( ) {
		
	};
	
	// Delete Gift Registry Item
	this.deleteRegistryItem = function ( ) {
		
	};
	
	// View Gift Registry Items
	this.viewRegistry = function ( ) {
		
	};
	
	// Update Registry Item Info
	this.updateRegistryItemInfo = function ( ) {
		
	};
	
	// View ALl Gift Registries
	this.viewRegistries = function ( ) {
		
	};
	
	// Delete a Gift Registry
	this.deleteRegistry = function ( ) {
		
	};
	
	// Email a Gift Registry
	this.emailRegistry = function ( ) {
		
	};
	
	// Edit a Gift Registry
	this.editRegistry = function ( ) {
		
	};
	
	// Record a Gift Registry Purchase
	this.recordRegistryPurchase = function ( ) {
		
	};
	
	
	
	/**************************/
	/* User Profile Functions */
	/**************************/
	
	// ToDo: Figure out what the AutoSignOn API is/does
	
	
	// User Registration API
	this.register = function ( ) {
		
	}
	
	// Login Service API
	this.login = function ( userInfo ) {
		var serviceURL = sApiURL + 'Login';
				
		return $.ajax({
			cache: false,
			type: 'POST',
			url:		serviceURL,
			data: {
				catalogId : '12605',
				loginId : userInfo.username,
				logonPassword : userInfo.password,
				store : 'Sears',
				appID : searsAppID,
				authID : searsAuthID
			},
			dataType:	'xml'
		});
	};
	
	// Logout Service API
	this.logout = function ( ) {
		
	};
	
	// View Gift Card API
	this.viewGiftCard = function ( ) {
		
	};
	
	// Add Gift Card API
	this.addGiftCard = function ( ) {
		
	};
	
	// Add to Cart API
	this.addToCart = function ( ) {
		
	};
	
	// Delete from Cart API
	this.deleteFromCart = function ( ) {
		
	};
	
	// Update Item Quantity
	this.updateQuantity = function ( ) {
		
	};
	
	// View Cart
	this.viewCart = function ( ) {
		
	};
	
	// Empty Cart
	this.emptyCart = function ( ) {
		
	};
	
	// Checkout Redirect
	this.checkoutredirect = function ( ) {
		
	};
	
	// Installation Continue
	this.installContinue = function ( ) {
		
	};
	
	// Create Universal List
	this.createList = function ( ) {
		
	};
	
	// View Universal List 
	this.viewList = function ( ) {
		
	};
	
	// Add Item to Universal List
	this.addToList = function ( ) {
		
	};
	
	// Remove Item from Universal List
	this.removeFromList = function ( ) {
		
	};
	
	// View All Universal Lists
	this.viewLists = function ( ) {
		
	};
	
	// Delete Universal List
	this.deleteList = function ( ) {
		
	};
	
	// Copy Item from One Universal List to Another
	this.copyListItem = function ( ) {
		
	};
	
	// Follow AdYourWay
	this.followAdYourWay = function ( ) {
		
	};
	
	// View AdYourWay
	this.viewAdYourWay = function ( ) {
		
	};
	
	// Unfollow AdYourWay
	this.unfollowAdYourWay = function ( ) {
		
	};
	
	// Save for Later to Cart
	this.saveLaterToCart = function ( ) {
		
	};
	
	// Get My Vehicle Info	
	this.getVehiclesInfo = function ( ) {
		var serviceURL = sApiURL + 'GetMyVehicleInfo';
		
		return $.ajax({
			cache : false,
			type : 'POST',
			url : serviceURL,
			data : {
				store : 'Sears',
				catalogId : '12605',
				langId : '-1',
				appID : searsAppID,
				authID : searsAuthID,
				sessionKey : clientSessionKey
			},
			dataType : 'xml'
		});
	};

	// Forgot Password
	this.forgotPassword = function ( ) {
		
	};
	

	/**************************/
	/* Car Fitment Functions  */
	/**************************/
	
	// Get Fitment Products API
	this.getFitmentProducts = function ( ) {
		
	};
	
	// Get Fitment Data for Year
	this.getFitmentYear = function ( ) {
		var serviceURL = webApiURL + 'GetFitMentData'
		
		return $.ajax({
			url : serviceURL,
			data : { 
				requestedField : 'year',
				appID : searsAppID,
				authID : searsAuthID,
				store : 'Sears',
				catalogId : '12605',
				langId : '-1'
			}
		});
	};
	
	// Get Fitment Data for Make
	this.getFitmentMake = function ( carYear ) {
		var serviceURL = webApiURL + 'GetFitMentData'
		
		return $.ajax({
			url : serviceURL,
			data : { 
				requestedField : 'make',
				year : carYear,
				appID : searsAppID,
				authID : searsAuthID,
				store : 'Sears',
				catalogId : '12605',
				langId : '-1'
			}
		});
	};
	
	// Get Fitment Data for Model
	this.getFitmentModel = function ( carYear, carMake ) {
		var serviceURL = webApiURL + 'GetFitMentData'
		
		return $.ajax({
			url : serviceURL,
			data : { 
				requestedField : 'model',
				make : carMake,
				year : carYear,
				appID : searsAppID,
				authID : searsAuthID,
				store : 'Sears',
				catalogId : '12605',
				langId : '-1'
			}
		});
	};
	
	// Get Fitment Data for Engine Size
	this.getFitmentEngine = function ( ) {
		
	};
	
	// Get Fitment Vehicle for a Product ID
	this.getVehicleForId = function ( ) {
		
	};


	/**********************************/
	/* MyGofer3 & Craftsman Functions */
	/**********************************/
	
	// Reset Password
	this.resetPassword = function ( ) {
		
	};
	
	// Order Details
	this.orderDetails = function ( ) {
		
	};
	
	/**********************************/
	/* E-Circular Weekly Ad Functions */
	/**********************************/
	
	// Not sure if they mean "Cart" when the say "List" here
	
	// View Weekly Ad Categories
	this.weeklyAdListCategories = function ( ) {
		
	};
	
	// View Weekly Ad Departments
	this.weeklyAdDepartment = function ( ) {
		
	};
	
	// Add Weekly Ad Item to List
	this.weeklyAdToList = function ( ) {
		
	};
	
	// View Weekly Ad Items in List
	this.weeklyAdInList = function ( ) {
		
	};
	
	// Delete Weekly Ad Item from List
	this.weeklyAdDeleteFromList = function ( ) {
		
	};
	
	// Email the Weekly Ad List
	this.weeklyAdEmailList = function ( ) {
		
	};
}