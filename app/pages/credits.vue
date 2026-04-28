<template>
    <div class="p-6">
        <PageHeader title="Credits"
            description="Acknowledgements and thanks to the people who inspired me in building this website." />

        <p class="mt-6 text-xl lg:text-2xl text-justify">The style and design of this website are inspired by
            <a href="https://miukyo.my.id" target="_blank" rel="noopener noreferrer" class="group"
                aria-label="Learn more about Miukyo's personal website">
                <span class="relative">
                    Miukyo's personal website
                    <span
                        class="absolute left-0 bottom-0 h-full w-full max-w-0 backdrop-invert transition-all group-hover:max-w-full" />
                </span>
            </a>.
        </p>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Credits - Alvinsa Isnanda Putra',
    description: 'Professional certifications: MikroTik MTCNA and MTCTCE. View verified networking credentials.',
    ogTitle: 'Credits - Alvinsa Isnanda Putra',
    ogDescription: 'Network Engineer specializing in MikroTik and networking. MTCNA & MTCTCE certified professional based in Yogyakarta, Indonesia.',
    ogImage: 'https://vinsa.site/og-image.png',
})
</script>