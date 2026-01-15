const updateDate = '14.01.2026';

const remotePlugins = [
  {
    name: { ru: 'MyShows', uk: 'MyShows', en: 'MyShows' },
    url: 'https://igorek1986.github.io/lampa-plugins/myshows.js',
    description: {
      ru: 'Плагин для синхронизации сервиса MyShows с Lampa.',
      uk: 'Плагін для синхронізації сервісу MyShows з Lampa.',
      en: 'Plugin for syncing the MyShows service with Lampa.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'TraktTV', uk: 'TraktTV', en: 'TraktTV' },
    url: 'https://lampame.github.io/main/trakttv.js',
    description: {
      ru: 'Интеграция аккаунта Trakt.tv в Lampa с разделами списков, прогресса и календаря сериалов.',
      uk: 'Інтеграція акаунту Trakt.tv у Lampa зі списками, прогресом та календарем серіалів.',
      en: 'Integrates Trakt.tv account into Lampa with lists, watch progress and TV calendar.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Series Skip Intro', uk: 'Series Skip Intro', en: 'Series Skip Intro' },
    url: 'https://honeyxcat.github.io/series-skip/series-skip.js',
    description: {
      ru: 'Автоматический пропуск интро и титров в сериалах. Работает только во встроенном плеере.',
      uk: 'Автоматичний пропуск інтро та титрів у серіалах. Працює лише у вбудованому плеєрі.',
      en: 'Automatically skips intros and credits in TV series. Works only in the built-in player.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Anime Skip', uk: 'Anime Skip', en: 'Anime Skip' },
    url: 'https://honeyxcat.github.io/lampa-anime-skip/anime-skip-min.js',
    description: {
      ru: 'Добавляет метки для пропуска опенингов и эндингов в аниме (Anime-Skip). Только встроенный плеер.',
      uk: 'Додає мітки для пропуску опенінгів та ендингів в аніме (Anime-Skip). Лише вбудований плеєр.',
      en: 'Adds skip markers for anime openings and endings using Anime-Skip database.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Online lampac grabber', uk: 'Online lampac grabber', en: 'Online lampac grabber' },
    url: 'https://honeyxcat.github.io/lampa-link-online/oooo.js',
    description: {
      ru: 'Получает онлайн-потоки из открытых Lampac.',
      uk: 'Отримує онлайн-потоки з відкритих Lampac.',
      en: 'Grabs online streams from open Lampac sources.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Установщик плагинов', uk: 'Встановлювач плагінів', en: 'Plugin Installer' },
    url: 'https://addonslmp.github.io/plugins/pluginsinstaller.js',
    description: {
      ru: 'Простая установка плагинов из пользовательского источника.',
      uk: 'Просте встановлення плагінів з користувацького джерела.',
      en: 'Simple plugin installation from a custom source.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Комментарии от Резки', uk: 'Коментарі від Rezka', en: 'Rezka Comments' },
    url: 'https://bdvburik.github.io/rezkacomment.js',
    description: {
      ru: 'Комментарии от сервиса Rezka.',
      uk: 'Коментарі від сервісу Rezka.',
      en: 'Comments from the Rezka service.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },
  {
    name: { ru: 'Block Shots', uk: 'Block Shots', en: 'Block Shots' },
    url: 'https://addonslmp.github.io/plugins/block_shots.js',
    description: {
      ru: 'Убирает сервис Shots.',
      uk: 'Прибирає сервіс Shots.',
      en: 'Removes the Shots service.'
    },
    category: { ru: 'Разное', uk: 'Різне', en: 'Misc' }
  },

  /* ───── КАТЕГОРИИ ───── */

  {
    name: {
      ru: 'Новые категории и подборки фильмов',
      uk: 'Нові категорії та добірки фільмів',
      en: 'New movie categories and collections'
    },
    url: 'https://lampaplugins.github.io/store/p.js',
    description: {
      ru: 'Добавляет новые категории фильмов.',
      uk: 'Додає нові категорії фільмів.',
      en: 'Adds new movie categories.'
    },
    category: { ru: 'Категории', uk: 'Категорії', en: 'Categories' }
  },
  {
    name: { ru: 'NUM Parser', uk: 'NUM Parser', en: 'NUM Parser' },
    url: 'https://igorek1986.github.io/lampa-plugins/np.js',
    description: {
      ru: 'Источник NUM.',
      uk: 'Джерело NUM.',
      en: 'NUM source.'
    },
    category: { ru: 'Категории', uk: 'Категорії', en: 'Categories' }
  },
  {
    name: { ru: 'Трейлеры новинок', uk: 'Трейлери новинок', en: 'Upcoming trailers' },
    url: 'https://mastermagic98.github.io/l_plugins/upcoming.js',
    description: {
      ru: 'Трейлеры новых фильмов и сериалов.',
      uk: 'Трейлери нових фільмів та серіалів.',
      en: 'Trailers for new movies and TV shows.'
    },
    category: { ru: 'Категории', uk: 'Категорії', en: 'Categories' }
  },

  /* ───── ОНЛАЙН ───── */

  {
    name: { ru: 'Online_Mod', uk: 'Online_Mod', en: 'Online_Mod' },
    url: 'https://nb557.github.io/plugins/online_mod.js',
    description: {
      ru: 'Онлайн источник.',
      uk: 'Онлайн джерело.',
      en: 'Online source.'
    },
    category: { ru: 'Онлайн', uk: 'Онлайн', en: 'Online' }
  },

  /* ───── IPTV ───── */

  {
    name: { ru: 'IPTV', uk: 'IPTV', en: 'IPTV' },
    url: 'https://plugin.rootu.top/tv.js',
    description: {
      ru: 'Просмотр собственных IPTV плейлистов в Lampa.',
      uk: 'Перегляд власних IPTV плейлистів у Lampa.',
      en: 'Watch your own IPTV playlists in Lampa.'
    },
    category: { ru: 'IPTV', uk: 'IPTV', en: 'IPTV' }
  }
];
