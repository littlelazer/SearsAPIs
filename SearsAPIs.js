function SearsAPI ( initObj ) {
	var apiKey = initObj.apiKey,
			searsAppID = initObj.appID,
			searsAuthID = initObj.authID,
			apiURL = 'http://api.developer.sears.com/v1/',
			sApiURL = 'https://webservices.sears.com/shcapi/',
			webApiURL = 'http://webservices.sears.com/shcapi/',
			clientSessionKey,
			
	saveCSKey = function ( key ) {
		clientSessionKey = key;
	},
	checkForArguments = function ( ) {
		
	},

	/**************************/
	/* User Profile Functions */
	/**************************/

	/**************************/
	/* Car Fitment Functions  */
	/**************************/

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
	
	this.getFitmentProd = function ( ) {
		
	};
	
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
	
	this.getFitmentTrim = function ( carYear, carMake, carModel ) {
		
	};
	
	this.getStore = function ( storeArgs ) {
		var serviceURL = apiURL + 'StoreLocator';
		$.ajax({
			cache: false,
			url:		serviceURL,
			dataType:	'json',
			data : {
				store : 'Sears',
				searchType : storeArgs.searchType,
				sortFlag : storeArgs.sortFlag,
				zipCode : storeArgs.zipCode,
				apikey : storeArgs.apiKey,
				contentType : 'json'
			}
		});
	};
	
	this.getProductDetails = function ( ) {
	
	};
	
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
}