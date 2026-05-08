<template>
    <div class="max-w-3xl w-11/12 mx-auto transition-opacity duration-200"
        :class="{ 'opacity-0': !isReady, 'opacity-100': isReady }">
        <main class="py-4 print:text-black">
            <!-- Header Section -->
            <section class="w-full mt-4 mb-4">
                <h1 class="text-center text-3xl font-bold text-black">
                    {{ t.personalInfo.name }}
                </h1>
                <h2 class="text-center text-lg text-gray-700 mt-1">
                    {{ t.personalInfo.title }}
                </h2>
                <p class="text-center text-sm text-gray-600 mt-1">
                    {{ t.personalInfo.location }}
                </p>
                <div class="space-x-4 text-center mt-3">
                    <a v-for="navLink in navigationLinks" :key="navLink.title" :href="navLink.link"
                        :target="navLink.title !== 'Email' ? '_blank' : undefined"
                        :rel="navLink.title !== 'Email' ? 'noopener noreferrer' : undefined"
                        class="relative inline-flex items-center print:underline hover:underline text-black font-semibold hover:after:w-full print:text-black">
                        {{ navLink.title }}
                    </a>
                </div>
            </section>

            <div class="space-y-8">
                <!-- About Me -->
                <section>
                    <div class="flex items-center justify-between pb-2.5 border-b-2 border-black">
                        <h3 class="text-xl font-bold text-black">{{ t.sections.aboutMe }}</h3>
                        <div class="flex items-center gap-2">
                            <button
                                class="inline-flex items-center justify-center cursor-pointer print:hidden px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                                @click="toggleLanguage">
                                <span class="text-sm font-medium text-black">{{ currentLang === 'en' ? 'ID' : 'EN'
                                }}</span>
                            </button>
                            <button
                                class="inline-flex items-center justify-center cursor-pointer print:hidden px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                                @click="printResume">
                                <Icon name="heroicons:printer" class="text-black text-lg" />
                            </button>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p v-for="(paragraph, idx) in t.aboutMe" :key="idx" class="text-gray-800 mb-2">{{
                            paragraph }}</p>
                    </div>
                </section>

                <!-- Soft Skills -->
                <section>
                    <h3 class="mb-4 pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.softSkills }}
                    </h3>
                    <ul class="list-disc list-inside [&>li]:my-1">
                        <li v-for="ability in t.keyAbilities" :key="ability" class="text-gray-800">
                            {{ ability }}
                        </li>
                    </ul>
                </section>

                <!-- Technical Skills -->
                <section>
                    <h3 class="mb-4 pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.technicalSkills }}
                    </h3>
                    <ul class="list-disc list-inside [&>li]:my-1">
                        <li v-for="skill in t.skills" :key="skill" class="text-gray-800">
                            {{ skill }}
                        </li>
                    </ul>
                </section>

                <!-- Education -->
                <section>
                    <h3 class="pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.education }}
                    </h3>
                    <div v-for="edu in t.education" :key="edu.institution" class="mt-4">
                        <div class="flex items-start justify-between mb-2.5">
                            <h4 class="max-w-md font-semibold text-black">{{ edu.institution }}</h4>
                            <p class="text-sm font-semibold text-gray-700">{{ edu.period }}</p>
                        </div>
                        <p v-if="edu.degree" class="text-gray-800 mb-1">{{ edu.degree }}</p>
                        <p v-if="edu.gpa" class="text-gray-700 text-sm mb-1">{{ edu.gpa }}</p>
                        <p v-if="edu.relevantCoursework" class="text-gray-700 text-sm mb-2">
                            <strong>Relevant Coursework: </strong>
                            {{ edu.relevantCoursework }}
                        </p>
                        <p v-if="edu.grade" class="text-gray-700 text-sm mb-2">{{ edu.grade }}</p>
                        <ul v-if="edu.achievements" class="list-disc list-inside [&>li]:my-1">
                            <li v-for="achievement in edu.achievements" :key="achievement" class="text-gray-800">
                                {{ achievement }}
                            </li>
                        </ul>
                    </div>
                </section>

                <!-- Experience -->
                <section>
                    <div class="flex items-center justify-between pb-2.5 border-b-2 border-black">
                        <h3 class="text-xl font-bold text-black">{{ t.sections.experience }}</h3>
                    </div>
                    <div v-for="exp in t.experience" :key="exp.company" class="mt-4">
                        <div class="flex items-start justify-between mb-2.5">
                            <div>
                                <h4 class="font-semibold text-black">{{ exp.company }}</h4>
                                <h6 class="text-gray-700">{{ exp.position }}</h6>
                            </div>
                            <p class="text-sm font-semibold text-gray-700">{{ exp.period }}</p>
                        </div>
                        <ul class="list-disc list-inside [&>li]:my-1">
                            <li v-for="responsibility in exp.responsibilities" :key="responsibility"
                                class="text-gray-800">
                                {{ responsibility }}
                            </li>
                        </ul>
                    </div>
                </section>

                <!-- Projects -->
                <section>
                    <h3 class="mb-4 pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.projects }}
                    </h3>
                    <div v-for="project in t.projects" :key="project.name" class="mb-6">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <h4 class="font-semibold text-black">
                                    <a v-if="project.link" :href="project.link" target="_blank" class="hover:underline">
                                        {{ project.name }}
                                    </a>
                                    <span v-else>
                                        {{ project.name }}
                                    </span>
                                </h4>
                                <p class="text-sm text-gray-600">{{ project.technology }}</p>
                            </div>
                            <p class="text-sm font-semibold text-gray-700">{{ project.period }}</p>
                        </div>
                        <p class="text-gray-800">{{ project.description }}</p>
                    </div>
                </section>

                <!-- Licenses & certifications -->
                <section>
                    <h3 class="mb-4 pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.certifications }}
                    </h3>
                    <div v-for="cert in t.certifications" :key="cert.name" class="mb-4">
                        <div class="flex items-start justify-between mb-1">
                            <h4 class="font-semibold text-black">
                                <a :href="cert.link" target="_blank" class="print:underline hover:underline">
                                    {{ cert.name }}
                                </a>
                            </h4>
                            <p class="text-sm text-gray-600">{{ cert.date }}</p>
                        </div>
                        <p class="text-gray-700 text-sm">{{ cert.issuer }}</p>
                        <p v-if="cert.credentialId" class="text-gray-600 text-xs">Credential ID: {{ cert.credentialId }}
                        </p>
                    </div>
                </section>

                <!-- Contact -->
                <section>
                    <h3 class="mb-4 pb-2.5 border-b-2 border-black text-xl font-bold text-black">
                        {{ t.sections.contact }}
                    </h3>
                    <ul>
                        <li v-for="contact in contactInfo" :key="contact.title"
                            class="mt-2.5 text-gray-800 not-first-of-type:mt-2.5">
                            <strong>{{ contact.title }}: </strong>
                            <a :href="contact.link" class="hover:underline print:underline text-black" target="_blank"
                                rel="noopener noreferrer">
                                {{ contact.displayText || contact.link.replace(/^mailto:|^https?:\/\/|^tel:/, '') }}
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    </div>
</template>

