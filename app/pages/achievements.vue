<template>
    <div class="p-6">
        <PageHeader 
            title="Achievements" 
        />

        <div class="mb-16">
            <div class="flex flex-wrap justify-center gap-6 items-stretch">
                <ImageCard
                    v-for="achievement in achievements" 
                    :key="achievement.id"
                    :item="achievement"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
    title: 'Achievements - Alvinsa Isnanda Putra',
    description: '1st Place MikroTik Networking Olympiad 2024, 3rd Place LKS ITNSA DIY Province 2024. Explore professional achievements and milestones of Alvinsa Isnanda Putra.',
    ogTitle: 'Achievements - Alvinsa Isnanda Putra',
    ogDescription: 'Competition wins and professional milestones including 1st Place MikroTik Networking Olympiad and LKS ITNSA achievements.',
    ogImage: 'https://rizkyfauzan.id/og-image.png',
})

const achievements = ref([
    {
        id: 1,
        title: "3rd Place in the 2025 MikroTik Networking Olympiad",
        // description: "",
        date: "2025",
        image: "https://ik.imagekit.io/vinsa/OJM25.jpg",
    },
    {
        id: 2,
        title: "3rd Place in the 2024 DIY Province Cloud Computing LKS",
        // description: "",
        date: "2024",
        image: "https://ik.imagekit.io/vinsa/LKSCCDIY25.jpeg",
    },
])
</script>