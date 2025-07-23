function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*.youtube.com/*") || shExpMatch(url, "*.youtu.be/*") || shExpMatch(url, "*.googlevideo.com/*") || shExpMatch(url, "*.ytimg.com/*") || shExpMatch(url, "*.2ip.ru/*")) {
    return "SOCKS5 127.0.0.1:9050";
  }
  return "DIRECT";
}
