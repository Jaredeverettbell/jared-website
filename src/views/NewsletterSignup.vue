<script setup lang="ts">
import { onMounted } from 'vue';
// Jared's own Kit form ("Join the Saturday Morning Club", form 10118737), exactly as designed in Kit
import kitFormHtml from '../assets/kit-form.html?raw';

// Kit's script makes the form submit in place and show the success message.
// Without it the form still works: it posts to Kit and shows Kit's confirmation page.
onMounted(() => {
  document.querySelectorAll('script[data-kit-loader]').forEach((el) => el.remove());
  const s = document.createElement('script');
  s.src = 'https://f.convertkit.com/ckjs/ck.5.js';
  s.async = true;
  s.dataset.kitLoader = 'true';
  document.body.appendChild(s);
});
</script>

<template>
  <div class="jeb-newsletter">

    <!-- Header -->
    <header class="jeb-newsletter--header">
      <p class="jeb-sectionTitle">STAY IN THE LOOP</p>
      <h1 class="jeb-newsletter--headerTitle">Join the Newsletter</h1>
    </header>

    <div class="jeb-newsletter--body jeb-watermark">
      <p class="jeb-newsletter--kids">Ask your parents to submit their email to join the adventure!</p>
      <div class="jeb-newsletter--kit" v-html="kitFormHtml"></div>
    </div>

  </div>
</template>

<style scoped>
.jeb-newsletter--header {
  background: var(--navy);
  color: white;
  text-align: center;
  padding: 4rem 2rem 3.5rem;
}

.jeb-newsletter--headerTitle {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: white;
  margin: 0.5rem 0 1rem;
  text-align: center;
}

.jeb-newsletter--headerSub {
  font-size: 1.6rem;
  color: var(--light-blue);
  max-width: 60rem;
  margin: 0 auto;
  line-height: 1.5;
}

.jeb-newsletter--body {
  padding: 5rem 2rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.jeb-newsletter--card {
  background: white;
  border-radius: 1.2rem;
  padding: 3.5rem;
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 8px 40px rgba(26,58,107,0.12);
}

.jeb-newsletter--cardLead {
  font-size: 1.5rem;
  color: var(--text-mid);
  margin-bottom: 2rem;
  line-height: 1.6;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-size: 1.4rem;
  color: var(--navy);
  font-weight: 700;
}

input {
  font-size: 1.4rem;
  padding: 0.75rem 1rem;
  margin-top: 0.4rem;
  border: 1.5px solid #c0cfe0;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: var(--navy);
}

.jeb-newsletter--success {
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.jeb-newsletter--successIcon {
  font-size: 4rem;
}

.jeb-newsletter--success h2 {
  font-size: 2.8rem;
  color: var(--navy);
  margin: 0;
}

.jeb-newsletter--success p {
  font-size: 1.5rem;
  color: var(--text-mid);
  line-height: 1.6;
}
.jeb-newsletter--kids {
  background: var(--gold);
  color: var(--navy-dark);
  font-weight: 800;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 0.8rem;
  padding: 1rem 1.4rem;
  margin: 0 0 1.5rem;
}
.jeb-newsletter--kids {
  width: 100%;
  max-width: 740px;
  margin: 0 auto 2rem;
}
.jeb-newsletter--kit {
  display: flex;
  justify-content: center;
}
.jeb-newsletter--kit :deep(.formkit-form) {
  width: 100%;
  font-family: inherit;
}
.jeb-newsletter--submit {
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.5rem;
}
.jeb-newsletter--submit:disabled { opacity: 0.7; cursor: default; }
</style>
