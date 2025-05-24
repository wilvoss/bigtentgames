class PageObject {
  constructor(spec) {
    this.name = spec.name == undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? 'description' : spec.description;
    this.price = spec.price == undefined ? 0 : spec.price;
    this.priceText = spec.priceText === undefined ? 'Free' : spec.priceText;
    this.googleplayurl = spec.googleplayurl == undefined ? '' : spec.googleplayurl;
    this.appleappstoreurl = spec.appleappstoreurl == undefined ? '' : spec.appleappstoreurl;
    this.msappstore = spec.msappstore == undefined ? '' : spec.msappstore;
    this.about = spec.about == undefined ? '' : spec.about;
    this.aboutExtra = spec.aboutExtra == undefined ? '' : spec.aboutExtra;
    this.showMore = spec.showMore === undefined ? false : spec.showMore;
    this.video = spec.video === undefined ? '' : spec.video;
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
    this.features = spec.features === undefined ? [] : spec.features;
    this.screenshots = spec.screenshots === undefined ? [] : spec.screenshots;
    this.isMobileFirst = spec.isMobileFirst === undefined ? true : spec.isMobileFirst;
    this.communities = spec.communities === undefined ? [] : spec.communities;
    this.quotes = spec.quotes === undefined ? [] : spec.quotes;
    this.isPWA = spec.isPWA === undefined ? true : spec.isPWA;
  }
}

