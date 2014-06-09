/* global angular */
angular.module('antherion').factory('apps',
  function () {
    'use strict';
    var apps = [
      {
        title: 'Hue Spectrum',
        key: 'hue-spectrum',
        group: 'iPhone Games',
        color1: '#1e7c11',
        color2: '#00f4e7',
        desc: [
          'Hue Spectrum is an exciting, side-scrolling game with a very unique graphical style. In each level you\'ll find yourself faced with a puzzle more challenging than the last. Strategically place your blocks by using the hue activators to reach your goal. Be carefull not to wall yourself into a corner or take a free-fall into oblivion!'
        ],
        store: 'http://itunes.apple.com/us/app/hue-spectrum/id320956959?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Crazy Pipes',
        key: 'crazy-pipes',
        group: 'iPhone Games',
        color1: '#0a6ad0',
        color2: '#0fb4e7',
        desc: [
          'UPDATE!!! Crazy Pipes now features three exciting modes of play! Now try "Tap to Swap" and "Rotate" modes by entering the new settings screen. (See "How To Play" for details.)',
          'Crazy Pipes is a port of the classic game "pipe dreams". You race to move pipes into any fluid-friendly configuration that will keep the flow going. The longer you keep the fluid flowing, the higher your score!',
          'Each level requires you to align a minimum number of pipes. Once your goal is reached, keep going to rack up an amazing score.',
          'Since your high score is recorded, each game is another chance to beat your personal best. First, let your friends play the game and then show them your stuff!'
        ],
        store: 'http://itunes.apple.com/us/app/crazy-pipes/id293390964?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Slider Deluxe',
        key: 'slider-deluxe',
        group: 'iPhone Games',
        color1: '#31c5b5',
        color2: '#0fb4e7',
        desc: [
          '"Slider Deluxe" is an enhanced rendition of the classic tile sliding game. With unlimited photo options, many challenging board sizes, and enhanced sliding behaviors, you are ensured hours of enjoyment.',
          'Try our unique photo library, or select any of the photos stored on your handheld device. If you still don\'t see what you want, simply snap a new photo with your iPhone and you are off and playing.',
          'Slider Deluxe displays play time and number of moves. Match wits with your friends or see if you can set a new personal record. (Try to beat our studio best: A 4 x 4 puzzle in 13 seconds and 32 moves!)',
          'Enjoy our game!! But don\'t blame us if you miss your flight or that important meeting.'
        ],
        store: 'http://itunes.apple.com/us/app/slider-deluxe/id287813698?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Ants',
        key: 'ants',
        group: 'iPhone Games',
        color1: '#6e78aa',
        color2: '#5A91FC',
        desc: [
          'UPDATE: Ants has been submitted and is in review at Apple. Expect it on the store within a couple days!',
          'Ants is a great and simple relief and best of all, it\'s absolutely FREE. If you get frustrated playing Angry Birds, Tiny Wings, Tetris, or Fruit Ninja then Ants is the game for you. Get ready for hours of mindless, relaxing fun (Unless you\'re an ant).',
          'The game will keep track of how many ants you\'ve squished from day one, making it easy to try and best your friends\' scores.',
          'No Actual Ants were harmed in the making of this game.'
        ],
        store: false,
        numScreens: 2
      },
      {
        title: 'Slider Lite',
        key: 'slider-lite',
        group: 'iPhone Games',
        color1: '#cd8f1e',
        color2: '#B09E00',
        desc: [
          'Slider Lite is the free version of the popular Slider Deluxe!',
          'It is an enhanced rendition of the classic tile sliding game. With unlimited photo options, many challenging board sizes, and enhanced sliding behaviors, you are ensured hours of enjoyment.',
          'Try our unique photo library, or select any of the photos stored on your handheld device. If you still don\'t see what you want, simply snap a new photo with your iPhone and you are off and playing.',
          'Slider Deluxe (& Lite) both display play time and number of moves. Match wits with your friends or see if you can set a new personal record. Scores are also saved in an online leaderboard. (Become one the best players out there by completing a 4 x 4 puzzle in 10 seconds!)',
          'Enjoy our game!! But don\'t blame us if you miss your flight or that important meeting.'
        ],
        store: 'http://itunes.apple.com/us/app/slider-lite/id454398940?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Slider Deluxe HD',
        key: 'slider-deluxe-hd',
        group: 'iPad Games',
        color1: '#ac4b36',
        color2: '#dc8567',
        desc: [
          '"Slider Deluxe HD" is an enhanced rendition of the classic tile sliding game, now available on the iPad!! With unlimited photo options, many challenging board sizes, and enhanced sliding behaviors, you are ensured hours of enjoyment.',
          'Try our unique photo library, or select any of the photos stored on your handheld device. If you still don\'t see what you want, simply snap a new photo with your iPhone and you are off and playing.',
          'Slider Deluxe HD displays play time and number of moves. Match wits with your friends or see if you can set a new personal record. (Try to beat our studio best: A 4 x 4 puzzle in 13 seconds and 32 moves!)',
          'Enjoy our game!! But don\'t blame us if you miss your flight or that important meeting.'
        ],
        store: false,
        numScreens: 0
      },
      {
        title: 'Slider Lite HD',
        key: 'slider-lite-hd',
        group: 'iPad Games',
        color1: '#6fa01b',
        color2: '#b0d700',
        desc: [
          'Slider Lite HD is the free version of the popular Slider Deluxe HD! Now available on the iPad!!',
          'It is an enhanced rendition of the classic tile sliding game. With unlimited photo options, many challenging board sizes, and enhanced sliding behaviors, you are ensured hours of enjoyment.',
          'Try our unique photo library, or select any of the photos stored on your handheld device. If you still don\'t see what you want, simply snap a new photo with your iPhone and you are off and playing.',
          'Slider Deluxe HD (& Lite HD) both display play time and number of moves. Match wits with your friends or see if you can set a new personal record. Scores are also saved in an online leaderboard. (Become one the best players out there by completing a 4 x 4 puzzle in 10 seconds!)',
          'Enjoy our game!! But don\'t blame us if you miss your flight or that important meeting.'
        ],
        store: false,
        numScreens: 0
      },
      {
        title: 'Teachings of the Prophets',
        key: 'teachings',
        group: 'iPhone Books',
        color1: '#bdba25',
        color2: '#B0C190',
        desc: [
          'An essential FREE companion to the iPhone LDS Scriptures App, Teachings of the Prophets is an easy to use reader for the current LDS Priesthood/Relief Society Manual: Teachings of the Presidents of the Church.',
          'This version displays the current "Joseph Smith" manual content as found on www.lds.org.',
          '(For family-friendly game/puzzle apps, see our other titles in the App Store. All purchases will go to support our primary programmer as he serves in the Catania Italy mission.)'
        ],
        store: 'http://itunes.apple.com/us/app/teachings-of-the-prophets/id316062997?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Insegnamenti dei Profeti',
        key: 'insegnamenti',
        group: 'iPhone Books',
        color1: '#8a120c',
        color2: '#D09190',
        desc: [
          'Una essenziale applicazione per chi studia le scritture, Insegnamenti dei Profeti è molto facile di usare. Contiene il manuale, Insegnamenti dei Presidenti della Chiesa.',
          'Questa versione contiene il manuale di Joseph Smith come trovato sul sito della Chiesa www.lds.org.',
          '(Per giochi di divertimento per la famiglia, cerca i nostri applicazioni nel App Store. Tutti i soldi vanno per aiutare un missionario tornato da Roma!)'
        ],
        store: 'http://itunes.apple.com/us/app/insegnamenti-dei-profeti/id451543437?mt=8&uo=4',
        numScreens: 5
      },
      {
        title: 'Principi Evangelici',
        key: 'principi',
        group: 'iPhone Books',
        color1: '#6d3ae1',
        color2: '#5fb4e7',
        desc: [
          'Una essenziale applicazione per chi studia le scritture, Principi Evangelici è molto facile di usare.',
          'Questa versione contiene il manuale di Principi Evangelici come trovato sul sito della Chiesa www.lds.org.',
          '(Per giochi di divertimento per la famiglia, cerca i nostri applicazioni nel App Store. Tutti i soldi vanno per aiutare un missionario tornato da Roma!)'
        ],
        store: 'http://itunes.apple.com/us/app/principi-evangelici/id451657758?mt=8&uo=4',
        numScreens: 5
      }
    ];
    return apps;
  }
);
