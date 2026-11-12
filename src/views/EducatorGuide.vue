<script setup lang="ts">
import axios from 'axios';
import type { AxiosError } from 'axios';
import { ref, watch } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';

type SignupError = { message: string };
type SignupResponse = { status: 'success' | 'error'; errors?: SignupError[] };

const firstName = ref('');
const lastName = ref('');
const school = ref('');
const body = ref('');
const email = ref('');
const isValidEmail = ref(false);
const serverErrors = ref<SignupError[]>([]);
const showErrors = ref(false);
const loading = ref(false);
const success = ref(false);

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

async function signup() {
  if (!firstName.value || !lastName.value || !body.value || !school.value || !isValidEmail.value) {
    showErrors.value = true;
    return;
  }
  try {
    loading.value = true;
    await axios.post<SignupResponse>('/educator.php', {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      body: body.value,
      school: school.value,
    });
    showErrors.value = false;
    success.value = true;
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    school.value = '';
    body.value = '';
  } catch (e) {
    const data = (e as AxiosError).response?.data as SignupResponse;
    serverErrors.value = data?.errors || [];
  } finally {
    loading.value = false;
  }
}

watch(email, () => {
  isValidEmail.value = Boolean(emailRegex.test(email.value));
});

const testimonials = [
  {
    initials: 'AW',
    color: '#27ae60',
    quote: 'Jared Bell is a dynamic presenter and knows exactly how to engage a middle school audience. He focuses on how to compose a story, uses a highly entertaining game, featuring a student volunteer and a punch board, and facilitates an engaging Q&A, making him the perfect presenter for your budding authors who need a boost of encouragement.',
    attribution: 'Annetta Wells, Salish Middle School',
  },
  {
    initials: 'KB',
    color: '#2b7bb9',
    quote: 'Jared brought the excitement about not only his own book, but also about the storytelling process. Many students left the presentation feeling motivated to start or continue their own creative writing process, and the task seemed to feel less daunting to them after hearing Jared\'s personal story and advice.',
    attribution: 'Kerry Beardsley, Olympic View Elementary',
  },
  {
    initials: 'KK',
    color: '#d4a825',
    quote: 'Jared Bell\'s visit was amazing! My third, fourth and fifth graders absolutely loved his presentation. Jared\'s outgoing nature, background in television, and passion for animation engaged students immediately. I can\'t wait to have him back next year!',
    attribution: 'Kate Kukas, Evergreen Forest Elementary',
  },
  {
    initials: 'CH',
    color: '#1a3a6b',
    quote: 'I recommend author Jared Bell for any school or educational event... Jared connected with our students, captivating them with an engaging and informative presentation on the writing process and learning about different genres... Most impressively, Jared related to our students on their level, fostering an environment of fun and creativity. His enthusiastic and engaging nature makes him a great guest to welcome into your school.',
    attribution: 'Ciera Henderson, Lydia Hawk Elementary',
  },
  {
    initials: 'KM',
    color: '#7c3aed',
    quote: 'If you\'re looking for a dynamic speaker about writing and its potential career options, Jared Bell is a great choice. My 6th grade students who have read his book enjoyed it.',
    attribution: 'Kim Matthews, Komachin Middle School',
  },
];
</script>

