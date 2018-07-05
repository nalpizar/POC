/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class StartView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px 20px;
        }
      </style>
      <style>
        .welcome-page, .cards-container {
            width: 50%;
            float: left;
        }
        .welcome-page {
            position: relative;
            top: 150px;
            width: 46%;
            float: left;
        }
        .welcome-page>div {
            width: 382px;
            margin: 0 auto;
            font-weight: 600;
            font-size: 20px;
            color: #717171;
        }
        .welcome-page h1 {
            font-size: 50px;
            line-height: 1.2;
            font-weight: 600;
        }
        .card {
            width: 100%;
            height: 100px;
            padding: 0;
            margin: 15px 24px 0 24px;
            cursor: pointer;
        }
        .card-icon {
            background: #0c93c2;
            float: left;
            width: 60px;
            height: 60px;
            padding: 20px;
        }
        .card:nth-of-type(2) .card-icon {
            background: #059638;
        }
        .card:nth-of-type(3) .card-icon {
            background: #fa0027;
        }
        .card:nth-of-type(4) .card-icon {
            background: #ffcd34;
        }
        .card:last-child .card-icon {
            background: #d3d3d3;
        }
        .card h1 {
            margin: 34px 0;
            margin-left: 20px;
            color: #212121;
            font-size: 22px;
            display: inline-block;
        }
        .card-icon span {
            padding: 31px;
            float: right;
        }
        .listings-icon {
            /* background-image: url(../../images/homepage/icon_managa_my_listings.png); */
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMACwcC8ujVYdyDEQTsDeET5FgXzIl7dnNrZ1Xu2NBSSvRvyI1cTh72fvi+ppmTMSWzqzpBhDY4kgAAAZpJREFUWMPtlNl2gjAURYHIoIIKVUFboYjFeSz//23VmyxSmS7Ep65y3iR3b0NyFlKbNm3qRJntV+QVfJAkiaH3BXFvlEBAIYqrB5MpxPBQlqxJc4USAj4KFfjJFINZTYUcqgznj6ZModTAXYp7dJYr1JwCxzEFMoPYMby54jziR42esOHkl0LgTxKWGxjs/EKsQW0v35V4sIOpt2HBGpkv6aJd9haKTv9kF5Ru7wIDA9cqWOxNYPPbfeVrng/rx1RnHGcXjp+wEMUSkuGm4I9u1/Kt4a9KfHY4q8orjg11KmcOW9MVSfaMzPX0uuaioAfufcjkitN+++uDsj2cOd65P9AL3h32bU6sdEvRYxIedp1nPFnKUj593cgoLBc+ql46PaS4ZhOOFSjeuaJvH32S4mOKzzleqtjw68rhyB0S/YMqehkcerQAHFOsqKLLFQ7DfbQHT4oOUzgRwxv0gNipwonWUMOvJj0AhQaKK8MFesAUgIv2YP5QLINXeuAfg7/TAwjaAzxoD/CU90BIIYhneiAe6EGbNv8hP4f2aXVkVrVfAAAAAElFTkSuQmCC');
            background-repeat: no-repeat;
        }
        .reports-icon {
            /* background-image: url(../../images/homepage/icon_my_reports.png); */
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAgL8H3pmf63JmVQ9MQKIm72zyY34AAADjSURBVFjD7ZbbDoMgDEAtFLmom/3/n103JMZMBMnUmHFeCEKPtn2wTaVyArI3ppfl8U4To11pvKIJVfh+DkWlkBdXlL8maiWvLWextw4DAHAcyo8J2cQPhh0CmHOfawH7BRB2JQLhPzokJDIFnQXw19vlQeuVYLvteKSAWJ4ImsBNg6WkgGxG7oBrAkyVwgtguj6KBaNXQrbgi5MFRqxgcgVR/kpAEeR9BNcX8XrB9V2obfxtG59+97ib4MAiKiJTKgjTTl8sCPNW8u8cJWPis5RCNakJZRPtMmakOO+5u1I5hBe/LiZO5Z1eLgAAAABJRU5ErkJggg==');
        }
        .products-icon {
            /* background-image: url(../../images/homepage/icon_my_products.png); */
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgL/7Az8xBv3u6xWdLcWJ39PRemhiG/j1sFk1KCPbcxHyurOofEoLyVJNR0UNBhC1iQAAAW5JREFUWMPt0tlugzAQheExEPadkH3rvv/v/3h1GyulUkpipepFxXczHsEc2bJlMBj8vpFSqXNSqpTy5SjFuca/G9A9ggOl06MExxzhx00oXfq/W/wwuSwgSN20E7GaWAYkDjBTb6bN4s3EKiAr+RSPPdH8GB5tAu6vICxqtM2Tno8gWloEbEO4ehZZlGh5u58/OyBIgTITLdhG5ij++beQ5ECeyN6umH7MZxbXqIA0EG0xny9E1rehnrcI8K7DbafX/JXdQ9q9dvoLnvIlASOlRqY/tBYBZmGKqUPAXwXcQfF1jaZ0agF30qeFG+lxA630WYG7lB8tXVhJrzlEbSJHJW0Ec+mXxGjuXuh+gxYncoJf0aPy5aSgqaccNa2bQM7jaWMIR7oGOdQPniZW1jMoOitbXg6V2fDnXsRSA64vxjVsHsRKNoXm0E0iSMVKDbknBwvgXiwkIbO1dNyCIzZU9SJdu4pGLhJkMhj8a+9aPk6873IWGQAAAABJRU5ErkJggg==');
        }
        .eflyers-icon {
            /* background-image: url(../../images/homepage/icon_order_agent_eflyers.png); */
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAgFvOv6SaZgPwMi35IuHUCOXHrIrusIRtGvXaAG8AAADaSURBVFjD7dbJCoMwFIXh5MYmceqknc77P2grCFfFRXKz0Zp/Iwp+IKIclcv9a75yelFnVXi1wUqX8PsbIEXwBiitnldECBVQtmqRxpAJAhxg1QrQhAoa0GsXX2cWRID2g3BPANSVBRmgrjcAhRxgQQR09Ms1gyAA3pjWxwOfByY94wHV9qcxA2gBwOkjAkRpAAEkBPj8wACNP+RiOFI8QJhFyUDqI+zyLWwEIICSP+ed/ZF4H6xnARe/ULi2BKrojcTZEjBestK4ppbsRM7UgqXKucqrXG6bfQE7hif4jFLMEwAAAABJRU5ErkJggg==');
        }
        .help-icon {
            /* background-image: url(../../images/homepage/icon_help_agent_&_suppport.png); */
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA/PoU0Rv244wkBKxb29VXTUDKR/DfNwiYfS4M6cWEQR+1ZjMQvqOdkSntdXBqURLlX/IpLkqjAAACFUlEQVRYw+2V2XLiMBBFGwUbs4QlxisQDGZNGJJM//+/zfUWjVyJZaUqbz5VYBadK3XLCOro6DAhuZ3Dyz34qT48cs4yIi2x41Kd2ZIr3nT+1ma+jEjhD0R7vN/h8tTGx7Ck7vevNOnh8kAaPMyV1XqXH+3xfrOiWBS+PmB3w1BZRipyn54+/SBpCJjDfU0Rw89UjJ6iIvgW81+r2BGPm/bCYRZ+VnVYbgDzi1Uk7wp/wLwe0beMNvge7bKvlHPCigj4WEjpA5e+x3rhnGlR8Jp5SGCF0D1RDD+vT9OGQa9KQFxQ1cbTjcjuCE0ARWj3rErACsre98u7eRExO9TIAY8q4cj8UXbn2WbujS1Cl2akQSZg5ePPBsc+NnTLLHBpmbDH01ltMtp4ImqZANCQ5ORK/xEtfqP2CSjDF1nbpS8W1JJJHuAKufNx5s9NfEk4tHzHNvX7aCI4C65YukZ+Xj9HlGYXedQY+iHeXtd44YULMvPJzuaX7Z+b+in8AZFxgjw/vaxs4wTpU/Ce9cAoQfry/HGUBFNf1BNcjR8Lxbe341rCu+an1Ff9BY2UBLT10ugPmZfW/z6pCa7u/3HGPFb8WsIBE1ATmOGo+DKh3QoeMPSOVkpfSUg87ZF8xtDNUUhfJuw+Xte4tw+aM/2xOv+J6gkA+0oaVmEvm80ilVEkGExT0hP426+Web2dnElAHR0dv8Q/MNNhdfNIt70AAAAASUVORK5CYII=');
        }
        .go-btn {
            /* background-image: url(../../images/homepage/icon_arrow.png); */
            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAh1BMVEUAAADExMTExMTFxcXGxsbe3t7GxsbJycnDw8PExMTExMTExMTExMTExMTExMTExMTLy8vExMTDw8PFxcXFxcXFxcXExMTIyMjHx8fExMTExMTExMTIyMjExMTExMTFxcXExMTFxcXExMTExMTExMTExMTGxsbFxcXHx8fExMTFxcXR0dHDw8MUlj2KAAAALHRSTlMA+uxNIQQ8DvT30eGOwKhjFOTHMG80Wi4ZsoFrHdyunZhQ1brZk1lGK0RfCNqymMwAAAPoSURBVHja7NfbcqJAEAbgf2BGwiHIuiLiITFRo1b1+z/fVm0x9LqR0AOTXPFdD/AzXdMNmEwmk8lkMhkmKlebfJGkgVJBmizyzaqM8FOiMEvogSQLfyBENH9W1Ek9z783Q5jH1CPOQ3wTs3onkfeVgX9mviex/dx7hFlCTpIZfCpeydlrAW/eAvpfcDxvb5UujCl0dduejw+WvMEPk9G9uF5W+KRa1jHdyww80Au6w0f9UZOgOwuN0cq7vY0PuifuIb4rQ4mRLk/E4myNXussJvZ0wSgfilitIaJrYupj1POJpSHEwpTYiAQXRa2XCA6iF2qpwVUouf5qCUdLDv9UYhAdkBXM4Gz2z+UaA5gFl/+KAa4p9wMDdxlZpx0G2Z3IyuDsjd9/h4F2vAfOc6EI2gJeMdiV71LATTt/1QwjzFQ7nR0vJGuJUZZkOb2ISdr+012kw/5XvkOftiMlBnJzaqTdozf922P4vbrXNeYQM3tqhOhyJpIlCKmxN5BaUaNGp3eSJqipsYIM3zzW6HQiaQId2/8FCIWS/nUgcYKMCyqT2w1YCzqVIMHabkEOkciuP+Arv6UJeLfiyO0ManhKoN1O4rP9/gZGJ5DfkkWK4/pJwJuqJDUIuWDeEkSxwznIuAn5S1A7fJgkPAZ9JeChmKBXRI0KHhNU1Oiva2k/YQCfCeyiUjyIjvCa4CgeSJtm5Rn+EvD0po14EGzhNcFWPA7s78gNXhPc7C+K8BS660lQic9hSqMT6C/mUYo+AY3QfYAK8elWNFps8Imx4wh9/rRrdrkNwkAQFiE0QALCAYJFgISG/gh8//P1reNWqlbqOt4XfxeYldbg9c4o6QJKw6ZgtWBgH4KoIw4hwVAqnn5Mfobu2StLn/cj4uvzfsV8feZlxNenr2MRfQwkQvoYyWT0MZQK6WMs96BPP0xotpNKzx8Mfc7TDFvimdQ/Wvr8xylYMdkw9MnnOX0jFwx9YkFBFkCP5gdCn1jRUE4R3YQToc9ZUiW5oZvwCn1XazrQRnQTFug7X1TigWiyltjnRzFrVUs3Qem/TtYO+s6W1aCOSL9pmNLs8el+XY8m0FZH4sCwoJtgrhKWjW1bRhcJ08ou3lz82naYpL9ZfRqX4M6ogGHdgqRABY1H8xpUo50f8GffA72ggqXzF2AA2sqvZau/CAeocgOK2muIBRWAe+UrxgMOZ2OR9poXZOJnyaIpTvxEucCcmh+oU1z5CLOBfW5+M96u80unt6fG+cD2JhRoBHUhFOkE8SITagVJs5OJ9YLt/SEUbAZDPwpFu0HblEehcDvQc3+bilxlVrw/EAgEAoFA4F98AYZd6rLuoCgWAAAAAElFTkSuQmCC');
            float: right;
            padding: 30px;
            background-size: 64px 64px;
            background-repeat: no-repeat;
            margin: 20px;
        }


      </style>

    <div class="welcome-page">
        <div>
            <h1>Welcome back Joel!</h1>
            <p>For any questions or help on how to navigation the new BDXLive, please visit our resources center or contact our Help &amp; Support team.</p>
        </div>
    </div>
    <div class="cards-container">
      <div onclick="window.location = '/view1';" class="card">
        <div class="card-icon">
          <span class="listings-icon"></span>
        </div>
        <h1>Manage My Listings</h1>
        <div class="go-btn"></div>
      </div>
      <div class="card">
        <div class="card-icon">
          <span class="reports-icon"></span>
        </div>
        <h1>My Reports</h1>
        <div class="go-btn"></div>
      </div>
      <div class="card">
        <div class="card-icon">
          <span class="products-icon"></span>
        </div>
        <h1>My Products</h1>
        <div class="go-btn"></div>
      </div>
      <div class="card">
        <div class="card-icon">
          <span class="eflyers-icon"></span>
        </div>
        <h1>Order Agent eFlyers</h1>
        <div class="go-btn"></div>
      </div>
      <div class="card">
        <div class="card-icon">
          <span class="help-icon"></span>
        </div>
        <h1>Help &amp; Support</h1>
        <div class="go-btn"></div>
      </div>
      </div>
    `;
  }
}

window.customElements.define('start-view', StartView);