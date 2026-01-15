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

  //КАТЕГОРИИ 

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
    name: { ru: 'LNUM категория', uk: 'LNUM категорія', en: 'LNUM Parser' },
    url: 'https://levende.github.io/lampa-plugins/lnum.js',
    description: {
      ru: 'Источник Lnum.',
      uk: 'Джерело Lnum.',
      en: 'LNum source.'
    },
    category: { ru: 'Категории', uk: 'Категорії', en: 'Categories' }
  },
  {
    name: { ru: 'Surs категория', uk: 'Surs категорія', en: 'Surs category' },
    url: 'https://aviamovie.github.io/surs.js'',
    description: {
      ru: 'Плагин создает уникальные подборки фильмов и сериалов на главной странице по жанрам, стримингам, популярности, просмотрам и кассовым сборам.',
      uk: 'Плагін створює унікальні добірки фільмів і серіалів на головній сторінці за жанрами, стрімінгами, популярністю, переглядами та касовими зборами.',
      en: 'The plugin creates unique selections of movies and TV series on the main page by genre, streaming service, popularity, views, and box office earnings.'
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
  {
    name: { ru: '🇺🇦Hikka Anime', uk: '🇺🇦Hikka Anime', en: '🇺🇦Hikka Anime' },
    url: 'https://lampame.github.io/main/hikka.js',
    description: {
      ru: 'Hikka Anime — плагин для Lampa, который добавляет каталог аниме с hikka.io с полноценным поиском, фильтрами и сортировкой.',
      uk: 'Hikka Anime — плагін для Lampa, який додає каталог аніме з hikka.io з повноцінним пошуком, фільтрами та сортуванням.',
      en: 'Hikka Anime is a plugin for Lampa that adds an anime catalog from hikka.io with full search, filters, and sorting.'
    },
    category: { ru: 'Категории', uk: 'Категорії', en: 'Categories' }
  },

  //ИНТЕРФЕЙС

  {
    name: { ru: 'Logo Title', uk: 'Logo Title', en: 'Logo Title' },
    url: 'https://lampaplugins.github.io/store/logo.js',
    description: {
      ru: 'Лого фильма вместо названий.',
      uk: 'Логотип фільму замість назви.',
      en: 'Movie logos instead of titles.'
    },
    category: { ru: 'Интерфейс', uk: 'Інтерфейс', en: 'Interface' }
  },
  {
    name: { ru: 'Apple theme', uk: 'Apple theme', en: 'Apple theme' },
    url: 'https://darkestclouds.github.io/plugins/applecation/applecation.min.js',
    description: {
      ru: 'Интерфейс карточек в стиле Apple.',
      uk: 'Інтерфейс карток у стилі Apple.',
      en: 'Apple-style card interface.'
    },
    category: { ru: 'Интерфейс', uk: 'Інтерфейс', en: 'Interface' }
  },  
  {
    name: { ru: 'Interface Mod Plus', uk: 'Interface Mod Plus', en: 'Interface Mod Plus' },
    url: 'https://bywolf88.github.io/lampa-plugins/interface_mod_new.js',
    description: {
      ru: 'Подробная информация в карточке фильма или сериала.',
      uk: 'Детальна інформація в картці фільму або серіалу.',
      en: 'Detailed information in the movie or series card.'
    },
    category: { ru: 'Интерфейс', uk: 'Інтерфейс', en: 'Interface' }
  },       
   
  //ОНЛАЙН

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

