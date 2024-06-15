'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1cdd21801f6f965ecfcb04a4e3e3b524",
".git/config": "6a93358d7d824fe46c46b9ad2fe10c4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0ededaea4f34d718c5256caaf91ba22",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "deac9d263a9370b2eec7090e2285e4a2",
".git/logs/refs/heads/main": "cb5c269156bbad3f5d689ffec034bc88",
".git/logs/refs/remotes/origin/main": "b501fd5b5d9779a7da581137db268724",
".git/objects/03/25e52e02748974aab0706b6715f91933629d55": "64bb2e28b7a7c39e7d2868f3df535999",
".git/objects/04/9930675c8053fbc0a9281c66ef8a9ed9871875": "0b273dd1951909856ed6b94f0eb02786",
".git/objects/04/c1fad149e37e023fe3538addd2fafa3b262afd": "55c325c3ce57423dd7f8e3699be120e0",
".git/objects/07/5fbe112b0dc7226c2d3e01b6f54dcd55d10ff2": "ac5fc149b76cd5da1d9ce392655f6da5",
".git/objects/0c/494617fdba66697564f9db43b5def9ef4e3917": "da507c6777f0e4911d4ccfcba5f76d1e",
".git/objects/0e/6b02988b4725bb86bc8e1c6f7543f52e184c41": "854632c7afba123b1f6ad144e3fbd360",
".git/objects/0f/2fa6bb865a062431ea7183bd1b93b90fcadebf": "df99bfc735e3a2fd51f853c462dbc4f9",
".git/objects/0f/a7ee411d3a68dd7d5a69f1813f1fad89a70f90": "a688935a18ea00978b5187bd2020afca",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/3714fa9bf7159753e4452a7329f224f94921d7": "f6ab6289ca0c68a9ac69c5b7d789d0b1",
".git/objects/16/37d6b0ed9b9fcc9e098554f55b712949476614": "64dd5e372708e641137d8dfee0fca6c9",
".git/objects/16/938782cfe86eeee3ec5db238462ec627aec2ef": "d0a9a73949949f45ef1f10acb444e5e4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/c282c75935d7d3c0f075d1ffb874e0a4c0ba2a": "0530bc199e4adde607842286e9827fa7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/9834ba6b24aae4809d401abd3ef709376ad5ad": "7c650a32e43fffdd77a2fd802b6fb118",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/3e76dc54c17f79847102f083f4298d123281dd": "d6d4197b7a5a7db2d9ad0e581b234090",
".git/objects/28/e4ec7274785216157c40970c454abe8b50f87d": "0c0efa65603333002d4bdca3db4149a4",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2b/5b75f15c84a711682661baf9392c00367f5e0c": "277719c39ef8aea52352d3dc3d35d46b",
".git/objects/32/78a29bd7d9898e5500808129535568e25f3d2e": "411cfc2c903176c30802b9c0bf33b195",
".git/objects/33/abca388e5e637ff5e7346340b8d8743b1b7e13": "44321976051be9c4df49f0f6f959ceee",
".git/objects/34/3d678279219180955bbdc12cc2fa52ceb98e1c": "9cf60ed8a45ac67544c05104475ca44e",
".git/objects/3e/ca285bebf90d52b20346f38a0cea87b8daae5e": "86c744becb27bf2fc91a162b42d149af",
".git/objects/44/498e9d3e11a69f056d9b805966c95c5a860ea7": "e2872441e872fa0300247f89291005bc",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/46/d5a50377022eacbc4fba9a4c15dd29088fdee6": "93abbc726b886dc3b3d1195f3e48cba7",
".git/objects/46/dd676ca316af01c6077d46ca9a1d4b9255c9bf": "b9e80b5b7488fd799f429ce79ac8b2f8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/072ba885d0e78370b306d73deb47a518740508": "c59435a10f5fafbda7ccab3711ec99bd",
".git/objects/51/ab8b384f4dfeda7f0601662535f08063ebd108": "40e1a1c35741804495fea6f2328b6928",
".git/objects/51/ce4b8a8a5e1f180140a8efb47e08bfd0f31bc4": "ae77bca6acd4d7c6e46c9845399dd8fc",
".git/objects/53/297a874f1390948d8a2e5623b45b69b240e932": "853342f5c7dcf856515484b9186a7f3e",
".git/objects/53/c7dfa85568598b9a65e3dfb48116eb0e19e020": "ca26bd9874c8919dff432c980d02be59",
".git/objects/55/9f4d86742207e1f0adbe994f7b3172bfd120de": "3dfede394a93ca6e08f090fba9bcc923",
".git/objects/57/052a528068a6b26786d3f408f316ab6c2543ab": "d7eed6c18befc12ad0d89eac2583fbe8",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/a30d75f3f7cb1a23a6dad2867549dcbd7ac2da": "7aefa84fb06276e87db4d5b00288e8ed",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/690576ebe52bda79c04a0f2031740725290640": "2ced894f903a70c83158e7016039c9f7",
".git/objects/6b/6d12c1fa57dfcfa2281b39c05debe4f8621241": "4d6e3b35e617548b5e252877e3f6d90d",
".git/objects/6d/61e9b5bb89a60c43d0d5bba4f076032edf6e64": "84d7ac866476613ebd1d6628c4673f65",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/c849c24269ff5fd32e4713ee3a79e2d48d4e9f": "7f7e5bba148c51b5223c777db5ada2d5",
".git/objects/75/9a2fa4769357e11599f9dffcbce1e8722d7e14": "cd7a37cf8e3fb9fd2214cf1dccb79735",
".git/objects/75/f194caed7aa493655180bcb06445b461f847c5": "d1d38576400974d89b7402e7d965b756",
".git/objects/78/94b438e9b23169fadf4b972326d38d7676cf29": "3d61db0cc258737e111947669f42e195",
".git/objects/7a/de1f8824a91e9db1c9f1978c6c29cef6f3cfe7": "72ad1c1a8abe794505f0714310bec0e6",
".git/objects/80/476cd76a5896de51aff1a5ff4fc2e8f102883f": "d2b5e1859d9d83661a3f360855b72d26",
".git/objects/85/4220a381e8911a9ad8c1711e8705fd2ba19c87": "79cb3258312e7317490444f0e18fbf3c",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8c/02ba45f541c95b9a050e9e5376566065f9a15e": "5df34c0d2338016330f89f8b4fdd51ed",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/20cbdef496b06fbce1dec1ce98d86ebca7eaec": "99e4b3668272a680417d216348134767",
".git/objects/8e/ea7dcfe81ab8a7449d34c79de8c56d7c7811b7": "eb1026db5d766317161c36b19bb2a445",
".git/objects/90/d166111f3af1ee41db7afbf6a180bb391186f7": "d53c3ace61cf07653ddb212947cca5b5",
".git/objects/93/439fd509ca311d12c1375e2587b01067e3f235": "92ae00ed4d1708c1a1b74b1897b625d6",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/a5/11b3c53def7ad428791569a0a2b882b40d9020": "5ea71d5cb0f80abed126486c93aabb20",
".git/objects/a8/8f27cf72b163651d68a1b6d72804232dd6a3cb": "ce4c1f4d886c93f5aeff52fc14d777a7",
".git/objects/ab/1b0a95e189dc69f2bdb9810f3ddb9174b8884a": "9c654ee9a5dd90fbf240c4777019a693",
".git/objects/ac/d4d5a5a9623ec7da49e2636ab046b28f636803": "3421b01a3135702b912bc170b7987402",
".git/objects/b2/192fbb1f0726ae2f0e0e35a256e2eb3ef4d3cb": "47ce73ec4f682ac5ac37ed7e31b01384",
".git/objects/b3/0563e582af140f4e5767689b3d7a5b77af9329": "844f0610da22cb758aa90b117b94daa9",
".git/objects/b3/cfffa37ba0beccd307e39a78e4fc6ed160d283": "d8f2e950845099b4c567067a712983a8",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/a32f8985e89de6528c05fb6e611cb25d6fef19": "f52892f2670032f9b8651d7b15f6561c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/bd/5588cc94a7d27469968a91f3e310f9919261fd": "03d49ea51e5a347d426f28031a9257f0",
".git/objects/bd/e0e77f651b4afab1c53e577e395a5c959f3921": "f5ec4b4616ca15bb49fbbb31cf5c6ad6",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c6/ef5c1d780e0f018811b08e5c949aefb51ca539": "9dad3fe6c01384f120dfd0718de12790",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/c88250107df05fdc5c069b4be11ea5f2c088cf": "df7e11ebd490b79322db1357da2eab7e",
".git/objects/cb/d1652af9ff99f3e285cce983a91ddc97293982": "5058f56f176447dc27e131dfa15eac87",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/832dbebc4e98c900fb156882d07f0b88db5812": "4230541b4c5251292963b2a41bacac53",
".git/objects/d3/d3ab1fed40ac5f7e0f7a50948a8ec3faf2a346": "d87f4cfd278490fb7bbac93013b68de3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/762e0ef6cb12cda1aecd2a97c304b7c97a5717": "8ca8b33aec07b0b417a9ee38ef7cff54",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/069434731a9803724b313f8870d3f3286628f1": "746cef04380c15f2e7d7e3f7963d88c3",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/dc/57319b3e4f32fd0452d9b49d971cc3c4c16cdf": "a285fabe06ee15f6476963c94303dd50",
".git/objects/dc/98f0c26b4307c1729d42fd5a5503dbdf488ef0": "aec4bfc14b33141b41aae9941fdd76bb",
".git/objects/df/aa5850d0580f3ed23a218f7a3c197d84e93254": "c845d1e0baeeee1997b6bbe66d5713e2",
".git/objects/e0/9c526783dd7cd2125ae1310091a312706e1071": "7701d891a418bdfec9519ac78959814d",
".git/objects/e2/786763dc49b04de7f32564ba1b018aebdd751d": "c20c225695cc5b988ea93d373d9685f7",
".git/objects/e5/0aa43a332558161e0932038b29b08829ead475": "c3bc27e61e4a26e808f2a49ed2371bb3",
".git/objects/e8/1600417bd7a473fec5073414fc23512a9f94dd": "bd73831832f990b07147c2f4f2505e3d",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/db7f6a9fea8d52f6ef29e374712b7e48c823ff": "cf0aa63c5750db3d0596eb6a5e320b79",
".git/objects/fc/8b39f9c29573a326decf103620ce973915ab32": "d5e5f6c2187c6c368b32367b54ad3d63",
".git/objects/fe/2f9a60ae0644830d34ece45a31ebedb8ee26c5": "69938d73f4b99eedb8e359fbe3c9b69e",
".git/refs/heads/main": "cd77df784010e6e8bbf0e0f551c3efb6",
".git/refs/remotes/origin/main": "cd77df784010e6e8bbf0e0f551c3efb6",
"assets/AssetManifest.bin": "96f11ab536efddfc3507d3080b7f330a",
"assets/AssetManifest.bin.json": "abb64107507c81fead18354a3abc06fa",
"assets/AssetManifest.json": "12a79a28d1420d6ce05492f130b0c108",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/android_logo.png": "6225755a721ff7757ce35fb0031c5aa2",
"assets/assets/images/api-interface.png": "7fbf522543b89a958fa310aaec76d74d",
"assets/assets/images/c%2523_logo.png": "a2ac4142b22beebab6ab6db956f66f5d",
"assets/assets/images/dart.png": "6e9cdfb3178b7d68e392fa8399630f0c",
"assets/assets/images/ezgif-3-7162fb7e6d.gif": "769e343cec3de9f638911859aa679fca",
"assets/assets/images/figma.png": "16feaa6fbde1aeb849cd3a4d99ccb801",
"assets/assets/images/firebase.png": "978bd80e3cdf987dbaddb44a9c9b8434",
"assets/assets/images/flutter.png": "bb75a8da0b85488d87e59a2e522115c0",
"assets/assets/images/flutterimg.png": "05ad3ca19a2f2666f9368eee460aea0b",
"assets/assets/images/githublogo.png": "3d5e73d93eb444d2b38f3ac2caf53c05",
"assets/assets/images/hand_weaving.gif": "5a555338873b1e27a5bdfff52d1e28bf",
"assets/assets/images/java.png": "3239d13f6545753a92b8daa6ed29053c",
"assets/assets/images/logo.png": "47dbcb54438207aef8d6c61d7e9645ac",
"assets/assets/images/mypic.jpg": "e4a82e456061541d0b40b7347a2b4c6c",
"assets/assets/images/php.png": "d220f28a1d60d04530bb2c81c41e3683",
"assets/assets/images/postman-icon.png": "872de4667c364065586a18df922bdf31",
"assets/assets/images/sql.png": "0eebb1788ad1e46530a84cee76aa27c1",
"assets/assets/images/sqlite_logo.png": "4189991610dc7769f7063dd566c8bbe8",
"assets/assets/images/sqlserver_logo.png": "3620c268adf3c72a2d9959519b92d9ac",
"assets/assets/images/weather_api_logo.jpg": "567ed81b604748b156c0946742f425a1",
"assets/assets/images/winforms-logo.png": "fd08e38f3ebbd56c5e71f89d086c850b",
"assets/assets/project_banners/bigcart_banner_1.png": "14e566233eaff6e6f00f0464a13b0a68",
"assets/assets/project_banners/bigcart_logo.png": "07ba5c239a300578d709b109ba3970fc",
"assets/assets/project_banners/jobposting_banner_1.png": "1c960f02df3de2f0b918851da105a4d5",
"assets/assets/project_banners/onlineshoppingcenter_banner_1.jpg": "505f718e9ee7546d99048aeffd4306e2",
"assets/assets/project_banners/pcr_banner_1.png": "8b73c58a203b73b4250441015d6c5a10",
"assets/assets/project_banners/salon_banner_1.png": "8728fee55edebc8881f66d418a52f2a2",
"assets/assets/project_banners/salon_banner_2.png": "4da1b942dd7164ce8868c342285dbe83",
"assets/assets/project_banners/sms_banner_1.jpg": "717c74720f3ef8fb6bff6a3ac3fcf2bb",
"assets/assets/project_banners/Thumbnail%2520(1).jpg": "540c0def399e6d9a3b2e097902655b4e",
"assets/assets/project_banners/Thumbnail%2520(2).jpg": "1b22185083a356c7d93505eaa4f99587",
"assets/assets/project_banners/tictactoe_banner_1.png": "94ee9c141a7a30c04c96abcef555e227",
"assets/assets/project_banners/tictactoe_logo.png": "12e77a39af8520f2b7021909042843ca",
"assets/assets/project_banners/univbuddy_banner_1.png": "9ac17cb56ab82923990999c04017d466",
"assets/assets/project_banners/univbuddy_banner_2.png": "56d26db4987a35dc00b1efcd1fc3f499",
"assets/assets/project_banners/univbuddy_logo.png": "e3133caf3ade919d8644fae5025ca5cd",
"assets/assets/project_banners/weather_banner_1.png": "4f824518dd942ddaf274c5cf1b2edd17",
"assets/assets/project_banners/weather_logo.png": "c9c52f11fa233ac5489fbc09aa1e60dd",
"assets/FontManifest.json": "158490315554d991fee4814a46477d3e",
"assets/fonts/MaterialIcons-Regular.otf": "04b115ae8666564645bb76d22fdc359c",
"assets/NOTICES": "d29c6e6485871f3ddb52cebfbe9fa770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2e372eb7eba278403c6be15037aa2760",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8c33d88d2c4e3d33b2d55f70e7d42f72",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e1fc99b069068b68201fd0ffa7830800",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c3f5ca97a29286b8f4d228414200fd16",
"icons/android-chrome-192x192.png": "bdf57ae41b971a7cdebbca36259718d2",
"icons/android-chrome-512x512.png": "d16aa23585ca56426b78a0f1696b951f",
"icons/apple-touch-icon.png": "0cb0ed0ca285ebcf15355f0366669bc2",
"icons/favicon-16x16.png": "1992b9e1d9163d93c781089d60bb3bcc",
"icons/favicon-32x32.png": "700ad3a124eb33ea824fb1a26e0f27be",
"icons/favicon.ico": "f6917e090fe652946fea85043de67e5e",
"index.html": "37397dcec1f6d409e70ff076271f0138",
"/": "37397dcec1f6d409e70ff076271f0138",
"logo.png": "47dbcb54438207aef8d6c61d7e9645ac",
"main.dart.js": "cf06e7d1f168554509b3cfa4f1625b0c",
"manifest.json": "c4785037fe38992c0e8246a5b04132fe",
"version.json": "8b06583e92b6a18699cdda670ca83114"};
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