<style scoped>
@media print {
    @page {
        size: A4 portrait !important;
        margin: 0.4in 0.5in !important;
    }

    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    body {
        font-size: 10.5pt !important;
        line-height: 1.25 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    .print\:hidden {
        display: none !important;
    }

    .print\:text-black {
        color: black !important;
    }

    .print\:underline {
        text-decoration: underline !important;
    }

    /* Ensure proper page breaks */
    section {
        break-inside: avoid;
        page-break-inside: avoid;
        margin-bottom: 1.25rem !important;
    }

    /* Prevent orphaned lines */
    h1,
    h2,
    h3,
    h4 {
        break-after: avoid;
        page-break-after: avoid;
    }

    /* Adjust spacing for print */
    .space-y-4>*+* {
        margin-top: 0.5rem !important;
    }

    /* Smaller headings */
    h1 {
        font-size: 20pt !important;
        margin-bottom: 0.3rem !important;
    }

    h2 {
        font-size: 12pt !important;
        margin-top: 0.2rem !important;
    }

    h3 {
        font-size: 13pt !important;
        margin-bottom: 0.5rem !important;
        padding-bottom: 0.25rem !important;
    }

    h4 {
        font-size: 11pt !important;
    }

    h6 {
        font-size: 10.5pt !important;
    }

    /* Reduce list spacing */
    ul {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    li {
        margin-top: 0.2rem !important;
        margin-bottom: 0.2rem !important;
        font-size: 10.5pt !important;
    }

    /* Reduce paragraph spacing */
    p {
        margin-bottom: 0.3rem !important;
        font-size: 10.5pt !important;
    }

    /* Compact project and experience items */
    .mb-6 {
        margin-bottom: 0.75rem !important;
    }

    .mb-4 {
        margin-bottom: 0.5rem !important;
    }

    .mb-2 {
        margin-bottom: 0.25rem !important;
    }

    .mt-4 {
        margin-top: 0.5rem !important;
    }

    .mt-3 {
        margin-top: 0.4rem !important;
    }

    /* Contact links and list items */
    a {
        font-size: 10.5pt !important;
    }

    /* Small text elements */
    .text-sm {
        font-size: 9.5pt !important;
    }

    .text-xs {
        font-size: 8.5pt !important;
    }

    /* Ensure text is readable */
    .text-gray-800 {
        color: #1f2937 !important;
        font-size: 10.5pt !important;
    }

    .text-gray-700 {
        color: #374151 !important;
    }

    .text-gray-600 {
        color: #4b5563 !important;
    }

    /* Force A4 width */
    .max-w-3xl {
        max-width: 7.5in !important;
        width: 7.5in !important;
    }
}

/* Regular styles */
@media screen {
    .max-w-3xl {
        max-width: 48rem;
    }
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, type Ref, type ComputedRef } from 'vue'

interface PersonalInfo {
    name: string
    title: string
    location: string
}

interface Sections {
    aboutMe: string
    softSkills: string
    technicalSkills: string
    projects: string
    education: string
    experience: string
    certifications: string
    contact: string
}

interface Project {
    name: string
    technology: string
    period: string
    description: string
    link?: string
}

interface Education {
    institution: string
    period: string
    degree?: string
    gpa?: string
    relevantCoursework?: string
    grade?: string
    achievements?: string[]
}

interface Experience {
    company: string
    position: string
    period: string
    responsibilities: string[]
}

interface Certification {
    name: string
    issuer: string
    date: string
    credentialId?: string
    link: string
}

interface Translation {
    personalInfo: PersonalInfo
    sections: Sections
    aboutMe: string[]
    skills: string[]
    projects: Project[]
    keyAbilities: string[]
    education: Education[]
    experience: Experience[]
    certifications: Certification[]
}

interface Translations {
    en: Translation
    id: Translation
}

interface NavigationLink {
    title: string
    link: string
}

interface ContactInfo {
    title: string
    link: string
    displayText?: string
}

type Language = 'en' | 'id'

definePageMeta({
    layout: 'blank',
})

useSeoMeta({
    title: 'Resume - Alvinsa Isnanda Putra',
    description: 'Professional resume of Alvinsa Isnanda Putra',
    ogTitle: 'Resume - Alvinsa Isnanda Putra',
    ogDescription: 'Professional resume of Alvinsa Isnanda Putra',
})

const route = useRoute()

// Initialize language immediately from query or localStorage
const getInitialLang = (): Language => {
    if (process.client) {
        // Check query parameter first
        const queryLang = route.query.lang
        if (queryLang && (queryLang === 'en' || queryLang === 'id')) {
            localStorage.setItem('resume-language', queryLang as Language)
            return queryLang as Language
        }
        // Fall back to localStorage
        const savedLang = localStorage.getItem('resume-language')
        if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
            return savedLang as Language
        }
    }
    return 'id'
}

const currentLang: Ref<Language> = ref(getInitialLang())
const isReady: Ref<boolean> = ref(false)

onMounted(() => {
    // Small delay to ensure proper initialization
    setTimeout(() => {
        isReady.value = true
    }, 0)
})

const toggleLanguage = (): void => {
    currentLang.value = currentLang.value === 'en' ? 'id' : 'en'
    localStorage.setItem('resume-language', currentLang.value)
}

const translations: Translations = {
    en: {
        personalInfo: {
            name: 'Alvinsa Isnanda Putra',
            title: 'Network Engineer',
            location: 'Sleman, Yogyakarta, Indonesia',
        },
        sections: {
            aboutMe: 'About Me',
            softSkills: 'Soft Skills',
            technicalSkills: 'Technical Skills',
            projects: 'Projects',
            education: 'Education',
            experience: 'Experience',
            certifications: 'Licenses & Certifications',
            contact: 'Contact',
        },
        aboutMe: [
            "I am Alvinsa Isnanda Putra, a tech enthusiast based in Sleman, Yogyakarta, with a passion for system administration, networking, DevOps, and cloud computing. I am a student of Information Systems, Networking, and Applications at SMKN 2 Depok Sleman.",
            "I have obtained the MikroTik Certified Network Associate (MTCNA) and MikroTik Certified Traffic Control Engineer (MTCTCE) certifications, and I have won several competitions in sysadmin, networking, and cloud computing.",
        ],
        skills: [
            'MikroTik RouterOS - routing, firewall, hotspot, and traffic control configuration',
            'SysAdmin - service configuration and server administration',
            'Virtualization - Proxmox and VirtualBox',
            'Containerization - Docker',
            'Automation - Ansible',
            'CI/CD - GitHub Actions',
        ],
        projects: [
            {
                name: 'Network Infrastructure SMKN 2 Depok Sleman',
                technology: 'MikroTik RouterOS, Cambium, Ruijie, Firewall, Linux Server, Virtualization, Fiber Optics, VPN, Monitoring Tools',
                period: '2024-Present',
                description: 'Monitoring, troubleshooting, and maintenance of school network infrastructure.'
            }
        ],
        keyAbilities: [
            'Continuous skill development',
            'Time management and prioritization',
            'Rapid adaptation to new technologies',
            'Systematic problem-solving',
            'Adaptive to technological trends',
        ],
        education: [
            {
                institution: 'SMK Negeri 2 Depok Sleman',
                period: '2023 - 2027',
                degree: 'Information Systems, Networking, and Applications',
                achievements: [
                    '3rd Place, DIY Provincial LKS Cloud Computing 2025',
                    '3rd Place, MikroTik Network Olympiad 2025',
                    '3rd Place, DIY Provincial LKS IT Network System Administration (ITNSA) 2026',
                ]
            },
        ],
        experience: [
            {
                company: 'SMK Negeri 2 Depok Sleman',
                position: 'Network Operations Center (Volunteer)',
                period: 'April 2025 - Present',
                responsibilities: [
                    'Monitoring and maintaining network infrastructure.',
                    'Troubleshooting connectivity and performance issues.',
                    'Configuring MikroTik network devices.',
                    'Documenting configurations and maintenance procedures.'
                ]
            },
            {
                company: 'PT Solusi Karya Technology Indonesia (SKTECH)',
                position: 'DevOps Engineer (Part-time)',
                period: 'April 2025 - Present',
                responsibilities: [
                    'Implementing CI/CD pipelines using GitLab.',
                    'Collaborating with development teams to optimize deployment processes.',
                    'Conducting load testing using k6.'
                ]
            }
        ],
        certifications: [
            {
                name: 'MikroTik Certified Network Associate (MTCNA)',
                issuer: 'MikroTik',
                date: '24 October 2025',
                credentialId: '2510NA7423',
                link: "https://ik.imagekit.io/vinsa/MTCNA.png?updatedAt=1771693666582"
            },
            {
                name: 'MikroTik Certified Traffic Control Engineer (MTCTCE)',
                issuer: 'MikroTik',
                date: '24 October 2025',
                credentialId: '2510TCE7494',
                link: "https://ik.imagekit.io/vinsa/MTCTCE.png?updatedAt=1771693849461"
            },
        ],
    },
    id: {
        personalInfo: {
            name: 'Alvinsa Isnanda Putra',
            title: 'Network Engineer',
            location: 'Sleman, Yogyakarta, Indonesia',
        },
        sections: {
            aboutMe: 'Tentang Saya',
            softSkills: 'Keterampilan',
            technicalSkills: 'Keterampilan Teknis',
            projects: 'Proyek',
            education: 'Pendidikan',
            experience: 'Pengalaman',
            certifications: 'Lisensi & Sertifikasi',
            contact: 'Kontak',
        },
        aboutMe: [
            "Saya Alvinsa Isnanda Putra, seorang tech enthusiast yang memiliki minat pada system administrator, networking, DevOps, dan cloud computing berbasis di Sleman, Yogyakarta. Saya siswa program studi Sistem Informasi Jaringan dan Aplikasi di SMKN 2 Depok Sleman.",
            "Saya telah memperoleh MikroTik Certified Network Associate (MTCNA), Mikrotik Certified Traffic Control Engineer (MTCTCE) dan memenangkan lomba sysadmin, networking, dan cloud computing.",
        ],
        skills: [
            'Mikrotik RouterOS - konfigurasi routing, firewall, hotspot, dan traffic control',
            'SysAdmin - konfigurasi layanan dan administrator server',
            'Virtualisasi - Proxmox dan virtualbox',
            'Kontainerisasi - docker',
            'Automasi - ansible',
            'CI/CD - Github Actions',
        ],
        projects: [
            {
                name: 'Infrastruktur Jaringan SMKN 2 Depok Sleman',
                technology: 'MikroTik RouterOS, Cambium, Ruijie, Firewall, Linux Server, Virtualisasi, Fiber Optik, VPN, Alat Monitoring',
                period: '2024 - Sekarang',
                description: 'Monitoring, troubleshooting, dan pemeliharaan infrastruktur jaringan sekolah.'
            }
        ],
        keyAbilities: [
            'Mengembangkan keterampilan secara berkelanjutan',
            'Manajemen waktu dan prioritas',
            'Adaptasi cepat terhadap teknologi terbaru.',
            'Pemecahan masalah dengan pendekatan sistematis',
            'Adaptif dengan perkembangan teknologi',
        ],
        education: [
            {
                institution: 'SMK Negeri 2 Depok Sleman',
                period: '2023 - 2027',
                degree: 'Sistem Informasi Jaringan dan Aplikasi',
                achievements: [
                    'Juara 3 LKS Cloud Computing Provinsi DIY 2025',
                    'Juara 3 Olimpiade Jaringan MikroTik 2025',
                    'Juara 3 LKS IT Network System Administration (ITNSA) Provinsi DIY 2026',
                ]
            },
        ],
        experience: [
            {
                company: 'SMK Negeri 2 Depok Sleman',
                position: 'Network Operations Center (Sukarelawan)',
                period: 'April 2025 - Sekarang',
                responsibilities: [
                    'Monitoring dan pemeliharaan infrastruktur jaringan.',
                    'Troubleshooting masalah konektivitas dan performa jaringan.',
                    'Konfigurasi perangkat jaringan MikroTik',
                    'Dokumentasi konfigurasi dan prosedur pemeliharaan.'
                ]
            },
            {
                company: 'PT Solusi Karya Technology Indonesia (SKTECH)',
                position: 'DevOps Engineer (Paruh waktu)',
                period: 'April 2025 - Sekarang',
                responsibilities: [
                    'Mengimplementasikan pipeline CI/CD menggunakan Gitlab.',
                    'Berkolaborasi dengan tim pengembangan untuk mengoptimalkan proses deployment.',
                    'Mengetes kekuatan website dengan menggunakan k6'
                ]
            }
        ],
        certifications: [
            {
                name: 'MikroTik Certified Network Associate (MTCNA)',
                issuer: 'MikroTik',
                date: '24 October 2025',
                credentialId: '2510NA7423',
                link: "https://ik.imagekit.io/vinsa/MTCNA.png?updatedAt=1771693666582"
            },
            {
                name: 'MikroTik Certified Traffic Control Engineer (MTCTCE)',
                issuer: 'MikroTik',
                date: '24 October 2025',
                credentialId: '2510TCE7494',
                link: "https://ik.imagekit.io/vinsa/MTCTCE.png?updatedAt=1771693849461"
            },
        ],
    }
}

const t: ComputedRef<Translation> = computed(() => translations[currentLang.value])

const navigationLinks: NavigationLink[] = [
    {
        title: 'Website',
        link: 'https://vinsa.site'
    },
    {
        title: 'Email',
        link: 'alvinsa.i.p@gmail.com'
    },
    {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/alvinsa-isnanda-putra'
    },
]

const contactInfo: ContactInfo[] = [
    {
        title: 'Website',
        link: 'https://vinsa.site',
        displayText: 'vinsa.site'
    },
    {
        title: 'Email',
        link: 'mailto:mail@vinsa.site',
        displayText: 'mail@vinsa.site'
    },
    {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/alvinsa-isnanda-putra',
        displayText: 'linkedin.com/in/alvinsa-isnanda-putra'
    },
    {
        title: 'GitHub',
        link: 'https://github.com/alvins5',
        displayText: 'github.com/alvins5'
    }
]

const printResume = (): void => {
    window.print()
}
</script>