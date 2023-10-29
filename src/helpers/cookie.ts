export function getCookie(cname: string) {
  // eslint-disable-line no-unused-vars
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function setCookie(cname: string, cvalue: any, exdays: any) {
  // eslint-disable-line no-unused-vars
  let host = window.location.hostname;
  if (host.indexOf('local') === -1) {
    host = `.${host.split('.').slice(-2).join('.')}`;
  }
  var expires;
  if (exdays instanceof Date) {
    expires = 'expires=' + exdays.toUTCString();
  } else {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = 'expires=' + d.toUTCString();
  }
  document.cookie = cname + '=' + cvalue + ';' + expires + `;domain=${host}` + '; path=/';
}

export function removeCookie(name: string) {
  if ('undefined' !== typeof document) document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const getDomainName = () => {
    const hostName = window.location.hostname
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
  }


export const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.${getDomainName()};path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=${getDomainName()};path=/`;
      document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  
    }
  }