<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <template v-if="page">
        <article>
          <h1>{{ page.title }}</h1>
          <ContentRenderer :value="page" />
        </article>
      </template>

      <template v-else>
        <div class="empty-page">
          <h1>Page Not Found</h1>
          <p>Oops! The content you're looking for doesn't exist.</p>
          <NuxtLink to="/">Go back home</NuxtLink>
        </div>
      </template>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("articles").where("path", "==", route.path).first();
});

const ogImage = ref(null);
const getOgImage = async (slug) => {
  try {
    const img = await $fetch(`/api/og-image?slug=${slug}`);
    ogImage.value = img;
  } catch {}
};
getOgImage(route.params.slug);

useSeoMeta({
  ogImage: () => ogImage.value,
  ogTitle: () => page?.title,
  ogDescription: () => page?.description,
  ogImageAlt: () => page?.title,
  ogImageUrl: () => ogImage.value,
  twitterTitle: () => page?.title,
  twitterDescription: () => page?.description,
  twitterCard: "summary_large_image",
  articleAuthor: "Abdullahi Odesanmi",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
