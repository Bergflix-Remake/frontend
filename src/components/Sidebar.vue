<template>
    <transition name="slide">
      <div id="side" v-if="showSidebar()">
          <div id="sidebar-container" class="flex flex-col items-center content-center h-full">
            <div class="flex flex-row content-center w-full">
              <h1 class="text-4xl font-bold text-white">Menu<span class="font-bold text-primary-100">.</span></h1>
              <XIcon class="w-7 ml-auto mr-2.5 text-gray-500 hover:text-primary-100 cursor-pointer" @click="closeSidebar"/>
          </div>
            <ul id="sidebar-items" class="mt-10 space-y-5 text-center text-gray-500">
                <li v-for="item in menuItems">
                  <a class="hover:text-primary-100" :href="item.href">{{ item.title }}</a>
                </li>
            </ul>
            <ul class="mt-auto mb-10 space-y-5 text-center text-gray-500">
                <li v-for="item in footerItems" >
                  <a class="hover:text-primary-100" :href="item.href">{{ item.title }}</a>
                </li>
            </ul>
          </div>
      </div>
    </transition>
</template>
<script setup lang="ts">
import { XIcon } from '@heroicons/vue/outline'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();


let showSidebar = () => {
  return store.state.sidebarOpen;
}

function closeSidebar() {
    store.commit('toggleSidebar');
}

const menuItems = [{
        icon: "user",
        href: "/profile",
        title: "Mein Profil"
    }, {
        icon: "settings",
        href: "/settings",
        title: "Einstellungen"
    }, {
        icon: "bookmark",
        href: "/favorites",
        title: "Favoriten"
    }, {
        icon: "info",
        href: "/help",
        title: "Hilfe & Feedback"
    }];

const footerItems = [
    {
        icon: "turn-off",
        href: "/signout",
        title: "Abmelden"
    },
    {
        icon: "info",
        href: "/data",
        title: "Datenschutz"
    },
    {
        icon: "info",
        href: "/imprint",
        title: "Impressum"
    }
];
</script>
<style lang="scss">
@import "../styles/colors";
.slide-enter-from, .slide-leave-to {
  z-index: 1000;
  transform: translateX(100%);
}

.slide-enter-active, .slide-leave-active {
  z-index: 1000;
  transition: transform 0.2s linear;
}

#sidebar-container {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 18rem;
    background: $background-darker;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: right 300ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.69) 0 26px 30px -10px;

  &.hide {
    right: -20rem;
  }

  #sidebar-header {
    height: 2rem;
    display: flex;

    .title {
      h2 {
        margin: 0;
      }
    }

    .close {
      padding-top: .25rem;
      margin-left: auto;
    }
  }
}
</style>