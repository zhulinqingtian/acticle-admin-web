import browser from './browser'
import DateFormat from './date-format'

function clone (obj) {
  return typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj
}

function locationQuery () {
  const query = {}
  window.location.search && window.location.search.slice(1).split('&').forEach(v => {
    const val = v.split('=')
    query[val[0]] = val[1]
  })
  return query
}

function setTitle (title) {
  document.title = title || '管理后台'
  if (browser.isIOS) {
    const i = document.createElement('iframe')
    i.src = '/images/empty.png'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(() => i.remove(), 10)
    }
    document.body.appendChild(i)
  }
}

/**
 * 日期格式化 YYYY-MM-DD hh:mm
 */
function dateFormat (date) {
  return DateFormat(date, 'YYYY-MM-DD hh:mm')
}

/**
 * 日期格式化2 YYYY.MM.DD
 */
function dateFormat2D (date) {
  return DateFormat(date, 'YYYY-MM-DD')
}

/**
 * 日期格式化2 MM.DD
 */
function dateFormat2MD (date) {
  return DateFormat(date, 'MM-DD')
}

export default {
  clone, locationQuery, setTitle, dateFormat, dateFormat2D, dateFormat2MD
}
