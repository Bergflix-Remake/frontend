<template>
  <div
    class="w-full h-screen absolute top-0 left-0 z-40 flex flex-col justify-center items-center backdrop-blur-sm"
  >
    <div
      class="flex flex-col justify-center items-center bg-darkest-dark backdrop-blur-sm bg-opacity-75 shadow-lg md:w-1/2 md:rounded-xl p-5 md:h-1/2 w-full h-full"
    >
      <slot />
    </div>
  </div>
</template>
