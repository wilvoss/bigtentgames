/// <reference path="../helpers/console-enhancer.js" />
/// <reference path="../models/GameObject.js" />

// if (!UseDebug) {
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
// }

Vue.config.ignoredElements = ['app', 'page', 'navbar', 'settings', 'splash', 'splashwrap', 'message', 'notifications', 'speedControls', 'state', 'bank', 'commodity', 'detail', 'gameover', 'listheader', 'listings', 'category', 'name', 'units', 'currentPrice', 'description', 'market', 'currentValue', 'contractSize', 'goldbacking', 'contractUnit'];

var app = new Vue({
  el: '#app',
  data: {
    games: Games,
    year: new Date().getFullYear(),
    showOnionskin: false,
    onionSkinImageSrc: '',
    currentHash: '',
    r: document.querySelector(':root'),
  },
  methods: {
    ChangeHashToGamePath(_game) {
      log('ChangeHashToGamePath(_game) called');
      window.location.hash = _game.path;
    },

    SelectGame(_path) {
      log('SelectGame(_path) called');
      this.games.forEach((_game) => {
        _game.isSelected = _game.path === _path;
      });
      this.ResetScrollPositions();
    },

    GetCurrentGame() {
      log('GetCurrentGame() called');
      let _game = null;
      this.games.forEach((g) => {
        if (g.isSelected) {
          _game = g;
        }
      });
      if (_game === null) {
        _game = this.games[0];
        this.SelectGame(_game.path);
      }
      return _game;
    },

    GetCurrentGameByPathName(_path) {
      log('GetCurrentGameByPathName(_path) called');
      return this.games.filter((obj) => obj.path === _path);
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
        document.getElementsByTagName('content')[0].scrollTo(0, 0);
      }
      if (document.getElementsByTagName('screenshots')[0] != undefined) {
        document.getElementsByTagName('screenshots')[0].scrollTo(0, 0);
      }
    },

    HandleHashChangeEvent() {
      log('HandleHashChangeEvent() called');
      this.currentHash = window.location.hash.replace('#', '');
      log(window.location.hash);
      if (this.currentHash === '') {
        window.location.hash = 'home';
      } else {
        this.SelectGame(this.currentHash);
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
    getCurrentGameComputed: function () {
      return this.GetCurrentGame();
    },
  },
});
