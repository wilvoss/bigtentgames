class PageObject {
  constructor(spec) {
    this.name = spec.name == undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? 'description' : spec.description;
    this.price = spec.price == undefined ? '$0.00' : spec.price;
    this.googleplayurl = spec.googleplayurl == undefined ? '' : spec.googleplayurl;
    this.appleappstoreurl = spec.appleappstoreurl == undefined ? '' : spec.appleappstoreurl;
    this.msappstore = spec.msappstore == undefined ? '' : spec.msappstore;
    this.about = spec.about == undefined ? '' : spec.about;
    this.versionHistory = spec.versionHistory == undefined ? '' : spec.versionHistory;
    this.version = spec.version == undefined ? '' : spec.version;
    this.path = spec.path == undefined ? 'path' : spec.path;
    this.url = spec.url == undefined ? 'url' : spec.url;
    this.isSelected = spec.isSelected == undefined ? false : spec.isSelected;
    this.showInNav = spec.showInNav == undefined ? true : spec.showInNav;
    this.showAsGame = spec.showAsGame == undefined ? true : spec.showAsGame;
    this.backgroundColor = spec.backgroundColor == undefined ? '' : spec.backgroundColor;
    this.contentBackgroundColor = spec.contentBackgroundColor == undefined ? 'rgba(250,250,250,.9)' : spec.contentBackgroundColor;
    this.useBanner = spec.useBanner === undefined ? true : spec.useBanner;
    this.bannerText = spec.bannerText === undefined ? 'beta' : spec.bannerText;
    this.bannerType = spec.bannerType === undefined ? 'beta' : spec.bannerType;
    this.screenshots = spec.screenshots === undefined ? [] : spec.screenshots;
    this.isMobileFirst = spec.isMobileFirst === undefined ? true : spec.isMobileFirst;
    this.communities = spec.communities === undefined ? [] : spec.communities;
  }
}

