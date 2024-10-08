# [1.23.0](https://github.com/Automattic/newspack-blocks/compare/v1.22.1...v1.23.0) (2021-04-06)


### Features

* add new patterns for donation and subscribe ([#730](https://github.com/Automattic/newspack-blocks/issues/730)) ([a00cfd6](https://github.com/Automattic/newspack-blocks/commit/a00cfd6e54258afacdb8c5bb68152f38dbc04761))
* deduplication across homepage posts & carousel ([#725](https://github.com/Automattic/newspack-blocks/issues/725)) ([427c4e0](https://github.com/Automattic/newspack-blocks/commit/427c4e087d57dee1fba9f4d81ffc8486f735d2c0)), closes [#664](https://github.com/Automattic/newspack-blocks/issues/664)
* handle posts with no featured image ([#731](https://github.com/Automattic/newspack-blocks/issues/731)) ([0db34be](https://github.com/Automattic/newspack-blocks/commit/0db34be070f842acdc69f4b64212dcc2df4be2d8)), closes [#443](https://github.com/Automattic/newspack-blocks/issues/443)

## [1.22.1](https://github.com/Automattic/newspack-blocks/compare/v1.22.0...v1.22.1) (2021-03-30)


### Bug Fixes

* a PHP warning when editing newsletters ([#722](https://github.com/Automattic/newspack-blocks/issues/722)) ([41ce40e](https://github.com/Automattic/newspack-blocks/commit/41ce40e2e7843bb8a9bc58db7a37886eb86f84cc))

# [1.22.0](https://github.com/Automattic/newspack-blocks/compare/v1.21.1...v1.22.0) (2021-03-23)


### Features

* add new homepage posts patterns ([#717](https://github.com/Automattic/newspack-blocks/issues/717)) ([7957a9a](https://github.com/Automattic/newspack-blocks/commit/7957a9aed1f87e6572d22919b40315ef8fa84e61))

## [1.21.1](https://github.com/Automattic/newspack-blocks/compare/v1.21.0...v1.21.1) (2021-02-25)


### Bug Fixes

* update donate thank you message in Portuguese ([#706](https://github.com/Automattic/newspack-blocks/issues/706)) ([93c9da5](https://github.com/Automattic/newspack-blocks/commit/93c9da5a05f7666c1d7d4ef625ad252a00d7c14e))

# [1.21.0](https://github.com/Automattic/newspack-blocks/compare/v1.20.1...v1.21.0) (2021-02-16)


### Features

* add Portuguese translation to the blocks ([#698](https://github.com/Automattic/newspack-blocks/issues/698)) ([dedf0a3](https://github.com/Automattic/newspack-blocks/commit/dedf0a3bb2d9e898203c9a6c489aa550d7c66635))

## [1.20.1](https://github.com/Automattic/newspack-blocks/compare/v1.20.0...v1.20.1) (2021-02-11)


### Bug Fixes

* override WooCommerce Memberships excerpt length in block ([#694](https://github.com/Automattic/newspack-blocks/issues/694)) ([5695de6](https://github.com/Automattic/newspack-blocks/commit/5695de651fe6abda90506315d0a4eceb6091234c))

# [1.20.0](https://github.com/Automattic/newspack-blocks/compare/v1.19.0...v1.20.0) (2021-02-05)


### Features

* pass attributes to donate block render hook ([#671](https://github.com/Automattic/newspack-blocks/issues/671)) ([2d1ae81](https://github.com/Automattic/newspack-blocks/commit/2d1ae8115b911aab54b7aa692d7c873e55d69a25))

# [1.19.0](https://github.com/Automattic/newspack-blocks/compare/v1.18.1...v1.19.0) (2021-01-28)


### Bug Fixes

* carousel block renders authors like homepage articles ([#680](https://github.com/Automattic/newspack-blocks/issues/680)) ([0b574c7](https://github.com/Automattic/newspack-blocks/commit/0b574c7da03a91262c2cd529139db74a32f9dad0))
* in specific posts mode, post order should match input order ([#681](https://github.com/Automattic/newspack-blocks/issues/681)) ([1cfea8d](https://github.com/Automattic/newspack-blocks/commit/1cfea8de49bb80d7abce05b60240792fcc67a587))


### Features

* add article class for post types ([#679](https://github.com/Automattic/newspack-blocks/issues/679)) ([f493a01](https://github.com/Automattic/newspack-blocks/commit/f493a017796c9573ca8f70925e9f4c97ca740727))

## [1.18.1](https://github.com/Automattic/newspack-blocks/compare/v1.18.0...v1.18.1) (2021-01-19)


### Bug Fixes

* load more button functionality ([#672](https://github.com/Automattic/newspack-blocks/issues/672)) ([4116df5](https://github.com/Automattic/newspack-blocks/commit/4116df5f3bbe303866a7b0dde8807f838c374b15))
* **homepage-post:** handle duplicated categories ([57b6323](https://github.com/Automattic/newspack-blocks/commit/57b6323d32dd6aa96c83f07cc4e96598c009ec7e)), closes [#669](https://github.com/Automattic/newspack-blocks/issues/669)

# [1.18.0](https://github.com/Automattic/newspack-blocks/compare/v1.17.1...v1.18.0) (2021-01-12)


### Features

* add optional 'continue reading' link underneath excerpts ([#656](https://github.com/Automattic/newspack-blocks/issues/656)) ([3c55a69](https://github.com/Automattic/newspack-blocks/commit/3c55a69d23d17c2cfb5e26385ffd27b0e31ba168))
* custom endpoint for homepage posts in editor ([#661](https://github.com/Automattic/newspack-blocks/issues/661)) ([1f4880a](https://github.com/Automattic/newspack-blocks/commit/1f4880ad57e78098b719dc308f2358d5b84a0d13))

## [1.17.1](https://github.com/Automattic/newspack-blocks/compare/v1.17.0...v1.17.1) (2020-12-15)


### Bug Fixes

* **api:** fallback to standard if post_format is false ([#649](https://github.com/Automattic/newspack-blocks/issues/649)) ([77028aa](https://github.com/Automattic/newspack-blocks/commit/77028aa23a96325398d437a2461a864641034b9b))
* respect excerpt length attribute in load more display ([#648](https://github.com/Automattic/newspack-blocks/issues/648)) ([aef87ba](https://github.com/Automattic/newspack-blocks/commit/aef87baeebc46e9068855eec62b74c14a20f2619))
* sanitize post id arrays in includes and excludes ([#651](https://github.com/Automattic/newspack-blocks/issues/651)) ([b1b50bd](https://github.com/Automattic/newspack-blocks/commit/b1b50bd6e35bb19103c5076703866a92d2770930))

# [1.17.0](https://github.com/Automattic/newspack-blocks/compare/v1.16.0...v1.17.0) (2020-12-09)


### Bug Fixes

* disable paging in specific posts mode ([#640](https://github.com/Automattic/newspack-blocks/issues/640)) ([9ea01e5](https://github.com/Automattic/newspack-blocks/commit/9ea01e55d0621687c26bf044331bfcaa4eb59b87))


### Features

* control to select default tab in donate block ([#643](https://github.com/Automattic/newspack-blocks/issues/643)) ([46c730b](https://github.com/Automattic/newspack-blocks/commit/46c730b1f5af5732876cb66236993b2800b43199))

# [1.16.0](https://github.com/Automattic/newspack-blocks/compare/v1.15.0...v1.16.0) (2020-11-24)


### Features

* optimize sponsor queries ([#633](https://github.com/Automattic/newspack-blocks/issues/633)) ([1509951](https://github.com/Automattic/newspack-blocks/commit/150995197e39ade7bb3f71cbf6325b6fa60fd2f8))

# [1.15.0](https://github.com/Automattic/newspack-blocks/compare/v1.14.0...v1.15.0) (2020-11-17)


### Features

* Add French (Belgium) translation to the blocks ([#626](https://github.com/Automattic/newspack-blocks/issues/626)) ([e2f9dc6](https://github.com/Automattic/newspack-blocks/commit/e2f9dc62ddab5f5c146d83ced822fb2edbc16482))

# [1.14.0](https://github.com/Automattic/newspack-blocks/compare/v1.13.2...v1.14.0) (2020-11-11)


### Features

* add option to change excerpt length ([#607](https://github.com/Automattic/newspack-blocks/issues/607)) ([a1968d9](https://github.com/Automattic/newspack-blocks/commit/a1968d905cb2117a35ad969804d685076fb292e4))
* update blocks icons style and colour ([#615](https://github.com/Automattic/newspack-blocks/issues/615)) ([f4d68cb](https://github.com/Automattic/newspack-blocks/commit/f4d68cb74210e28cec17deec1d16b35ede68e901))

## [1.13.2](https://github.com/Automattic/newspack-blocks/compare/v1.13.1...v1.13.2) (2020-10-27)


### Bug Fixes

* suppress password protected posts ([#609](https://github.com/Automattic/newspack-blocks/issues/609)) ([ff667d7](https://github.com/Automattic/newspack-blocks/commit/ff667d714bb6ac92ad5d8961e8d59a6230261e5e))

## [1.13.1](https://github.com/Automattic/newspack-blocks/compare/v1.13.0...v1.13.1) (2020-09-29)


### Bug Fixes

* add alignment options to post carousel block ([#597](https://github.com/Automattic/newspack-blocks/issues/597)) ([19a3965](https://github.com/Automattic/newspack-blocks/commit/19a3965b6b502f3e74f6697c43c0fdadf87176d7))

# [1.13.0](https://github.com/Automattic/newspack-blocks/compare/v1.12.2...v1.13.0) (2020-09-15)


### Bug Fixes

* **homepage-posts:** display info about load more posts if blog is private ([11e2934](https://github.com/Automattic/newspack-blocks/commit/11e293408c8d37aec3ae5709c7586fcc420c5a66)), closes [#507](https://github.com/Automattic/newspack-blocks/issues/507)
* **sponsors:** prevent warnings when sponsor image is not set ([b715706](https://github.com/Automattic/newspack-blocks/commit/b7157068b1246098908b3b91caab2cc9e1c07e9e))


### Features

* add support for the aside post format ([dd69bc2](https://github.com/Automattic/newspack-blocks/commit/dd69bc2939f5200b9fa94a66d60af666f70f13bf))

## [1.12.2](https://github.com/Automattic/newspack-blocks/compare/v1.12.1...v1.12.2) (2020-09-08)


### Bug Fixes

* make sure sponsored content styles survive tree shaking ([#585](https://github.com/Automattic/newspack-blocks/issues/585)) ([b15e7d7](https://github.com/Automattic/newspack-blocks/commit/b15e7d7b66400108faddd58a8dafae7a016b5e27))

## [1.12.1](https://github.com/Automattic/newspack-blocks/compare/v1.12.0...v1.12.1) (2020-08-26)


### Bug Fixes

* prevent errors when there is no sponsor logo, link ([#581](https://github.com/Automattic/newspack-blocks/issues/581)) ([e1337a2](https://github.com/Automattic/newspack-blocks/commit/e1337a2fb1a6e0bf6cbd221a387f9eb4e4ec7330))

# [1.12.0](https://github.com/Automattic/newspack-blocks/compare/v1.11.1...v1.12.0) (2020-08-25)


### Features

* trigger release ([419ffe7](https://github.com/Automattic/newspack-blocks/commit/419ffe7f9e168abadbc5fe91b68d7100b087d476))

## [1.11.1](https://github.com/Automattic/newspack-blocks/compare/v1.11.0...v1.11.1) (2020-08-18)


### Bug Fixes

* moving check for sponsors to prevent notices ([#573](https://github.com/Automattic/newspack-blocks/issues/573)) ([0cd9810](https://github.com/Automattic/newspack-blocks/commit/0cd98108aff171d5cd2c077be1c84d9b056d5f6e))

# [1.11.0](https://github.com/Automattic/newspack-blocks/compare/v1.10.2...v1.11.0) (2020-08-18)


### Features

* add sponsor labels to homepage posts and post carousel blocks ([#563](https://github.com/Automattic/newspack-blocks/issues/563)) ([cbcd65f](https://github.com/Automattic/newspack-blocks/commit/cbcd65f7932e61c4a63a1ac72a54aa819bd13e9a))

## [1.10.2](https://github.com/Automattic/newspack-blocks/compare/v1.10.1...v1.10.2) (2020-08-11)


### Bug Fixes

* don't render homepage posts blocks in feeds ([51f72eb](https://github.com/Automattic/newspack-blocks/commit/51f72ebd6a8db158bc93ea2a4ceaf2b044653944))

## [1.10.1](https://github.com/Automattic/newspack-blocks/compare/v1.10.0...v1.10.1) (2020-08-04)


### Bug Fixes

* make sure Post Carousel text colors aren't overridden ([#553](https://github.com/Automattic/newspack-blocks/issues/553)) ([4b246fe](https://github.com/Automattic/newspack-blocks/commit/4b246fe11b2c1159cb041a3fecb99e79ce8c711a))

# [1.10.0](https://github.com/Automattic/newspack-blocks/compare/v1.9.1...v1.10.0) (2020-07-28)


### Features

* experimental title-only specific posts lookup endpoint ([#556](https://github.com/Automattic/newspack-blocks/issues/556)) ([5816ef9](https://github.com/Automattic/newspack-blocks/commit/5816ef90e52a72d5e79c07e1432025ff62d5e303))

## [1.9.1](https://github.com/Automattic/newspack-blocks/compare/v1.9.0...v1.9.1) (2020-07-22)


### Bug Fixes

* php notices in gutenberg 8.6.0 ([#549](https://github.com/Automattic/newspack-blocks/issues/549)) ([c129449](https://github.com/Automattic/newspack-blocks/commit/c129449fa250e9920273128b4a2adbe776cd506e))

# [1.9.0](https://github.com/Automattic/newspack-blocks/compare/v1.8.1...v1.9.0) (2020-06-30)


### Bug Fixes

* make load more button styles more specific ([#527](https://github.com/Automattic/newspack-blocks/issues/527)) ([68089aa](https://github.com/Automattic/newspack-blocks/commit/68089aad84661c4db52a6b2096264b7475560cb9))
* php warnings, phpcs warnings ([#540](https://github.com/Automattic/newspack-blocks/issues/540)) ([23b34a1](https://github.com/Automattic/newspack-blocks/commit/23b34a10e557d36a89e6c426962a6bde0ce5ee05))


### Features

* editable donate button text ([#535](https://github.com/Automattic/newspack-blocks/issues/535)) ([6261e3f](https://github.com/Automattic/newspack-blocks/commit/6261e3ff50d325471e981bd6dd0bc4b133facdfa))
* exclude current post in homepage posts block ([#539](https://github.com/Automattic/newspack-blocks/issues/539)) ([030024d](https://github.com/Automattic/newspack-blocks/commit/030024d70135fa655985aff801568bee2550caa0))

## [1.8.1](https://github.com/Automattic/newspack-blocks/compare/v1.8.0...v1.8.1) (2020-06-23)


### Bug Fixes

* fall back to author if coauthor fails ([18501f6](https://github.com/Automattic/newspack-blocks/commit/18501f6482c3ee881c68da9afcc7523e6c2726a0))

# [1.8.0](https://github.com/Automattic/newspack-blocks/compare/v1.7.2...v1.8.0) (2020-06-18)


### Bug Fixes

* correct count ([19c7a6c](https://github.com/Automattic/newspack-blocks/commit/19c7a6c5946eb9cbd60e838f6b9b9db06dda0855))
* donations wizard link ([84e0092](https://github.com/Automattic/newspack-blocks/commit/84e0092a47d2bc1f01e041521844bfca921798c1))


### Features

* improve Homepage Posts block editor performance ([#499](https://github.com/Automattic/newspack-blocks/issues/499)) ([e1c68c5](https://github.com/Automattic/newspack-blocks/commit/e1c68c56741dc4d193aa6ceea9462191c7163d35)), closes [#493](https://github.com/Automattic/newspack-blocks/issues/493)

## [1.7.2](https://github.com/Automattic/newspack-blocks/compare/v1.7.1...v1.7.2) (2020-06-13)


### Bug Fixes

* **homepage-posts:** exclude posts already on the page from query ([bbbbc3e](https://github.com/Automattic/newspack-blocks/commit/bbbbc3e7fb84f28c02293c10e0cd49faa7c6b819)), closes [#510](https://github.com/Automattic/newspack-blocks/issues/510)

## [1.7.1](https://github.com/Automattic/newspack-blocks/compare/v1.7.0...v1.7.1) (2020-06-09)


### Bug Fixes

* always display query controls; disallow choosing 0 posts ([#497](https://github.com/Automattic/newspack-blocks/issues/497)) ([b956111](https://github.com/Automattic/newspack-blocks/commit/b9561113e822530eec74e30ca4df2139515716ab))
* correct order of arguments in implodes ([0f45074](https://github.com/Automattic/newspack-blocks/commit/0f45074216e939438165d2621e6152797164e1ec))
* don't use main wp_query when rendering homepage posts ([9c804f6](https://github.com/Automattic/newspack-blocks/commit/9c804f60d37b85e1caa0dd5b22549d478623e1e1))
* reset postdata after restoring wp_query ([d9d01a6](https://github.com/Automattic/newspack-blocks/commit/d9d01a664b7a1132bf67b1c5f49fed965b763fee))
* **homepage-posts:** exclude specific posts from other blocks from query ([#500](https://github.com/Automattic/newspack-blocks/issues/500)) ([31181a5](https://github.com/Automattic/newspack-blocks/commit/31181a5536aef03779cf789d2dcd4d9de05b4371)), closes [#498](https://github.com/Automattic/newspack-blocks/issues/498)
* make bottom margin styles less specific for easier overrides ([#483](https://github.com/Automattic/newspack-blocks/issues/483)) ([93c3aff](https://github.com/Automattic/newspack-blocks/commit/93c3aff087f30c955591770f514094604f0bc829))

# [1.7.0](https://github.com/Automattic/newspack-blocks/compare/v1.6.0...v1.7.0) (2020-06-02)


### Features

* add category and tag classes to each homepage post ([#487](https://github.com/Automattic/newspack-blocks/issues/487)) ([d7c4fcd](https://github.com/Automattic/newspack-blocks/commit/d7c4fcd8d3caa2bbdda970e913265e3da7144b76))

# [1.6.0](https://github.com/Automattic/newspack-blocks/compare/v1.5.0...v1.6.0) (2020-05-19)


### Bug Fixes

* decode entities in categories when shown ([#474](https://github.com/Automattic/newspack-blocks/issues/474)) ([5347ba3](https://github.com/Automattic/newspack-blocks/commit/5347ba3904b12a7d4b7de5527927a3353fd198a1))
* decode entities in categories when shown in carousel ([#475](https://github.com/Automattic/newspack-blocks/issues/475)) ([20dcfd3](https://github.com/Automattic/newspack-blocks/commit/20dcfd382134989a55a3d9c40889fadbb3dd79ff))
* disallow 0 as post to show value ([80db497](https://github.com/Automattic/newspack-blocks/commit/80db497f1d734f8bb9b60d4441670d6deab5e7f7))
* initializing swiper for multiple blocks ([#476](https://github.com/Automattic/newspack-blocks/issues/476)) ([f480d54](https://github.com/Automattic/newspack-blocks/commit/f480d5480b801d21490cf406f8c55bcfb5620fbc))


### Features

* add border style to group block ([#463](https://github.com/Automattic/newspack-blocks/issues/463)) ([1c1f89d](https://github.com/Automattic/newspack-blocks/commit/1c1f89dbb8ec6cbdf39e0303457551c43612480a))
* add image shape classes to the front end ([#473](https://github.com/Automattic/newspack-blocks/issues/473)) ([c90df2e](https://github.com/Automattic/newspack-blocks/commit/c90df2e2e89d685a979b20e4d7ff005af2356869))

# [1.5.0](https://github.com/Automattic/newspack-blocks/compare/v1.4.0...v1.5.0) (2020-05-07)


### Bug Fixes

* carousel image being distorted ([36f72c6](https://github.com/Automattic/newspack-blocks/commit/36f72c6afcaef9f15e957b0dc8d23fb6a566136c))
* make sure content options don't affect blocks ([91ecd2c](https://github.com/Automattic/newspack-blocks/commit/91ecd2cede297021472d411c381fef0ab2cc85e4))


### Features

* add a max-height to the slider ([ea477a2](https://github.com/Automattic/newspack-blocks/commit/ea477a2d2530df8726acd996a7984f2a4e3f37f1))

# [1.4.0](https://github.com/Automattic/newspack-blocks/compare/v1.3.1...v1.4.0) (2020-05-05)


### Bug Fixes

* byline, avatar and date in carousel block ([#455](https://github.com/Automattic/newspack-blocks/issues/455)) ([85b7865](https://github.com/Automattic/newspack-blocks/commit/85b78651a1ed270d5a316c7abf4bf9060a77e890))
* patterns preview thumbnails ([#453](https://github.com/Automattic/newspack-blocks/issues/453)) ([3ca80e0](https://github.com/Automattic/newspack-blocks/commit/3ca80e056f0df5f0db978f6065625963739ef050))
* update editor selector for reordering columns ([#435](https://github.com/Automattic/newspack-blocks/issues/435)) ([396826a](https://github.com/Automattic/newspack-blocks/commit/396826adc88217b9ea02a7d60512c9fb6e497bfe))


### Features

* use swiper for non-amp carousels ([94c0a2b](https://github.com/Automattic/newspack-blocks/commit/94c0a2bf3f203f08a72326e578724f06bc0464cc))

## [1.3.1](https://github.com/Automattic/newspack-blocks/compare/v1.3.0...v1.3.1) (2020-04-29)


### Bug Fixes

* add isset to avoid warnings ([8c791da](https://github.com/Automattic/newspack-blocks/commit/8c791da4a50a5f979a13feee9c7de43a92bf7fc0))

# [1.3.0](https://github.com/Automattic/newspack-blocks/compare/v1.2.1...v1.3.0) (2020-04-21)


### Bug Fixes

* patterns sidebar background color ([#431](https://github.com/Automattic/newspack-blocks/issues/431)) ([d2dfda3](https://github.com/Automattic/newspack-blocks/commit/d2dfda3679947dbf6f4b20bf97d5ca3e005c21de))


### Features

* add 2 new subscribe patterns ([#426](https://github.com/Automattic/newspack-blocks/issues/426)) ([07e8239](https://github.com/Automattic/newspack-blocks/commit/07e82391ec208c2daff78596953defd63ce53931))
* update carousel style since amp 1.5.1 ([#427](https://github.com/Automattic/newspack-blocks/issues/427)) ([94312d2](https://github.com/Automattic/newspack-blocks/commit/94312d2d23394471d15e713cec8c2ba444f89946))

## [1.2.1](https://github.com/Automattic/newspack-blocks/compare/v1.2.0...v1.2.1) (2020-03-31)


### Bug Fixes

* fix broken author URL on WP.com ([#407](https://github.com/Automattic/newspack-blocks/issues/407)) ([9614350](https://github.com/Automattic/newspack-blocks/commit/9614350286d1a0124aab7ee61de2cec8849434fd))
* pattern sidebar to match gutenberg patterns sidebar ([#424](https://github.com/Automattic/newspack-blocks/issues/424)) ([fb2d209](https://github.com/Automattic/newspack-blocks/commit/fb2d209581881d39921d22db121974133d0746af))

# [1.2.0](https://github.com/Automattic/newspack-blocks/compare/v1.1.0...v1.2.0) (2020-03-24)


### Bug Fixes

* make sure styles hiding updated date doesn't hide all dates  ([#406](https://github.com/Automattic/newspack-blocks/issues/406)) ([d1bb53c](https://github.com/Automattic/newspack-blocks/commit/d1bb53ca82a67e56b1dea616e86a9c099c5498b4))


### Features

* display subscribe pattern when mailchimp is inactive ([#418](https://github.com/Automattic/newspack-blocks/issues/418)) ([09716c1](https://github.com/Automattic/newspack-blocks/commit/09716c10005483d919a8332e92d462c32a992625))
* update the pattern's icon with newspack logo ([#419](https://github.com/Automattic/newspack-blocks/issues/419)) ([8532c6f](https://github.com/Automattic/newspack-blocks/commit/8532c6f1a1a8f3de2ccb9c6c8d5d2216798aa2a3))

# [1.1.0](https://github.com/Automattic/newspack-blocks/compare/v1.0.0...v1.1.0) (2020-03-17)


### Bug Fixes

* double-encoded load more urls ([#415](https://github.com/Automattic/newspack-blocks/issues/415)) ([9d7d7d5](https://github.com/Automattic/newspack-blocks/commit/9d7d7d522cf10da7b1b75c0e95d9d34518d979ec))


### Features

* add homepage posts, donation, and subscribe patterns ([98ab74c](https://github.com/Automattic/newspack-blocks/commit/98ab74cc6f3541d9052bd946538f996fb1e470a2))
* update default carousel style for focused elements ([#410](https://github.com/Automattic/newspack-blocks/issues/410)) ([02335c4](https://github.com/Automattic/newspack-blocks/commit/02335c4c65ddd628168a32ecdfe4411675a25d4e))

# 1.0.0 (2020-03-02)


### Bug Fixes

* correct 'Load more posts' German translation ([8913258](https://github.com/Automattic/newspack-blocks/commit/8913258ff32b32e0aaf4f20194002f78bbee89a3))
* fix video attribute handling ([cfe96e8](https://github.com/Automattic/newspack-blocks/commit/cfe96e82983f4b341f18120017456c287d1294fa))
* load more button - remove amp-layout container, append each new article individually. ([#375](https://github.com/Automattic/newspack-blocks/issues/375)) ([efee9dc](https://github.com/Automattic/newspack-blocks/commit/efee9dc47704253036961ba8fb06b7518c25bb80))
* Manual video input ([72efba4](https://github.com/Automattic/newspack-blocks/commit/72efba48972a2d5283ce03a702b9b594a3c68efa))
* remove background color behind load more button in editor. fixes [#367](https://github.com/Automattic/newspack-blocks/issues/367). ([#374](https://github.com/Automattic/newspack-blocks/issues/374)) ([f5758fc](https://github.com/Automattic/newspack-blocks/commit/f5758fc79d0e2dad7efb4386bb87677f8a55a58d))


### Features

* add alignment options for youtube playlist block ([11c54f2](https://github.com/Automattic/newspack-blocks/commit/11c54f26b695a5d390a7ce29cb21297286173a9c))
* Add campaign field to Donate block ([8268836](https://github.com/Automattic/newspack-blocks/commit/8268836f648bb67f293ac4477b9ffd747192be0b))
* Add settings and flesh out further ([f343d99](https://github.com/Automattic/newspack-blocks/commit/f343d998d5bc23090bb91a8ef9e32bb500faa053))
* Basic video playlist block ([d66485a](https://github.com/Automattic/newspack-blocks/commit/d66485ab1c6cab6378aa16a02c71f360d0211f65))
* Get basic everything working well ([b5537c8](https://github.com/Automattic/newspack-blocks/commit/b5537c8f9c1893d334edda3cf2601a7d459c5d80))
* Make block player interactive in editor. ([d1dce97](https://github.com/Automattic/newspack-blocks/commit/d1dce97dcb33233ff5ef9e3ba612e2238c680b58))
