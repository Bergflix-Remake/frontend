<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar />
    <div
        class="flex flex-col min-h-screen px-10 text-gray-900 bg-gray-200 dark:bg-clean-dark dark:text-clean-white"
    >
        <Suspense>
            <template #default>
                <router-view></router-view>
            </template>
            <template #loading>
                <div class="flex items-center justify-center h-screen">
                    <div class="spinner"></div>
                </div>
            </template>
        </Suspense>
    </div>
    <Footer />
</template>

<style>
    .spinner {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid rgba(117, 99, 103, 0.3);
        border-top-color: #FF0230;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
