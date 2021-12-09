class GameObject {
  constructor(spec) {
    this.name = spec.name == undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? 'description' : spec.description;
    this.path = spec.path == undefined ? 'path' : spec.path;
    this.url = spec.url == undefined ? 'url' : spec.url;
  }
}

var Games = [
  new GameObject({
    name: 'Like Me?',
    description: 'A game of likenesses.',
    path: 'likeme',
    url: 'https://likeme.games',
  }),
  new GameObject({
    name: 'CommOddities!',
    description: 'Buy, sell, embrace or avoid corruption!',
    path: 'commoddities',
    url: 'https://commoddities.games',
  }),
  new GameObject({
    name: "Drop 'n Stop!",
    description: 'The puck stops here.',
    path: 'dropnstop',
    url: 'https://dropnstop.games',
  }),
  new GameObject({
    name: 'Path',
    description: 'Paths are the means to an end.',
    path: 'path',
    url: 'https://path.bigtentgames.com',
  }),
];

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
    r: document.querySelector(':root'),
    // modes: Modes,
    // currentMode: Modes[1],
  },
  methods: {},

  mounted() {},

  computed: {},
});
