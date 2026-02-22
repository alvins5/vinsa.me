<template>
    <div class="p-6">
        <PageHeader title="Certificates" description="" />

        <div class="mb-16">
            <div class="flex flex-wrap justify-center gap-6">
                <ImageCard v-for="certificate in certificates" :key="certificate.id" :item="certificate" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
    title: 'Certificates - Alvinsa Isnanda Putra',
    description: 'Professional certifications: MikroTik MTCNA and MTCTCE. View verified networking credentials.',
    ogTitle: 'Certificates - Alvinsa Isnanda Putra',
    ogDescription: 'MikroTik MTCNA and, MTCTCE. Professional networking credentials and achievements.',
    ogImage: '/og-image.png',
})

const certificates = ref([
    {
        id: 1,
        title: "Mikrotik Certified Network Associate (MTCNA)",
        date: "24 October 2025",
        image: "https://ik.imagekit.io/vinsa/MTCNA.png",
    },
    {
        id: 2,
        title: "Mikrotik Certified Traffic Control Engineer (MTCTCE)",
        date: "24 October 2025",
        image: "https://ik.imagekit.io/vinsa/MTCTCE.png",
    },
])
</script>