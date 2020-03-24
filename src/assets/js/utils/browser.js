const ua = navigator.userAgent

export default {
  isWX: /MicroMessenger/i.test(ua),
  isMobile: !!ua.match(/AppleWebKit.*Mobile.*/),
  isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
  WXVersion: ua.match(/MicroMessenger\/(\d+(.?\d+)?)/i) && +ua.match(/MicroMessenger\/(\d+(\.\d+)?)/)[1]
}
