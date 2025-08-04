function FindProxyForURL(url, host) {
  // Domains to block connection
  var blackList = ["google-analytics.com", "googlesyndication.com", "googletagservices.com", "amazon-adsystem.com"];

  // Domains for proxying 
  var whiteList = ["youtube.com", "youtu.be", "googlevideo.com", "ytimg.com", "2ip.ru", "mergetacticsbuild.com"];

  // var _host = host.toLowerCase();

  /*
  for (var i = 0; i < blackList.length; i++) {
    if (dnsDomainIs(_host, blackList[i]) || dnsDomainIs(_host, "." + blackList[i])) { return "SOCKS5 255.255.255.255:25525"; }
  }

  for (var i = 0; i < whiteList.length; i++) {
    if (dnsDomainIs(_host, whiteList[i]) || dnsDomainIs(_host, "." + whiteList[i])) { return "SOCKS5 127.0.0.1:9050"; }
  }
  */

  for (var i = 0; i < blackList.length; i++) {
    if (shExpMatch(url, "*." + blackList[i] + "/*")) { return "SOCKS5 255.255.255.255:25525"; }
  }

  for (var i = 0; i < whiteList.length; i++) {
    if (shExpMatch(url, "*." + whiteList[i] + "/*")) { return "SOCKS5 127.0.0.1:9050"; }
  }

  // for (var i = 0; i < whiteList.length; i++) {
  //   if (dnsDomainIs(_host, whiteList[i]) || dnsDomainIs(_host, "." + whiteList[i])) { return "SOCKS5 127.0.0.1:9050"; }
  // }

  //if (shExpMatch(url, "*.youtube.com/*") || shExpMatch(url, "*.youtu.be/*") || shExpMatch(url, "*.googlevideo.com/*") || shExpMatch(url, "*.ytimg.com/*") || shExpMatch(url, "*.2ip.ru/*")) {
  //  return "SOCKS5 127.0.0.1:9050";
  //}

  return "DIRECT";
}
