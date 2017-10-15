
var navigatorMessageMap = {
	  'mac': 'macos',
    'iphone': 'macos',
	  'win': 'windows',
	  'android': 'android',
	  'linux': 'linux'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
	  key = key.toLowerCase();
	  var version = navigatorMessageMap[key];
    
    if (platform.indexOf(key) >= 0){
    document.querySelector('[data-version='+version+']').style.display = "block";
	}
}