var Pages = [
  new PageObject({
    name: 'Home',
    description: 'Home page.',
    path: 'home',
    url: '.',
    showAsGame: false,
    useBanner: false,
  }),
  new PageObject({
    name: 'Privacy Policy',
    description: 'Privacy Policy page.',
    path: 'privacy',
    url: '.',
    showAsGame: false,
    useBanner: false,
    showInNav: false,
    backgroundColor: 'hsl(var(--bannerHS), 25%)',
  }),
  new PageObject({
    name: 'Facets!',
    priceText: 'free',
    bannerText: 'free',
    bannerType: 'free',
    isPWA: false,
    description: 'A game of connecting words and friends',
    about: 'If you\'ve played "Connections," "CodeNames," or "So Clover," you\'ll be right at home with Facets! This quick online game challenges you to create or guess word puzzles that can bring you and your friends closer to each other.',
    aboutExtra: [
      '<h2>About</h2>',
      '<p>The challenge of "Facets" is to connect different words that may or may not be easily connected. Players take turns guessing and giving puzzles over social media, text, messages, or other chat apps.</p>',
      '<p>Choose words in different languages (English, Spanish, French, and Japanese so far) from a growing catalog of word categories like "Civilization," "Entertainment," "Science," and "Seasons." Each category provides a unique window into how you and your friends think or don\'t think alike!</p>',
      "<ul><li>When the gem is a sapphire, you are creating a puzzle.</li><li>When the gem is an emerald, you are guessing a puzzle a friend sent you.</li><li>When the gem is a ruby, you are reviewing a friend's guess.</li></ul>",
      '<p>Because the game is entirely URL based, no other information is stored on a server or in the cloud. URL based turns also means you can revisit any guess or challenge any time, as long as you have the original message your friend sent you.',
    ],
    path: 'facets',
    url: 'https://facets.bigtentgames.com/open',
    features: ['Word play', 'Low stakes', 'Fast paced', 'Turn based', 'Casual game play', 'Brain training'],
    screenshots: ['6.png', '1.png', '2.png', '3.png', '4.png', '5.png'],
    backgroundColor: 'rgb(46, 106, 149)',
  }),
  new PageObject({
    name: 'Like Me?',
    description: 'A game of matching likenesses',
    path: 'likeme',
    url: 'https://likeme.games',
    features: ['Brain training', 'Casual gameplay', 'Competitive gameplay', 'Alternate patterns', 'Color themes', 'Dark mode', 'Cat mode!', 'Score sharing', 'High scores'],
    // googleplayurl: 'https://play.google.com/store/apps/details?id=game.likeme.twa',
    // appleappstoreurl: 'https://apps.apple.com/us/app/like-me/id6466331042',
    // msappstore: 'https://apps.microsoft.com/store/detail/like-me/9NRLDSV9R06P',
    about: '<p>Reminiscent of the card game "Set," the object of this fast-paced, casual mobile game is to observe the "Me" piece and then select all other pieces on the board that share <b>at least 2</b> of the following 3 attributes: color, shape, and pattern. There are 4 unique games modes for all types of players!</p>',
    aboutExtra: [
      '<h2>Ranks</h2>',
      '<p>There are 7 ranks that you can unlock as you improve over time. Each rank increases the number of levels per game. In order to unlock the next higher rank, you have to clear 3 perfect levels at the current rank. Are you a "Super Selector"?<p>',
      '<h2>Game Modes</h2>',
      '<p><b>Basic Mode</b><br />This is the default mode. Your game starts with a one minute countdown. Clear as many levels as possible. Getting a level right on your first guess adds 3 seconds to the countdown. At first, players typically only clear a few levels per game. Eventually, players start clearing 100s of levels per game!</p>',
      '<p><b>Daily Challenge</b><br />Compete with your friends with daily, pre-generated levels. The number of levels in your daily challenge is dependant on your current rank.<p>',
      '<p><b>Zen Mode</b><br />No timer and no stress. Think of this as a flow enabling, fidget-spinning brain trainer.</p>',
    ],
    backgroundColor: 'hsla(187.2, 42.74%, 45.88%, 1)',
    screenshots: ['2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
    video: { url: 'video.mp4', thumbnail: '1.png' },
    priceText: 'free',
    bannerText: 'free',
    bannerType: 'free',
    quotes: [
      { statement: 'This has all the speed of a game like Piano Tiles mixed with some tricksy pattern matching logic. Very fun!', attribution: 'godswearhats', rating: 5 },
      { statement: 'Love it! I thought it was going to be simple, but it is deceptively challenging!', attribution: 'fg6jgddgue', rating: 5 },
      { statement: 'Endless fun! This game is so hard to put down. I love pattern matching!', attribution: 'MsSparkyCat', rating: 5 },
      { statement: 'That was fun! Nice lightweight game but puts your brain to work!', attribution: 'Shon D.', rating: 5 },
      { statement: 'A great matching game for all!', attribution: 'RayaL08', rating: 5 },
      { statement: 'Simple, elegant, and FUN!', attribution: 'TheRealJunipurr', rating: 5 },
      { statement: 'Me Like! What a fun and elegant game!', attribution: 'domosquawk', rating: 5 },
      { statement: 'Fun game! The more I play it, the more I like it! ', attribution: 'Checksov', rating: 5 },
    ],
    communities: [
      {
        service: 'Discord',
        name: 'Big Tent Games Server',
        url: 'https://discord.gg/sJ3vG3RHZd',
        links: [
          { name: '#likeme-general', url: 'https://discord.com/channels/1148025462598139934/1148026844562604063' },
          { name: '#likeme-scores', url: 'https://discord.com/channels/1148025462598139934/1148345172304867450' },
          { name: '#likeme-feedback', url: 'https://discord.com/channels/1148025462598139934/1149745093604020364' },
          { name: '#likeme-bug-reports', url: 'https://discord.com/channels/1148025462598139934/1149745122624413836' },
        ],
      },
    ],
    version: '4.2.219',
  }),
  new PageObject({
    name: "Drop 'n Stop!",
    description: 'The puck stops here',
    about: 'Fast and fun, the object of this game is to test your reaction time. Hold the drop button and release when the puck hits the dropzone.',
    path: 'dropnstop',
    url: 'https://dropnstop.bigtentgames.com',
    features: ['Fast paced', 'Casual game play', 'Brain training', 'Reaction training', 'Different difficulty levels', 'Color themes', 'Score sharing'],
    screenshots: ['1.png', '2.png', '3.png', '4.png', '5.png'],
    backgroundColor: 'rgb(49, 121, 76)',
  }),
  new PageObject({
    name: 'CommOddities!',
    description: 'Not everything is an easy sell',
    about: 'If you ever played "Dope Wars" on a Palm Pilot back in the day, then you have an idea how this game plays. Basically you have 365 "days" to buy/sell for as much profit as possible. Your moral compass will be tested!',
    path: 'commoddities',
    url: 'https://commoddities.bigtentgames.com',
    screenshots: ['1.png', '2.png', '3.png', '4.png', '5.png', '7.png'],
    bannerText: 'alpha',
    bannerType: 'alpha',
    backgroundColor: 'rgb(22, 130, 152)',
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
