/// <reference path="../helpers/console-enhancer.js" />
/// <reference path="../models/PageObject.js" />

// if (!UseDebug) {
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
// }

Vue.config.ignoredElements = ['app', 'page', 'navbar', 'settings', 'splash', 'splashwrap', 'message', 'notifications', 'speedControls', 'state', 'bank', 'commodity', 'detail', 'pageover', 'listheader', 'listings', 'category', 'name', 'units', 'currentPrice', 'description', 'market', 'currentValue', 'contractSize', 'goldbacking', 'contractUnit'];

var app = new Vue({
  el: '#app',
  data: {
    pages: Pages,
    year: new Date().getFullYear(),
    showOnionskin: false,
    onionSkinImageSrc: '',
    currentHash: '',
    expandVersionHistory: false,
    r: document.querySelector(':root'),
  },
  methods: {
    ChangeHashToPagePath(_path) {
      log('ChangeHashToPagePath(_path) called');
      this.ResetScrollPositions();
      window.location.hash = _path;
    },

    SelectPage(_path) {
      log('SelectPage(_path) called');
      this.pages.forEach((_page) => {
        _page.isSelected = _page.path === _path;
      });
      this.ResetScrollPositions();
    },

    GetCurrentPage() {
      log('GetCurrentPage() called');
      let _page = null;
      this.pages.forEach((g) => {
        if (g.isSelected) {
          _page = g;
        }
      });
      if (_page === null) {
        _page = this.pages[0];
        this.SelectPage(_page.path);
      }
      return _page;
    },

    GetCurrentPageByPathName(_path) {
      log('GetCurrentPageByPathName(_path) called');
      return this.pages.filter((obj) => obj.path === _path);
    },

    ToggleExpandVersionHistory() {
      log('ToggleExpandVersionHistory() called');
      this.expandVersionHistory = !this.expandVersionHistory;
    },

    ToggleShowOnionSkin() {
      log('ToggleShowOnionSkin() called');
      this.showOnionskin = !this.showOnionskin;
    },

    ZoomImage(_screenshot) {
      log('ZoomImage(_screenshot) called');
      this.onionSkinImageSrc = _screenshot;
      this.ToggleShowOnionSkin();
    },

    ResetScrollPositions() {
      log('ResetScrollPositions() called');
      if (document.getElementsByTagName('content')[0] != undefined) {
        document.getElementsByTagName('content')[0].scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
      if (document.getElementsByTagName('screenshots')[0] != undefined) {
        document.getElementsByTagName('screenshots')[0].scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
      this.expandVersionHistory = false;
    },

    HandleHashChangeEvent() {
      log('HandleHashChangeEvent() called');
      let hash = window.location.hash.split('?');

      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('showVersionHistory')) {
        let url = new URL(window.location.href);
        url.searchParams.delete('showVersionHistory');
        window.history.replaceState({}, document.title, url);
        window.setTimeout(function () {
          app.expandVersionHistory = true;
        }, 1);
        window.setTimeout(function () {
          document.getElementById('versionHistory').scrollIntoView();
        }, 100);
      }

      this.currentHash = hash[0].replace('#', '');
      log(window.location.hash);
      if (this.currentHash === '') {
        window.location.hash = 'home';
      } else {
        this.SelectPage(this.currentHash);
      }
    },

    InitializeApp() {
      announce('InitializeApp() called');
      this.HandleHashChangeEvent();
    },
  },

  mounted() {
    window.addEventListener('hashchange', this.HandleHashChangeEvent);
    this.InitializeApp();
  },

  computed: {
    getCurrentPageComputed: function () {
      return this.GetCurrentPage();
    },

    getPrivacyPageComputed: function () {
      return this.GetCurrentPageByPathName('privacy');
    },
  },
});