var Pages = [
  new PageObject({
    name: 'Home',
    description: 'Home page.',
    path: 'home',
    url: '',
    showAsGame: false,
    useBanner: false,
    // contentBackgroundColor: 'rgba(100, 100, 100, 0.8)',
  }),
  new PageObject({
    name: 'Privacy Policy',
    description: 'Privacy Policy page.',
    path: 'privacy',
    url: '',
    showAsGame: false,
    useBanner: false,
    showInNav: false,
    backgroundColor: 'hsl(var(--bannerHS), 25%)',
    // contentBackgroundColor: 'rgba(100, 100, 100, 0.8)',
  }),
  new PageObject({
    name: 'Like Me?',
    description: 'A game of matching likenesses',
    path: 'likeme',
    url: 'https://likeme.games',
    googleplayurl: 'https://play.google.com/store/apps/details?id=games.likeme.twa',
    appleappstoreurl: '',
    msappstore: 'https://apps.microsoft.com/store/detail/like-me/9NRLDSV9R06P',
    about: 'Reminiscent of the card game "Set," the object of this fast-paced, casual video game is to observe the "Me" piece and then select all other pieces on the board that share <b>at least 2</b> of the following 3 attributes: color, shape, and pattern.',
    version: '4.2.109',
    backgroundColor: 'hsla(187.2, 42.74%, 45.88%, 1)',
    screenshots: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    bannerText: 'free!',
    bannerType: 'free',
    communities: [
      {
        service: 'Discord',
        name: 'Big Tent Games Server',
        url: 'https://discord.gg/wHXD524D4H',
        links: [
          { name: '#likeme-general', url: 'https://discord.com/channels/1148025462598139934/1148026844562604063' },
          { name: '#likeme-scores', url: 'https://discord.com/channels/1148025462598139934/1148345172304867450' },
          { name: '#likeme-feedback', url: 'https://discord.com/channels/1148025462598139934/1149745093604020364' },
          { name: '#likeme-bug-reports', url: 'https://discord.com/channels/1148025462598139934/1149745122624413836' },
        ],
      },
    ],
    versionHistory:
      '<h2>Version History</h2>' +
      '             <ul>' +
      '               <li>4.2.109</li>' +
      '               <ul>' +
      '                 <li>improved tutorial</li>' +
      '                 <li>replaced share with donate</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.105</li>' +
      '               <ul>' +
      '                 <li>bug fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.102</li>' +
      '               <ul>' +
      '                 <li>reduced dc.txt fetch</li>' +
      '                 <li>nuanced dark theming</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.101</li>' +
      '               <ul>' +
      '                 <li>better share messaging</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.100</li>' +
      '               <ul>' +
      '                 <li>better support for share menus</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.097</li>' +
      '               <ul>' +
      '                 <li>added og: twitter plaque back</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.096</li>' +
      '               <ul>' +
      '                 <li>added share game to shout out page</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.095</li>' +
      '               <ul>' +
      '                 <li>refactored share score</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.092</li>' +
      '               <ul>' +
      '                 <li>dark mode soft-light</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.091</li>' +
      '               <ul>' +
      '                 <li>small bug fix</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.088</li>' +
      '               <ul>' +
      '                 <li>sw.js now always loads .txt files from server</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.087</li>' +
      '               <ul>' +
      '                 <li>daily challenge bug fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.080</li>' +
      '               <ul>' +
      '                 <li>fixed keyboard shortcuts bug</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.078</li>' +
      '               <ul>' +
      '                 <li>added donation button</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.077</li>' +
      '               <ul>' +
      '                 <li>share delay removed on mobile</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.076</li>' +
      '               <ul>' +
      '                 <li>bug fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.074</li>' +
      '               <ul>' +
      '                 <li>scores retain context after refresh</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.069</li>' +
      '               <ul>' +
      '                 <li>fixed enter/space check board bug</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.068</li>' +
      '               <ul>' +
      '                 <li>all scores can be shared now</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.040</li>' +
      '               <ul>' +
      '                 <li>link to version history works</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.036</li>' +
      '               <ul>' +
      '                 <li>bug fixes and small tweaks</li>' +
      '                 <li>tutorial likeme descriptions</li>' +
      '                 <li>moved copyright to credits modal</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.33</li>' +
      '               <ul>' +
      '                 <li>streaks and shorter game</li>' +
      '                 <li>ui tweaks for SE and small phones</li>' +
      '                 <li>removed open graph</li>' +
      '               </ul>' +
      '' +
      '               <li>4.2.5</li>' +
      '               <ul>' +
      '                 <li>sudden death, small refactor </li>' +
      '                 <li>added review button for game end</li>' +
      '                 <li>removed hard mode</li>' +
      '                 <li>begin work of binding settings for game modes to mode definition</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.17</li>' +
      '               <ul>' +
      '                 <li>updated easy mode description</li>' +
      '               </ul>' +
      '               <li>4.1.16</li>' +
      '               <ul>' +
      '                 <li>removed li history link</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.15</li>' +
      '               <ul>' +
      '                 <li>added li history</li>' +
      '                 <li>added keyboard shortcuts</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.8</li>' +
      '               <ul>' +
      '                 <li>shoutout update</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.7</li>' +
      '               <ul>' +
      '                 <li>fixed click highlight on container</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.6</li>' +
      '               <ul>' +
      '                 <li>tutorial improvments</li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.1</li>' +
      '               <ul>' +
      '                 <li>check for sw update reliably </li>' +
      '               </ul>' +
      '' +
      '               <li>4.1.0</li>' +
      '               <ul>' +
      '                 <li>improved oobe hints</li>' +
      '               </ul>' +
      '' +
      '               <li>4.0.9</li>' +
      '               <ul>' +
      '                 <li>piece/gild logic improved</li>' +
      '               </ul>' +
      '' +
      '               <li>4.0.8</li>' +
      '               <ul>' +
      '                 <li>updated alt pattern</li>' +
      '               </ul>' +
      '' +
      '               <li>4.0.5</li>' +
      '               <ul>' +
      '                 <li>fixed share score bug</li>' +
      '               </ul>' +
      '' +
      '               <li>4.0.4</li>' +
      '               <ul>' +
      '                 <li>updated patterns, fixed daily share bug</li>' +
      '               </ul>' +
      '' +
      '               <li>4.0.1</li>' +
      '               <ul>' +
      '                 <li>alt patterns, updated css</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.98</li>' +
      '               <ul>' +
      '                 <li>wallpaper dismisses modals, et al.</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.97</li>' +
      '               <ul>' +
      '                 <li>sharing any high score now</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.93</li>' +
      '               <ul>' +
      '                 <li>tutorial board check bug fixed</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.90</li>' +
      '               <ul>' +
      '                 <li>interval fail bug on navigation via back button</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.88</li>' +
      '               <ul>' +
      '                 <li>updated tutorial text</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.85</li>' +
      '               <ul>' +
      '                 <li>update button stablized</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.84</li>' +
      '               <ul>' +
      '                 <li>updated icons</li>' +
      '                 <li>removed thenounproject icons</li>' +
      '                 <li>cleaned up lis</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.81</li>' +
      '               <ul>' +
      '                 <li>gave play button a title</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.80</li>' +
      '               <ul>' +
      '                 <li>page content flex gap</li>' +
      '                 <li>other small ui tweaks</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.74</li>' +
      '               <ul>' +
      '                 <li>fixed pause</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.70</li>' +
      '               <ul>' +
      '                 <li>daily final score add</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.69</li>' +
      '               <ul>' +
      '                 <li>name fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.67</li>' +
      '               <ul>' +
      '                 <li>css work for small phones</li>' +
      '                 <li>small animation bug fix</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.65</li>' +
      '               <ul>' +
      '' +
      '                 <li>bugfix, tutorial (selected pieces)</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.64</li>' +
      '               <ul>' +
      '                 <li>cleanup commented code, level"s"</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.59</li>' +
      '               <ul>' +
      '                 <li>tutorial! sliding modals and more</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.44</li>' +
      '               <ul>' +
      '                 <li>daily challenge</li>' +
      '                 <li>simplified this considerably</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.42</li>' +
      '               <ul>' +
      '                 <li>daily #</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.33</li>' +
      '               <ul>' +
      '                 <li>daily challenge improvements</li>' +
      '                 <li>better share text</li>' +
      '                 <li>150 levels</li>' +
      '                 <li>previous in-progress challenge resolves correctly</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.17</li>' +
      '               <ul>' +
      '                 <li>tweaks, share text</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.17</li>' +
      '               <ul>' +
      '                 <li>tweaks, share text</li>' +
      '                 <li>added cat resources</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.10</li>' +
      '               <ul>' +
      '                 <li>added icon_download to sw.js</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.10</li>' +
      '               <ul>' +
      '                 <li>daily challenge cache</li>' +
      '                 <li>added cache clearing before checking for file</li>' +
      '               </ul>' +
      '' +
      '               <li>3.9.1</li>' +
      '               <ul>' +
      '                 <li>CATS!</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.121</li>' +
      '               <ul>' +
      '                 <li>bonus time added bugfix</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.120</li>' +
      '               <ul>' +
      '                 <li>minor cleanup</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.119</li>' +
      '               <ul>' +
      '                 <li>ui improvements</li>' +
      '                 <li>increased animated feedback when selecting/unselecting pieces</li>' +
      '                 <li>fixed stupid "II pause" font issue</li>' +
      '                 <li>quaternary css class update</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.111</li>' +
      '               <ul>' +
      '                 <li>button color fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.110</li>' +
      '               <ul>' +
      '                 <li>ux improvements</li>' +
      '                 <li>buttons with inline icons</li>' +
      '                 <li>gameover layout adjustments</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.107</li>' +
      '               <ul>' +
      '                 <li>full Dailly Challenge support </li>' +
      '                 <li>ui improvements' +
      '                   <ul>' +
      '                     <li>better share icon</li>' +
      '                     <li>pause entry point</li>' +
      '                     <li>score/timer swap</li>' +
      '                     <li>game over stats</li>' +
      '                     <li>share score text updated</li>' +
      '                   </ul>' +
      '                 </li>' +
      '                 <li>app improvements' +
      '                   <ul>' +
      '                     <li>timer stops updating when game is over</li>' +
      '                   </ul>' +
      '                 </li>' +
      '                 <li>pwa improvements' +
      '                   <ul>' +
      '                     <li>manifest has hooks for url handling</li>' +
      '                   </ul>' +
      '                 </li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.76</li>' +
      '               <ul>' +
      '                 <li>refactored board/level creation</li>' +
      '                 <li>stubs for consuming daily challenge</li>' +
      '                 <li>no matches is a much smaller reward</li>' +
      '                 <li>NEW high score is clickable again</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.72</li>' +
      '               <ul>' +
      '                 <li>pause onload bug fixed</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.71</li>' +
      '               <ul>' +
      '                 <li>pausing, better accessibility</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.62</li>' +
      '               <ul>' +
      '                 <li>fixed sound loss</li>' +
      '                 <li>added pageshow listener</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.61</li>' +
      '               <ul>' +
      '                 <li>sounds</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.55</li>' +
      '               <ul>' +
      '                 <li>favicon, pagehide event</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.41</li>' +
      '               <ul>' +
      '                 <li>sw assets, background flicker</li>' +
      '                 <li>some assets were missing from sw.js</li>' +
      '                 <li>background in mobile was flickering</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.34</li>' +
      '               <ul>' +
      '                 <li>ui tweaks</li>' +
      '                 <li>fix -update button pulse</li>' +
      '                 <li>lis alphabetized</li>' +
      '                 <li>better Mobile detection</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.23</li>' +
      '               <ul>' +
      '                 <li>updated open graph image</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.23</li>' +
      '               <ul>' +
      '                 <li>hard high score bug fix</li>' +
      '                 <li>new hard high score message shows correctly on game over screen</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.22</li>' +
      '               <ul>' +
      '                 <li>OOBE, modes</li>' +
      '                 <li>OOBE added</li>' +
      '                 <li>infinite is now called zen</li>' +
      '                 <li>hard mode now works correclty</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.20</li>' +
      '               <ul>' +
      '                 <li>os status bar</li>' +
      '                 <li>now respects darkmode</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.18</li>' +
      '               <ul>' +
      '                 <li>visual nuances</li>' +
      '                 <li>nudges</li>' +
      '                 <li>dark mode</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.15</li>' +
      '               <ul>' +
      '                 <li>nudges added</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.14</li>' +
      '               <ul>' +
      '                 <li>dark mode</li>' +
      '                 <li>hints are now strong contrast like notifications</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.10</li>' +
      '               <ul>' +
      '                 <li>simplified wallpaper</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.9</li>' +
      '               <ul>' +
      '                 <li>google analytics removed</li>' +
      '                 <li>the one in which I regain my senses</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.6</li>' +
      '               <ul>' +
      '                 <li>fixed app positioning/bug</li>' +
      '               </ul>' +
      '' +
      '               <li>3.8.3</li>' +
      '               <ul>' +
      '                 <li>li margin, playarea overflow</li>' +
      '               </ul>' +
      '' +
      '               <li>3.7.99</li>' +
      '               <ul>' +
      '                 <li>wallpaper, ui bug fixes</li>' +
      '               </ul>' +
      '' +
      '               <li>3.7.85</li>' +
      '               <ul>' +
      '                 <li>quality of life, google analytics</li>' +
      '                 <li>user gets update button. works.</li>' +
      '                 <li>no scrollbars on browsers</li>' +
      '                 <li>zoom/panning reduced</li>' +
      '                 <li>added google analytics and tags</li>' +
      '                 <li>added force refresh troubleshooting</li>' +
      '                 <li>added red pulse last 5 seconds</li>' +
      '               </ul>' +
      '' +
      '               <li>3.7.1</li>' +
      '               <ul>' +
      '                 <li>ux/ui changes</li>' +
      '                 <li>date bug fix</li>' +
      '                 <li>update button</li>' +
      '                 <li>notifications</li>' +
      '                 <li>sharing full support</li>' +
      '                 <li>scrolling content</li>' +
      '                 <li>information page</li>' +
      '                 <li>game over modal</li>' +
      '                 <li>quit challenge modal</li>' +
      '               </ul>' +
      '' +
      '               <li>3.6.19</li>' +
      '               <ul>' +
      '                 <li>high scores, keyboard support</li>' +
      '                 <li>bug fixes, partial event handling</li>' +
      '               </ul>' +
      '' +
      '               <ul>' +
      '                 <li>themes, settings modal, max height</li>' +
      '                 <li>stubbed in high scores</li>' +
      '                 <li>improved modal/page/section layouts</li>' +
      '                 <li>more logging</li>' +
      '               </ul>' +
      '' +
      '               <li>3.6.0</li>' +
      '               <ul>' +
      '                 <li>refactor part 2</li>' +
      '                 <li> added full state restore on reload </li>' +
      '               </ul>' +
      '' +
      '               <li>3.4</li>' +
      '               <ul>' +
      '                 <li>reset the timer to 100ms</li>' +
      '                 <li>refactor part 1</li>' +
      '                 <li>likeme - refactored hardTimer</li>' +
      '               </ul>' +
      '' +
      '               <li>3.3</li>' +
      '               <ul>' +
      '                 <li>added hints</li>' +
      '               </ul>' +
      '' +
      '               <li>2.88</li>' +
      '               <ul>' +
      '                 <li>branding/ux/code optimization</li>' +
      '               </ul>' +
      '' +
      '               <li>2.9</li>' +
      '               <ul>' +
      '                 <li>small tweaks</li>' +
      '               </ul>' +
      '             </ul>',
  }),
  new PageObject({
    name: "Drop 'n Stop!",
    description: 'The puck stops here',
    about: 'Fast and fun, the object of this game is to test your reaction time. Hold the drop button and release when the puck hits the dropzone.',
    path: 'dropnstop',
    url: 'https://dropnstop.games',
    screenshots: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    backgroundColor: 'rgb(49, 121, 76)',
  }),
  new PageObject({
    name: 'CommOddities!',
    description: 'Not everything is an easy sell',
    about: 'If you ever played "Dope Wars" on a Palm Pilot back in the day, then you have an idea how this game plays. Basically you have 365 "days" to buy/sell for as much profit as possible. Your moral compass will be tested!',
    path: 'commoddities',
    url: 'https://commoddities.games',
    screenshots: ['1.png', '2.png', '3.png', '4.png', '5.png', '7.png'],
    backgroundColor: 'hsl(157.86, 100%, 40.59%)',
  }),
  new PageObject({
    name: 'Path',
    description: 'Paths are the means to an end',
    about: 'Not ready for mobile play at all. Proof of concept at best. Play at your own risk :).',
    path: 'path',
    url: 'https://path.bigtentgames.com',
    backgroundColor: 'color(display-p3 0.3608 0.7882 0.9804)',
    screenshots: ['1.png', '2.png', '3.png'],
    bannerText: 'alpha',
    bannerType: 'alpha',
    isMobileFirst: false,
  }),
];
