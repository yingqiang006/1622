var CookieUtil = {
	saveCookie: function(key, value, days){
		var date = new Date();
		var d = days || 7;
		date.setDate(date.getDate() + d);
		document.cookie = key + "=" + encodeURIComponent(value) + ";expires="+ date.toGMTString()+";path=/";
		
	},
	deleteCookie: function(key){
		this.saveCookie(key,"",-3);
	},
	
	getCookie: function(key){
		var cookieStr = document.cookie;
		var index = cookieStr.indexOf(key);
		if(index != -1) {
			var arrs = cookieStr.split(";");
			for(var i in arrs){
				if(arrs[i].indexOf(key) != -1){
					var cookieValue = arrs[i].trim().substring(key.length + 1);
					return decodeURIComponent(cookieValue);
				}
			}
		}
		return null;
	}
}
