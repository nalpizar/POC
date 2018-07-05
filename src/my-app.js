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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #242836;
          --app-secondary-color: black;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          height: 80px;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        .bdx_header .container {
          width: 98%;
          margin: 0 auto;
        }
        .logo-container  {
          float: left;
          width: 155px;
        }
        .logo-container  a {
          padding: 20px 0 0 10px;
          height: 39px;
          float: left;
          font-size: 18px;
          line-height: 20px;
          cursor: pointer;
        }
        .search-container {
          float: left;
          background: #343844;
          height: 80px;
          width: 480px;
        }
        .search-container form {
          position: relative;
          top: 30px;
        }
        .search-container form input[type="text"] {
          background: transparent;
          border: none;
          font-size: 16px;
          width: 405px;
          height: 18px;
          padding: 10px;
          color: #fff;
          padding-left: 3px;
        }
        .search-container form input[type="text"]::-webkit-input-placeholder {
          color:#fff;
          font-family: 'Montserrat', sans-serif;
        }
        .search-container form input[type="submit"] {
          background-image: url(images/icons/search.png);
          float: left;
          background-size: 20px 20px;
          background-repeat: no-repeat;
          color: transparent;
          overflow: hidden;
          padding: 20px 0 0 0;
          background-color: transparent;
          border: none;
          width: 22px;
          margin-left: 12px;
          position: relative;
          top: 8px;
          cursor: pointer;
        }
        .header_nav {
          float: right;
          margin-top: 10px;
        }
        .header_nav ul {
          list-style: none;
          padding: 0;
        }
        .header_nav ul li {
          float: left;
          padding-bottom: 0;
          display: inline-block;
          margin: 0;
          padding: 10px 25px 2px 22px;
          position: relative;
          font-size: 14px;
          font-weight: 500;
        }
        .header_nav>ul>li>.dd-icon {
          border: solid #fff;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          position: absolute;
          top: 44%;
          margin-left: 7px;
        }
        .dd-icon

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <!-- <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="startView" href="[[rootPath]]startView">Start</a>
            <a name="view1" href="[[rootPath]]view1">View One</a>
            <a name="view2" href="[[rootPath]]view2">View Two</a>
            <a name="view3" href="[[rootPath]]view3">View Three</a>
          </iron-selector>
        </app-drawer> -->

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header>
            <div class="bdx_header">
              <div class="container">
                <div class="logo-container">
                  <a onclick="window.location = '/startView';" class="navbar-brand">
                    <img src="../images/bdx-portal-logo.png" alt="BDX Logo">
                  </a>
                </div>
                <div class="search-container">
                  <form action="">
                    <input type="submit">
                    <input type="text" placeholder="Search" name="search">
                  </form>
                </div>
                <nav class="header_nav">
                  <ul>
                    <li><a>My Reports</a><i class="dd-icon"></i></li>
                    <li><a>Quick Links</a><i class="dd-icon"></i></li>
                    <li><a>Contacts</a><i class="dd-icon"></i></li>
                    <li><a>jdavis@thebdx.com</a><i class="dd-icon"></i></li>
                  </ul>
                </nav>
              </div>
            </div>
          </app-header>
          
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <start-view name="startView"></start-view>
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'startView';
    } else if (['startView','view1', 'view2', 'view3'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'startView':
        import('./start-page.js')
        break
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
