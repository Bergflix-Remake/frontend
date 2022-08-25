<template>
  <article class='p-5 flex flex-col w-full min-h-screen space-y-2'>
    <div class='flex flex-row space-x-2'>
      <div class='bg-clean-dark-700 w-3/4 aspect-video rounded-l-lg overflow-hidden'>
        <vue-plyr>
          <div class='plyr__video-embed'>
            <iframe
              src='https://www.youtube.com/embed/G4dkLMj6GRQ?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'
              allowfullscreen
              allowtransparency
              allow='autoplay'
            ></iframe>
          </div>
        </vue-plyr>
      </div>
      <div class='w-1/3 bg-clean-dark-700 rounded-r-lg p-5 flex flex-col'>
        <Title>Captain Pineapple 🍍</Title>
        <div class='flex flex-col space-y-2 overflow-y-scroll h-min overflow-x-clip'>
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
          <PlaylistEntry thumbnail='https://picsum.photos/1080/1920' title='Die Bombe ist Scharf!' episode='1'
                         playing />
        </div>
      </div>
    </div>
    <div class='w-full p-10 bg-clean-dark-700 rounded-lg flex'>
      <div class='w-1/2'>
        <Title>Die Bombe ist Scharf!</Title>
        <p class='text-gray-500 font-light'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, nisl nec ultricies luctus, nunc nisl aliquet nisl, sit amet
          aliquet nunc nisl sit amet lorem. Donec tincidunt, nisl nec ultricies
          luctus, nunc nisl aliquet nisl, sit amet aliquet nunc nisl sit amet
          lorem. Donec tincidunt, nisl nec ultricies luctus, nunc nisl aliquet.
        </p>
        <Subtitle>Mitwirkende</Subtitle>
        <div class='flex space-x-2 mt-5'>
          <Contributor name='Schauspieler 1' role='Actor' image='https://picsum.photos/200' />
        </div>
      </div>
      <div class='ml-auto'>
        <InfoRow :year='2022' :age='16' genre='Action' />
      </div>

    </div>
  </article>
</template>

<script setup>
import Title from '@atoms/Title/Title.vue';
import InfoRow from '@molecules/InfoRow/InfoRow.vue';
import Subtitle from '@atoms/Subtitle/Subtitle.vue';
import Contributor from '@/pages/watch/Contributor.vue';
import PlaylistEntry from '@/pages/watch/PlaylistEntry.vue';</script>

