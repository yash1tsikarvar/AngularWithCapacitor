var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function (dataString) {
    if (this.browser==='Safari'){
      var isaf0 = dataString.indexOf('Version');
      var isaf1 = dataString.indexOf('.',isaf0);

      if (isaf0>0 && isaf1>0){
        var sub = dataString.substring(isaf0+8,isaf1);
        var ver = parseFloat(sub);
        return ver;
      }         
    }

    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [
    { string: navigator.userAgent, subString: "Edge", identity: "MS Edge Legacy" },
    { string: navigator.userAgent, subString: "Edg", identity: "MS Edge" },
    { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
    { string: navigator.userAgent, subString: "Trident", identity: "Explorer" },
    { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
    { string: navigator.userAgent, subString: "Opera", identity: "Opera" },
    { string: navigator.userAgent, subString: "OPR", identity: "Opera" },

    { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
    { string: navigator.userAgent, subString: "Safari", identity: "Safari" }
  ]
};

// Check browser version in all screens except incompatible-browser screen
if (window.location.href.indexOf('/incompatible-browser')==-1){
  BrowserDetect.init();
  //console.log("You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b>");

  if ((BrowserDetect.browser==='MS Edge Legacy') || 
      (BrowserDetect.browser==='MS Edge') || 
      (BrowserDetect.browser==='Opera') || 
      (BrowserDetect.browser==='Chrome' && BrowserDetect.version <= 60) ||
      (BrowserDetect.browser==='Safari' && BrowserDetect.version <= 10) ||
      (BrowserDetect.browser==='Firefox' && BrowserDetect.version <= 62) ||      
      (BrowserDetect.browser==='Explorer' && BrowserDetect.version <= 11))  {
    window.location.href = '/assets/incompatible-browser/incompatible-browser.html';
  }
}
