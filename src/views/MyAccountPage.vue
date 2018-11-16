<template>
  <div class="my-account">
    <div class="container">
      <div class="my-account-title">
        <span class="my-account-title-text icon-user">{{ $t('title') }}</span>
      </div>
      <div class="row">
        <div class="col-sm-9">
          <div class="my-account-content">
            <MyOrders/>
          </div>
        </div>
        <!--<MyBanners/>-->
    </div>
  </div>
</div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import MyOrders from '@/components/MyOrders.vue';
import MyBanners from '@/components/MyBanners.vue';

export default {
  name: 'MyAccount',
  components: {
    UserProfile,
    MyOrders,
    MyBanners,
  },
};
</script>

<!-- eslint-disable -->
<i18n>
{
  "en": {
    "title": "My Account",
    "bannerOne": {
      "title": "Your Sunrise",
      "subtitle": "Make the great days happen",
      "link": "Shop All"
    },
    "bannerTwo": {
      "title": "Your Sunrise",
      "subtitle": "Make the great days happen",
      "link": "Shop All"
    }
  },
  "de": {
    "title": "Mein Konto",
    "bannerOne": {
      "title": "Dein Sunrise",
      "subtitle": "Urlaub in der Sonne",
      "link": "Alles bestellen"
    },
    "bannerTwo": {
      "title": "Sunrise Shop",
      "subtitle": "Neue Saison, neuer Style",
      "link": "Alles bestellen"
    }
  }
}
</i18n>
