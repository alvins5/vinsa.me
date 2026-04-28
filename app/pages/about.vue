<template>
    <div class="h-full">
    <div class="h-full p-6 flex flex-col items-center justify-center lg:flex-row gap-8 lg:justify-end lg:items-start">
        <div class="lg:flex-4/6">
            <h1 class="text-6xl md:text-8xl leading-[1.2] lg:-mt-4 font-[antonio] uppercase font-bold">
                Hi, I am Alvinsa Isnanda Putra!
            </h1>
            <p class="mt-6 text-xl lg:text-2xl text-justify">
                I am Alvinsa Isnanda Putra, a tech enthusiast based in Sleman, Yogyakarta, with a passion
                for system administration, networking, DevOps, and cloud computing. I am a student of 
                Information Systems, Networking, and Applications at SMKN 2 Depok Sleman.
            </p>
            <p class="mt-6 text-xl lg:text-2xl text-justify">
                I have obtained the MikroTik Certified Network Associate (MTCNA) and MikroTik Certified
                Traffic Control Engineer (MTCTCE) certifications, and I have won several competitions 
                in sysadmin, networking, and cloud computing.
            </p>
        </div>
        <div class="lg:flex-2/6">
            <NuxtImg src="/alvin.webp"
                class="object-cover rounded-xl w-120 lg:h-130 aspect-3/4 cursor-pointer lg:grayscale lg:hover:grayscale-0 transition-all duration-200" alt="Alvinsa Isnanda Putra"
                loading="eager" @click="openModal" />
        </div>

        <!-- Modal -->
        <ClientOnly>
            <Teleport to="body">
                <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                    @click="closeModal">
                    <div class="relative max-w-6xl max-h-full">
                        <!-- Close button -->
                        <button
                            class="absolute top-4 right-4 z-20 w-8 h-8 bg-black hover:bg-black/80 text-white rounded-full transition duration-200 flex items-center justify-center cursor-pointer"
                            aria-label="Close modal" @click.stop="closeModal">
                            <Icon name="heroicons:x-mark" size="16" />
                        </button>

                    <!-- Modal image -->
                    <NuxtImg src="/alvin.webp" class="max-w-full max-h-[90vh] object-contain rounded-2xl"
                        alt="Rizky Fauzan Hanif - Full size" @click.stop />
                    </div>
                </div>
            </Teleport>
        </ClientOnly>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
    title: 'About - Alvinsa Isnanda Putra',
    description: 'Learn about Alvinsa Isnanda Putra, a passionate Network Engineer specializing in MikroTik, cloud engineering, with MTCNA and MTCTCE',
    ogTitle: 'About - Alvinsa Isnanda Putra',
    ogDescription: 'Network & System Administrator based in Yogyakarta. Specialized in MikroTik (MTCNA, MTCTCE), Linux Servers, Docker, and Cloud Infrastructure.',
    ogImage: 'https://vinsa.site/og-image.png',
})

const isModalOpen = ref(false)

const openModal = () => {
    isModalOpen.value = true
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    isModalOpen.value = false
    // Restore body scroll
    document.body.style.overflow = ''
}

// Close modal on escape key
const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    // Ensure body scroll is restored
    document.body.style.overflow = ''
})
</script>