<template>
    <div class="col-sm-3">
        <div class="my-account-banners">
        <div class="banner-one-wrapper hidden-xs">
            <div class="my-account-banner">
            <div class="banner-title">
                {{ $t('bannerOne.title') }}
            </div>
            <hr class="banner-hr">
            <div class="banner-subtitle">
                {{ $t('bannerOne.subtitle') }}
            </div>
            <div class="banner-btn-wrapper">
                <!--<a class="banner-btn" href="{{content.bannerOne.url}}">-->
                <!--{{ $t('bannerOne.link') }}-->
                <!--</a>-->
            </div>
            </div>
        </div>
        <div class="banner-two-wrapper">
            <div class="my-account-banner image-banner">
            <div class="banner-title">
                {{ $t('bannerTwo.title') }}
            </div>
            <hr class="banner-hr">
            <div class="banner-subtitle">
                {{ $t('bannerTwo.subtitle') }}
            </div>
            <div class="banner-btn-wrapper">
                <!--<a class="banner-btn" href="{{content.bannerTwo.url}}">-->
                <!--{{ $t('bannerTwo.link') }}-->
                <!--</a>-->
            </div>
            </div>
        </div>
        </div>
      </div>
</template>
