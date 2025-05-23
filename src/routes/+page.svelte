<script lang="ts">
  import { goto } from "$app/navigation";
  import dp from "$lib/images/black.jpg";
  import persistent_store from "$lib/stores/persistentstore";

  let name = "Asif Azad";
  let title = "AI Engineer";
  let currentRole = "Remote AI Engineer at Ministry of Defence, KSA";
  let subtitle = "Specializing in AI for Healthcare Solutions";
  let aboutMe = `CS graduate from Bangladesh University of Engineering and Technology (March 2025). When I'm not diving deep into tech innovations, you'll find me rewatching The Godfather Part II and Pride and Prejudice, competing in basketball, unwinding with table tennis, or exploring transformative ideas through public speaking and books like The Biology of Belief and Aronnoyok.

I believe life is a precious gift meant to be fully experienced and shared. Always open to meaningful conversations about technology, cinema, sports, or life's beautiful complexities.`;
  
  let prevUrl = "/research";
  let nextUrl = "/achievements";
</script>

<div class="min-h-[80vh] flex flex-col">
  <!-- Hero Section -->
  <section class="flex-1 flex items-center justify-center py-8 md:py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <!-- Left Column - Text Content -->
        <div class="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <!-- Name and Title -->
          <div class="space-y-3">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary_dark dark:text-primary_light leading-tight">
              {name}
            </h1>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-medium text-secondary_light dark:text-secondary_dark">
              {title}
            </h2>
            <p class="text-base md:text-lg text-ink_light/80 dark:text-ink_dark/80">
              {subtitle}
            </p>
          </div>

          <!-- Current Role Highlight -->
          <div class="bg-gradient-to-r from-secondary_light/10 to-secondary_light/5 dark:from-secondary_dark/10 dark:to-secondary_dark/5 border-l-4 border-secondary_light dark:border-secondary_dark p-4 rounded-r-lg">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-secondary_light dark:bg-secondary_dark rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-secondary_light dark:text-secondary_dark uppercase tracking-wide">Currently</span>
            </div>
            <p class="mt-1 text-lg font-semibold text-primary_dark dark:text-primary_light">
              {currentRole}
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-ink_light/70 dark:text-ink_dark/70">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>asifazad0178@gmail.com</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/asifazad2677"
              target="_blank"
              aria-label="LinkedIn"
              class="group"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-06d6a0?style=flat&logo=linkedin&logoColor=white"
                alt="LinkedIn"
                class="h-8 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <a
              href="https://github.com/BRAINIAC2677"
              target="_blank"
              aria-label="GitHub"
              class="group"
            >
              <img
                src="https://img.shields.io/badge/Github-06d6a0?style=flat&logo=github&logoColor=white"
                alt="GitHub"
                class="h-8 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <a
              href="https://www.kaggle.com/brainiac2677"
              target="_blank"
              aria-label="Kaggle"
              class="group"
            >
              <img
                src="https://img.shields.io/badge/Kaggle-06d6a0?style=flat&logo=kaggle&logoColor=white"
                alt="Kaggle"
                class="h-8 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <a
              href="https://codeforces.com/profile/BRAINIAC77"
              target="_blank"
              aria-label="Codeforces"
              class="group"
            >
              <img
                src="https://img.shields.io/badge/Codeforces-06d6a0?style=flat&logo=codeforces&logoColor=white"
                alt="Codeforces"
                class="h-8 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        <!-- Right Column - Image -->
        <div class="flex justify-center order-1 lg:order-2">
          <div class="relative">
            <!-- Decorative background -->
            <div class="absolute inset-0 bg-gradient-to-br from-secondary_light/20 to-secondary_light/5 dark:from-secondary_dark/20 dark:to-secondary_dark/5 rounded-2xl rotate-3 scale-105"></div>
            <!-- Main image -->
            <img
              src={dp}
              alt="Asif Azad - AI Engineer"
              class="relative z-10 rounded-2xl w-64 md:w-80 lg:w-96 h-auto aspect-[3/4] object-cover shadow-2xl border-4 border-white dark:border-gray-800"
            />
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-secondary_light dark:bg-secondary_dark rounded-full opacity-80 animate-bounce [animation-delay:0.5s]"></div>
            <div class="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary_light dark:bg-secondary_dark rounded-full opacity-60 animate-bounce [animation-delay:1s]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="py-12 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-8">
        <h3 class="text-2xl md:text-3xl font-bold text-primary_dark dark:text-primary_light mb-4">
          About Me
        </h3>
        <div class="w-20 h-1 bg-secondary_light dark:bg-secondary_dark mx-auto rounded-full"></div>
      </div>
      
      <div class="prose prose-lg dark:prose-invert mx-auto text-center">
        <p class="text-ink_light/80 dark:text-ink_dark/80 leading-relaxed">
          {aboutMe}
        </p>
      </div>

      <!-- Favorite Quote -->
      <div class="mt-12 text-center">
        <blockquote class="text-xl md:text-2xl font-medium italic text-secondary_light dark:text-secondary_dark">
          "Life is Beautiful"
        </blockquote>
        <div class="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-secondary_light dark:via-secondary_dark to-transparent mx-auto"></div>
      </div>
    </div>
  </section>

  <!-- Navigation -->
  <div class="flex justify-between items-center py-8 border-t border-gray-200 dark:border-gray-700">
    <button
      class="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-ink_light dark:text-ink_dark group"
      on:click|stopPropagation={() => {
        $persistent_store.activeUrl = prevUrl;
        localStorage.setItem("persistent_store", JSON.stringify($persistent_store));
        goto(prevUrl);
      }}
    >
      <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Previous</span>
    </button>

    <button
      class="flex items-center space-x-2 px-6 py-3 rounded-lg bg-secondary_light dark:bg-secondary_dark hover:bg-secondary_light/90 dark:hover:bg-secondary_dark/90 transition-colors text-white group"
      on:click|stopPropagation={() => {
        $persistent_store.activeUrl = nextUrl;
        localStorage.setItem("persistent_store", JSON.stringify($persistent_store));
        goto(nextUrl);
      }}
    >
      <span>Next</span>
      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</div>
