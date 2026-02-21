<template>
        <main
            class="h-full p-6 flex flex-col items-center justify-center lg:flex-row gap-8 lg:justify-end lg:items-start">
            <div class="lg:flex-4/6">
                <h1 class="text-6xl md:text-8xl leading-[1.2] lg:-mt-4 font-[antonio] uppercase font-bold">
                    Hi, I am Alvinsa Isnanda Putra!
                </h1>
                <p class="mt-6 text-xl lg:text-2xl text-justify">
                    I am a student at SMK N 2 Depok Sleman specializing in Network Engineering, 
                    DevOps, Cloud Computing, and Linux Administration.
                </p>
                <p class="mt-6 text-xl lg:text-2xl text-justify">
                    In the field of networking, I have practical experience managing traffic and 
                    configurations using MikroTik, including Queues, Firewall, and NAT implementations. 
                    My expertise extends to routing and switching on Cisco devices (IOS), as well as 
                    configuring VLANs, VPNs, and performing network troubleshooting to ensure stable connectivity.
                </p>
                <p class="mt-6 text-xl lg:text-2xl text-justify">
                    Regarding DevOps and Cloud infrastructure, I am proficient in deploying web applications and 
                    services on Virtual Machines managed via Proxmox. I manage VM lifecycles, including snapshots 
                    and backups, and have a foundational understanding of AWS and GCP. Currently, I am expanding 
                    my skillset in containerization with Docker and have set a roadmap to master container o
                    rchestration (Kubernetes) and Infrastructure as Code (IaC) using OpenTofu and Ansible.
                </p>
            </div>
            <div class="lg:flex-2/6">
                <NuxtImg src="/alvin.webp"
                    class="object-cover rounded-xl w-full lg:h-172 aspect-3/4 cursor-pointer"
                    alt="Alvinsa Isnanda Putra" loading="eager" @click="openModal" />
            </div>
        </main>

        <!-- Modal -->
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
                        alt="Alvinsa Isnanda Putra - Full size" @click.stop />
                </div>
            </div>
        </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
    title: 'About - Alvinsa Isnanda Putra',
    description: 'Learn about Alvinsa Isnanda Putra, a passionate Network Engineer specializing in MikroTik, cloud engineering, and cybersecurity with MTCNA, MTCTCE, and IPv6 Sage certifications.',
    ogTitle: 'About - Alvinsa Isnanda Putra',
    ogDescription: 'Passionate Network Engineer with expertise in Kubernetes, Docker, BGP, VPNs, firewalls, and network security. Based in Yogyakarta, Indonesia.',
    ogImage: 'https://rizkyfauzan.id/og-image.png',
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