<template>
  <div class="jeb-educator">

    <!-- Full-bleed hero -->
    <section class="jeb-educator--hero">
      <img class="jeb-educator--heroBg" src="../assets/school-visit-lydia-hawk.jpg" alt="Jared presenting to students at Lydia Hawk Elementary" />
      <div class="jeb-educator--heroOverlay"></div>
      <div class="jeb-educator--heroContent">
        <p class="jeb-sectionTitle">FOR EDUCATORS</p>
        <h1 class="jeb-educator--heroTitle">Bring Jared to Your School</h1>
        <p class="jeb-educator--heroSub">
          An author visit packed with storytelling, laughs, and inspiration for grades 3–8.
        </p>
        <a href="#request-visit" class="jeb-btn-primary" style="margin-top:1rem;">Request a Visit</a>
      </div>
    </section>

    <!-- Quick stats bar -->
    <div class="jeb-educator--stats">
      <div class="jeb-educator--stat">
        <span class="jeb-educator--statNum">Grades 3–8</span>
        <span class="jeb-educator--statLabel">Age Range</span>
      </div>
      <div class="jeb-educator--stat">
        <span class="jeb-educator--statNum">In-Person &amp; Virtual</span>
        <span class="jeb-educator--statLabel">Visit Types</span>
      </div>
      <div class="jeb-educator--stat">
        <span class="jeb-educator--statNum">WA State</span>
        <span class="jeb-educator--statLabel">Primary Area</span>
      </div>
      <div class="jeb-educator--stat">
        <span class="jeb-educator--statNum">Anywhere</span>
        <span class="jeb-educator--statLabel">Open to Travel</span>
      </div>
    </div>

    <div class="jeb-educator--body jeb-watermark">

      <!-- What to expect -->
      <section class="jeb-educator--section">
        <div class="jeb-educator--sectionInner">
          <div class="jeb-educator--expectText">
            <p class="jeb-sectionTitle">THE VISIT</p>
            <h2 class="jeb-educator--sectionTitle">What to Expect</h2>
            <p class="jeb-educator--para">
              Jared brings <strong>humor, creativity, and education</strong> to every visit with the goal of
              inspiring students to become better readers, writers, and storytellers. His presentation is best
              suited for students ages 8+.
            </p>
            <ul class="jeb-educator--expectList">
              <li>
                <span class="jeb-educator--check">✓</span>
                <p><strong>For Elementary grades 4, 5, and 6</strong>, Jared teaches the students about Story Elements on the Road to Mount Story.</p>
              </li>
              <li>
                <span class="jeb-educator--check">✓</span>
                <p><strong>For Middle School grades 7 and 8</strong>, he teaches the students five advanced writing tips to improve their creative writing skills and story structure.</p>
              </li>
              <li>
                <span class="jeb-educator--check">✓</span>
                <p>Jared utilizes his robust comedy and story writing education and work experience in every presentation, including <strong>a mini game show with prizes</strong>.</p>
              </li>
              <li>
                <span class="jeb-educator--check">✓</span>
                <p><strong>Jared will sell and sign personalized copies!</strong> Arrangements can be made for students to pre-order the book with payment by parents through Venmo or Cash.</p>
              </li>
            </ul>
          </div>
          <div class="jeb-educator--expectPhotos">
            <img src="../assets/school-visit-assembly.jpg" alt="Students raising hands during Jared's assembly" class="jeb-educator--expectPhoto jeb-educator--expectPhotoMain" />
            <img src="../assets/school-visit-classroom.jpg" alt="Jared teaching the Road to Mount Story lesson" class="jeb-educator--expectPhoto" />
            <img src="../assets/school-visit-salish.jpg" alt="Students lining up to meet Jared at Salish Middle School" class="jeb-educator--expectPhoto" />
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="jeb-educator--section">
        <p class="jeb-sectionTitle" style="display:block;text-align:center;">WHAT EDUCATORS SAY</p>
        <h2 class="jeb-educator--sectionTitle" style="text-align:center;">Testimonials</h2>
        <div class="jeb-educator--testimonials">
          <div
            v-for="(t, idx) in testimonials"
            :key="idx"
            class="jeb-educator--testimonial"
          >
            <div class="jeb-educator--testimonialAvatar" :style="{ background: t.color }">
              {{ t.initials }}
            </div>
            <div class="jeb-educator--testimonialBody">
              <p class="jeb-educator--testimonialQuote">"{{ t.quote }}"</p>
              <p class="jeb-educator--testimonialAttrib">— {{ t.attribution }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact form -->
      <section class="jeb-educator--section" id="request-visit">
        <div class="jeb-educator--ctaBanner jeb-educator--formBanner">
          <h2>Request a School Visit</h2>
        </div>
        <div class="jeb-educator--formCard">
          <div v-if="!success">
            <p class="jeb-educator--formLead">
              Fill out the form below and Jared will get back to you within a few business days to discuss availability and details.
            </p>
            <form @submit.prevent="signup">
              <div class="jeb-educator--formRow">
                <label>
                  First Name
                  <input type="text" v-model="firstName" placeholder="Jane" />
                  <span class="jeb-formError" v-if="!firstName && showErrors">Please provide a first name.</span>
                </label>
                <label>
                  Last Name
                  <input type="text" v-model="lastName" placeholder="Smith" />
                  <span class="jeb-formError" v-if="!lastName && showErrors">Please provide a last name.</span>
                </label>
              </div>
              <label>
                Email Address
                <input type="email" v-model="email" placeholder="jane@school.edu" />
                <span class="jeb-formError" v-if="!isValidEmail && showErrors">Please provide a valid email.</span>
              </label>
              <label>
                School Name
                <input type="text" v-model="school" placeholder="Lincoln Elementary School" />
                <span class="jeb-formError" v-if="!school && showErrors">Please provide a school name.</span>
              </label>
              <label>
                Message
                <textarea v-model="body" rows="5" placeholder="Tell Jared a little about your school, grade levels, and ideal timing..." />
                <span class="jeb-formError" v-if="!body && showErrors">Please provide a short message.</span>
              </label>
              <SubmitButton @signup="signup" :loading="loading" />
              <p class="jeb-formError" v-for="(error, idx) in serverErrors" :key="idx">
                {{ error.message }}
              </p>
            </form>
          </div>
          <div v-else class="jeb-educator--formSuccess">
            <span>🎉</span>
            <h3>Request Sent!</h3>
            <p>Thanks for reaching out! Jared will get back to you soon to discuss your school visit.</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* ── Hero ── */
.jeb-educator--hero {
  position: relative;
  width: 100%;
  height: 65vh;
  min-height: 420px;
  overflow: hidden;
}

.jeb-educator--heroBg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 28%;
}

