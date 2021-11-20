<template>
<Loading :color="`${!status ? 'primary' : 'green'}`" v-if="loading"/>
<span v-if="status" class="flex-row hidden mx-1 text-green-600 md:flex" id="backend-status"><ServerIcon class="w-5 h-5 mt-0.5 mr-1"/> Connected!</span>
<span class="flex flex-row p-0.5 mx-1 rounded bg-red-darker text-primary-300" v-if="!status"><ExclamationCircleIcon class="w-5 h-5 mt-0.5 mr-1"/> No Connection</span>
<span class="flex-row hidden px-2 mr-2 font-mono italic align-middle rounded-md lg:flex bg-darker flex-nowrap">{{version}}<TagIcon class="h-5 mt-1 ml-2"/></span>
</template>

<script setup lang="ts">
import { backend_status, get_github_version } from '../api_handler';
import { TagIcon, ServerIcon, ExclamationCircleIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';
import Loading from './Loading.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const version = await get_github_version().then((version) => {
    return version;
});

const status = ref(backend_status);
var loading = ref(false)

// set the value of status to backend_status every 10 seconds
setInterval(() => {
    const old_status = status.value;
    loading.value = true;
    // wait 1 second
    setTimeout(() => {
        status.value = backend_status; 
        loading.value = false;
        if (old_status != status.value && status.value) {
            router.go(0);
        }
    }, 3000);
}, 30000);

</script>

<style lang="scss">

</style>