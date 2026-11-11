<template>
  <section class="hero relative flex min-h-[760px] w-full items-center overflow-hidden bg-[#f5f4ef] px-5 pb-24 pt-28 sm:px-8">
    <div class="hero-grid pointer-events-none absolute inset-0 opacity-40"></div>
    <div class="content relative grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="order-2 space-y-7 text-center lg:order-1 lg:text-left">
        <p class="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>{{ $t('hero.availability') }}
        </p>
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">{{ $t('hero.eyebrow') }}</p>
          <h1 class="source-sans text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
            {{ $t('hero.title') }}<span class="text-emerald-700">.</span>
          </h1>
        </div>
        <p class="mx-auto max-w-xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl lg:mx-0">{{ $t('hero.subtitle') }}</p>
        <p class="mx-auto max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">{{ $t('hero.intro') }}</p>
        <div class="flex flex-wrap justify-center gap-3 lg:justify-start">
          <RouterLink to="#contact" class="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">{{ $t('hero.contact_button') }} <span aria-hidden="true">↗</span></RouterLink>
          <a href="/CV_Roby_Firmansyah.pdf" target="_blank" class="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800">{{ $t('experience.download_button') }} ↓</a>
        </div>
        <div class="flex justify-center gap-3 pt-1 lg:justify-start">
          <a :href="$t('hero.profiles.linkedin')" target="_blank" rel="noopener" class="rounded-full border border-slate-300 bg-white p-3 text-xs font-bold text-slate-700 hover:border-emerald-700 hover:text-emerald-800" aria-label="LinkedIn">in</a>
          <a :href="$t('hero.profiles.github')" target="_blank" rel="noopener" class="rounded-full border border-slate-300 bg-white p-3 text-xs font-bold text-slate-700 hover:border-emerald-700 hover:text-emerald-800" aria-label="GitHub">GH</a>
        </div>
      </div>
      <div class="relative order-1 mx-auto w-full max-w-[390px] lg:order-2">
        <div class="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-lime-300"></div>
        <div class="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-emerald-200"></div>
        <div class="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-2xl shadow-slate-900/15">
          <img src="/roby-firmansyah.png" :alt="$t('hero.name')" class="aspect-[4/5] w-full object-cover object-top" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 pb-6 pt-20 text-white">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Jakarta, Indonesia</p>
            <p class="mt-1 text-xl font-semibold">{{ $t('hero.name') }}</p>
          </div>
        </div>
        <div class="absolute -left-8 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
          <p class="text-2xl font-black text-slate-900">8<span class="text-emerald-700">+</span></p>
          <p class="text-xs font-medium text-slate-500">{{ $t('hero.years') }}</p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white/70 to-transparent"></div>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-grid {
  background-image: linear-gradient(rgba(15, 23, 42, .035) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, .035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to right, black, transparent 85%);
}
</style>