.jeb-educator--heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26,58,107,0.96) 0%,
    rgba(26,58,107,0.65) 40%,
    rgba(26,58,107,0.2) 80%,
    transparent 100%
  );
}

.jeb-educator--heroContent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 5vw 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.jeb-educator--heroTitle {
  font-size: clamp(2.8rem, 5vw, 5rem);
  color: white;
  margin: 0;
  text-align: left;
  text-shadow: 0 2px 16px rgba(0,0,0,0.35);
  line-height: 1.1;
}

.jeb-educator--heroSub {
  font-size: 1.7rem;
  color: var(--light-blue);
  line-height: 1.5;
}

/* ── Stats bar ── */
.jeb-educator--stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--navy-dark);
}

.jeb-educator--stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border-right: 1px solid rgba(255,255,255,0.1);
}

.jeb-educator--stat:last-child {
  border-right: none;
}

.jeb-educator--statNum {
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
  color: var(--gold);
}

.jeb-educator--statLabel {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Body ── */
.jeb-educator--body {
  padding: 4rem 5vw;
}

/* ── Sections ── */
.jeb-educator--section {
  max-width: 1100px;
  margin: 0 auto 5rem;
}

.jeb-educator--sectionTitle {
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--navy);
  margin: 0.25rem 0 2rem;
}

/* ── What to expect ── */
.jeb-educator--sectionInner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.jeb-educator--para {
  font-size: 1.55rem;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.jeb-educator--expectList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.jeb-educator--expectList li {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.jeb-educator--check {
  color: var(--gold);
  font-size: 1.6rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.jeb-educator--expectList strong {
  color: var(--navy);
}

.jeb-educator--expectList p {
  font-size: 1.5rem;
  color: var(--text-mid);
  line-height: 1.5;
}

.jeb-educator--expectPhotos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.jeb-educator--expectPhoto {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.14);
}

.jeb-educator--expectPhotoMain {
  grid-column: 1 / -1;
  aspect-ratio: 16/9;
}

/* ── Testimonials ── */
.jeb-educator--testimonials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  background: var(--navy);
  border-radius: 1.2rem;
  padding: 2.5rem;
}

.jeb-educator--testimonial:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.jeb-educator--testimonial {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  background: rgba(255,255,255,0.07);
  border-radius: 0.8rem;
  padding: 1.5rem;
}

.jeb-educator--testimonialAvatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.jeb-educator--testimonialQuote {
  font-size: 1.4rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.jeb-educator--testimonialAttrib {
  font-size: 1.15rem;
  color: var(--gold);
  font-weight: 700;
}

/* ── CTA banner ── */
.jeb-educator--ctaBanner {
  background: var(--gold);
  border-radius: 1rem;
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 0 auto 4rem;
  max-width: 1100px;
}

.jeb-educator--formBanner {
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 80rem;
}

.jeb-educator--formBanner h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--navy-dark);
  text-align: center;
}

.jeb-educator--ctaBanner p {
  font-size: 2rem;
  font-weight: 700;
  color: var(--navy-dark);
}

/* ── Form ── */
.jeb-educator--formCard {
  background: white;
  border-radius: 1.2rem;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(26,58,107,0.10);
  max-width: 80rem;
  margin: 0 auto;
}

.jeb-educator--formLead {
  font-size: 1.5rem;
  color: var(--text-mid);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.jeb-educator--formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  color: var(--navy);
  font-weight: 700;
  margin-bottom: 1rem;
}

input, textarea {
  margin-top: 0.4rem;
  padding: 0.75rem 1rem;
  border: 1.5px solid #c0cfe0;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--navy);
}

.jeb-educator--formSuccess {
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.jeb-educator--formSuccess span {
  font-size: 4rem;
}

.jeb-educator--formSuccess h3 {
  font-size: 2.8rem;
  color: var(--navy);
  margin: 0;
}

.jeb-educator--formSuccess p {
  font-size: 1.5rem;
  color: var(--text-mid);
  line-height: 1.6;
}

/* ── Responsive ── */
@media screen and (max-width: 900px) {
  .jeb-educator--stats {
    grid-template-columns: 1fr 1fr;
  }

  .jeb-educator--sectionInner {
    grid-template-columns: 1fr;
  }

  .jeb-educator--testimonials {
    grid-template-columns: 1fr;
  }

  .jeb-educator--ctaBanner {
    flex-direction: column;
    text-align: center;
  }

  .jeb-educator--formRow {
    grid-template-columns: 1fr;
  }

  .jeb-educator--heroContent {
    align-items: center;
    text-align: center;
    padding: 2rem 1.5rem 3rem;
  }

  .jeb-educator--heroTitle {
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .jeb-educator--stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
