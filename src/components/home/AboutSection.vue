<template>
  <section
    id="about"
    name="about"
    class="relative flex min-h-[80ch] w-full justify-center bg-base-50"
  >
    <div class="custom-shape-divider-top-1714950289">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="section-background-color bg-transparent"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <article class="section-background-color mt-[80px] w-full pb-10">
      <div class="content text-black">
        <h1 class="section__title relative">
          {{ $t('about.title') }}
        </h1>
        <div class="mb-10 mt-10 grid items-center gap-8 text-center sm:mt-0 md:grid-cols-[220px_1fr] md:text-left">
          <div name="photo-frame" class="group relative mx-auto mb-4 inline-block md:mb-0">
            <img
              src="/roby-firmansyah.png"
              class="relative z-[1] h-64 w-52 rounded-2xl object-cover object-top shadow-xl ring-4 ring-white duration-300 group-hover:-rotate-2"
              alt="Portrait of Roby Firmansyah"
            />
          </div>
          <p class="open-sans text-left text-base leading-8 text-slate-700 sm:text-lg">
            {{ $t('about.summary') }}
          </p>
        </div>
        <section class="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="source-sans mb-4 text-xl font-semibold text-primary-900">{{ $t('about.skills.title') }}</h2>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" class="rounded-full bg-primary-50 px-3 py-1.5 text-sm text-primary-900">{{ skill }}</span>
          </div>
        </section>
        <EducationPanel />
        <AchievementsPanel />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import EducationPanel from './AboutSection-Education.vue'
import AchievementsPanel from './AboutSection-Achievements.vue'
import { useLocalizedData } from '@/composables/LocalizedData'

const { data: skills } = useLocalizedData<string[]>('about.skills.list')
</script>

<style scoped>
.custom-shape-divider-top-1714950289 {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 -5px 3px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1714950289 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

@media (max-width: 800px) {
  .custom-shape-divider-top-1714950289 svg {
    width: 800px;
    height: auto;
  }
  .custom-shape-divider-top-1713495835 svg {
    width: 800px;
    height: auto;
  }
}
</style>
