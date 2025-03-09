<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.png"
      alt="Abdullahi Odesanmi"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Abdullahi, a software engineer who loves building web applications and
      experimenting with new ideas. I specialize in JavaScript, Vue, and
      anything that brings great user experiences to life.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I’m deep in the world of insurtech at
      <a href="https://mycover.ai" target="_blank" class="underline"
        >MyCover.ai</a
      >. By night (and weekends), I’m probably lost in code, building something
      cool, or completely unnecessary.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Abdullahi Odesanmi",
  description:
    "I'm Abdullahi, a software engineer who loves building web applications and experimenting with new ideas. I specialize in JavaScript, Vue, and anything that brings great user experiences to life.",
});
</script>
