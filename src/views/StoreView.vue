<template>
  <div class="jeb-store">

    <!-- Hero -->
    <section class="jeb-store--hero">
      <p class="jeb-store--heroEyebrow">📺 Saturday Morning</p>
      <h1 class="jeb-store--heroTitle">Online Store</h1>
      <p class="jeb-store--heroSoon">Coming Soon.</p>
    </section>

    <!-- Interim CTA -->
    <div class="jeb-store--body">
      <p class="jeb-store--interimText">
        In the meantime, you can purchase a signed copy directly —
        just fill out the order form and I'll send a Venmo request.
      </p>
      <a
        href="https://forms.gle/pV94Qi2QXbHkCoJw9"
        target="_blank"
        rel="noopener noreferrer"
        class="jeb-store--ctaBtn"
      >
        📋 Purchase via Order Form
      </a>
      <p class="jeb-store--ctaNote">Purchases made through Venmo · US orders only · Ships via USPS Media Mail</p>
    </div>

  </div>
</template>

<style scoped>
/* ── Hero ── */
.jeb-store--hero {
  background: var(--navy-dark);
  text-align: center;
  padding: 7rem 2rem 6rem;
  position: relative;
  overflow: hidden;
}

.jeb-store--hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(245,200,66,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.jeb-store--heroEyebrow {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
  position: relative;
}

.jeb-store--heroTitle {
  font-size: clamp(3.5rem, 10vw, 7rem);
  color: white;
  line-height: 1;
  margin-bottom: 0.3rem;
  position: relative;
}

.jeb-store--heroSoon {
  font-size: clamp(2.5rem, 7vw, 5rem);
  color: var(--gold);
  line-height: 1;
  position: relative;
}

/* ── Body ── */
.jeb-store--body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 2rem 6rem;
  text-align: center;
  background: white;
}

.jeb-store--interimText {
  font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  color: var(--text-mid);
  max-width: 50ch;
  line-height: 1.6;
}

.jeb-store--ctaBtn {
  display: inline-block;
  background: var(--gold);
  color: var(--navy-dark);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  padding: 1.1rem 3rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: opacity 0.15s;
}

.jeb-store--ctaBtn:hover {
  opacity: 0.88;
}

.jeb-store--ctaNote {
  font-size: 1.2rem;
  color: var(--text-mid);
  opacity: 0.7;
}
</style>
