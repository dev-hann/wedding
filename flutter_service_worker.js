'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"index.html": "d088def85ae9eb0b98fe2f5019a03a09",
"/": "d088def85ae9eb0b98fe2f5019a03a09",
"manifest.json": "7e0930329646215e01fd94c0695a046c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "25d49fd6c9bfc78ac997b0d2ee162e7b",
"assets/AssetManifest.bin.json": "ea3ccf6dd9897838401441a461fce89a",
"assets/fonts/MaterialIcons-Regular.otf": "2d4ca35b9032701c4170ff449d41d902",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "7c44dce780233ad994f3547a83d76f87",
"assets/assets/audio/bgm.mp3": "afd4876a5da49c6655b36d08df29442f",
"assets/AssetManifest.json": "08e624d0d9ac0d86f52d8291734fdc22",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
".git/config": "4f6543dae9d00e72298ead7303531d7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "59422d0e33118cc2aa4a7c42216b42f4",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/objects/86/bba7116b0d46d9fdc50b6cdf039a92763fb02d": "30ba8c17596a933d5d8859d602fe08fe",
".git/objects/86/dd98847868bd0d12337bf8d545364c7c51da28": "ffbebb2e4c024b6439bc57f32c9e3ad9",
".git/objects/86/fc0ba6c02fac52d37127b515d5b1addcb3ed59": "51f05fd0126381df72f398b6b7fe8874",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/42/4d5aa567c2eedaa880336a9eb08fea24210205": "7925003c842327044d9932395b465cb0",
".git/objects/58/0e86c134ab59900398672fcc49f33a8cba5847": "4d54ba6e1eecfd5630bd49c7e7a99525",
".git/objects/3f/58d9d5601acf55967edafd8c2b11186e2603dc": "3a874d005b7311055727815582ad84cd",
".git/objects/11/a79ecfa5812f0c49860c25d73c88f922a29137": "27de5c6726dd4572af8db1a0e9541de6",
".git/objects/79/c113f9b50178eefaedb999950fa206eaf6d645": "0a062ce1fa85a99ed952de77de2c04ee",
".git/objects/db/5f7725bff2db305547645f633702c9aed108d2": "228fb2c4a18dba00fbe6cb69ca8a09c3",
".git/objects/31/4a8deeba4481f92151c263e17773d4451fc2cf": "2684ab83e9e428e9dbd618b484b3a401",
".git/objects/31/219afccda9d98f4154fb86e4188fea68709714": "f1a7d16a2d8c79d487d2fc08e9cbf9da",
".git/objects/31/a87cb0b6a14d20c3ca5117adc213d44746fcd3": "e7e665a56a1f8cfc2eec4804f569869f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b3/d90cd9195c9c4f673da20d9ae87b6214541bae": "41641cd8e7982ffae2a87dfbee7f055e",
".git/objects/d6/d1da0279b364b44fb6a0ad02971e8cea86f12a": "be60c2180bf50a432cd23ca078350c76",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/cf/0cc83479c0176cd3c44790812c8431c39dedfb": "6f18b1f780cb0fa55929e92b0868e15d",
".git/objects/cf/b330be746f1acca4d0c050f417dc594bc44245": "7d3c6b7a2de190028975190de5c26aea",
".git/objects/44/116c6d5f3375aa4e451d5129beec53eb44b49b": "93c8de50e9dabe992d170a33a4ebd111",
".git/objects/02/5311f1ecfee7362ace8a8fb5e6ffe12a75aff4": "e178a26c5a1f77a43cbd715001f2c84a",
".git/objects/02/998fcdcd04c44902691aecfc772fd3c3bf1d0d": "6418a0fe067a20ef0a8af5cf3c07cbf3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d8/f639265d8437938a90598f2e4b57705635e9d8": "98ac30a913a8d193919db2bfa50336d8",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/72f7e91a5785a4f2bcc0d8ee85f00c71282be9": "9111281cb936c338269c02cae5da54fc",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fad61878874b168473946466cc956f490b267c": "897c7347c2718ab2898f26951c7636b7",
".git/objects/1f/b8aab949ba13c2021dca1a3e05935747be3c9b": "39ce102b41edc1ff29c00de55ca7b930",
".git/objects/1f/ff5d629a087147698286889cc39cc950106b00": "90d61ee43278c8880d8af5b6dc220595",
".git/objects/9a/613f0dcb14e9a73aa7c14a671672e3e4c6e753": "e35e4830a7890b3e57988892dacbf7ff",
".git/objects/c2/a75b952337adb0a3531b951d5115c5309f302d": "434881747a3c544d53f8fe6ec6892576",
".git/objects/80/a490cb94d8f278764e8ca7e23276583117ef03": "25c4af4720365da31dc313db70857067",
".git/objects/0e/a35e891796f2a5998c3bb9341592bb2d160d43": "afa57973bc7d7080754d92aa005806cf",
".git/objects/bd/97d48b5fb0083e1cdfb740506e3a985405bfad": "4d91f29d81393277b3229ded4c31d0c1",
".git/objects/bd/d202bdfac50ada407ee66e426381b25a15bab6": "9551c3ee4f31db21745c52c3cf9dacf2",
".git/objects/ac/d9af4617886a761162cc338269827d5853e434": "e86cc751f5c4773bf02f5b6b2e4a7d46",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/75/9a9ef678ef17d566e15284f186ba17a7241ad6": "d7189de0ab61662ce51e6c0b5ce9f856",
".git/objects/77/df8f0b243adce41bd3c1076e39de79526c50bf": "3098f339ce317cc242a378dcbf1d2a7c",
".git/objects/43/b483dd88b3358fd84845f0aba75d2f78a8f97e": "3764e53f3fe0bcfcf1f3dbf015b55156",
".git/objects/43/003923e240a3277e2fa548d36f862664fad445": "4e93f0bc85abd0189938284f47878f73",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/7f/78e0dc29a947c8dfe0983a7a6cbcc6eb48cb21": "2b3903da09a574c1a3e5850dddba21cb",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/0c/3644fb6797b20ff48e1ecaa5965833b5327a32": "62b4a589af171cd7e9a9d56f7b3b4cad",
".git/objects/98/ec2fcc597309709c577c90079f90e329f7b5ed": "59fe9e86ef3d79728ed286059cd7ac42",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/e0/4c914aa6b30fd1cdf57a7c5f8a4a0f2d0a98b2": "0739c092f4089b753868bc7f00afbeb5",
".git/objects/21/5085ad81739772dc8f6927454b706ba26328ed": "523570432239755e4578bfb4d005b5cc",
".git/objects/04/e6c866e5900387902a8e3710f8a72a03c9bc2c": "a6deccf3251f9ff984b05633a965482c",
".git/objects/f9/b441ddbf6dedd23e731361635652a47062db0b": "297278c86b0a739d301d31754daa174e",
".git/objects/f9/052e36f3828fc07345ad3b151fa16ab7b8c764": "ef940b904cfcb26a53927d151fc31f8c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/fe/a2224db0bb039d577cfd547d9d0f2cf86fdc8f": "953f963087e1c568859cb25570a0ef6c",
".git/objects/fe/f3ed496e62fb047ac2c3bd34da4077e1abce17": "81a0952ed641d878323ca0c10e8f2329",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/36/61ab7561810a785c9b46117a14eee2132fe67f": "b444dc9fa68bbc49784ebd032f983f05",
".git/objects/9d/0d386d179b11f4965c9fda1ded9fae987d0d57": "72412c1e7424b1defc1b8bbc4f6f43d8",
".git/objects/27/9fba461daf1a89a21232c258443a0dc02a1cd6": "bd78a29c32da30e342aa17e01bb9148a",
".git/objects/be/839370cc46da19685a88c1aa5aa348db8e2f4d": "ec75d5347e35cab4602e3d38ae9c2a23",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/28/ecf52297d3d7d50eb0bfcecd02f9e877667cfa": "95dc4dd04995103b94d184bfabf7282d",
".git/objects/d0/7bada41203934dcee11f1dbc68d16abe6e4a14": "aa014bde93ef711b17028c3177beb99f",
".git/objects/47/3ed8e45003b3db27c700d114daa2824c5f278f": "d052ecfe9ff52708d7d7bef3eb66db33",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/61/8b969299abac51ded8abc846eeee417afab337": "1a1a2de355e4e4bb442b97f0fa33c6d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e2682efd7adadd1a94a8f6e1667953c26369ab": "da006964018d64a3f4cc354068cffcb7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/070db3016265de76996935791a85e27f9586f9": "2907dc11466d5384e3cdd36e9de03be2",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/c4/4a3ecc8751d262de4032cc69051f0d18d2a29b": "7c075bea7e674fc1af50ab968ff22fe5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/ae/5eb93dc1f685ad206a559403969fc53c684640": "98f3eebc69e846a3f3fd392007ee7f64",
".git/objects/da/287b61b82a8c0f7f3f8fd49a776f17e05035de": "77078fd2321a20482efa50a184243a9c",
".git/objects/f6/f8909dec43b66a03df38fd0aee7ff543586d1a": "f052245edbbe148d9cb4cd9f1380bf46",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/3e/2ba6530ebfa0471f9b0185b6d73c4a8343d743": "417b506eb18ae1ea46f75a1bd2a41e7c",
".git/objects/4b/bc363397297f1e0b89cbfce4ca10c9f3b6504f": "1af1d3cf80cc2b13471e49b4cc64787b",
".git/objects/82/8ef16145e5ae4907a7738083b8e8db63a27083": "1bc4cc7ed6110007401bd0a6e81e3fc3",
".git/objects/54/225625f161ca49d49e687365a07ea52774f3d5": "40f04599cd40dbd8792aa14c83a1ab80",
".git/objects/d1/4354852d0684f5c81ab392b4d90133a516a107": "4cf14bcbca0c6667ba5d7711eaa6e251",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/6b/658a23aec1b9dd7981f1bcfb2bae4982f4f8b8": "8e030d4f57d5b8b0be8a884853af06bb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/c8/f96a3fb6cd41d7781242b9be9a0963718f631b": "ef404036635c2a8203f5ca5e07868232",
".git/objects/0b/34385c4821b76b63ff7e0397a1eb8399138036": "93aecf87a29194a1e9c479c1ed494d91",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/c7/bfba939b5f512d38793cf207cb7e55a0752f35": "49361afe37e2ae68352e0f0f88bb50ac",
".git/objects/f1/90042acde6142d0310c477f5f5d48d59ae888e": "4a9b6340a7964db4b114500f8ac88726",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/50/b1af07ed00e5cc97b5e74e5b070df395fdbc03": "43805ed541019d077172e9dfa80ee7dc",
".git/logs/HEAD": "0ec2f916b94b2c2218f6bc0c6c5d55ee",
".git/logs/refs/heads/gh-pages": "b91c4c59aaf4b8fa81330ba7ee191c12",
".git/logs/refs/remotes/gh-pages/gh-pages": "912bb6b1a90bb281dbfe9a5a6679aa06",
".git/logs/refs/remotes/gh-pages/main": "9cd0bf4371b66290acc76fe076780fa0",
".git/COMMIT_EDITMSG": "93a5ab39a09832651c28eb4637495b9e",
".git/refs/heads/gh-pages": "79c50fc6988611f420b537cc9c40b383",
".git/refs/remotes/gh-pages/gh-pages": "79c50fc6988611f420b537cc9c40b383",
".git/refs/remotes/gh-pages/main": "ce469061ae956de347b27fc4310fcdcb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "d7388ab31c972b88eabcbc9d2d8fce4d",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js": "786dd2e21b5b7e53b35f3047317654db",
"flutter_bootstrap.js": "bab0b64a4bd902020a9be8097eba315d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "3d0a8b3e454aa8006e8b32fefcd8e5e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
