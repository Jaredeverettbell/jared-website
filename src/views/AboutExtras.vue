<script setup lang="ts">
const stages = ['Brainstorm', 'Draft', 'Final Edit', 'Printing', 'Released'];

const books = [
  {
    number: 'Book 1',
    title: 'Mayhem of Musculor',
    stage: 'Released',
    activeStage: 4,   // 0-based index of current stage
    badgeColor: '#27ae60',
    badgeText: 'Released',
  },
  {
    number: 'Book 2',
    title: 'Horrors of Heyword the Hippo',
    stage: 'Released',
    activeStage: 4,
    badgeColor: '#27ae60',
    badgeText: 'Released',
  },
  {
    number: 'Book 3',
    title: 'Fight of the Founding Ferrets',
    stage: 'Draft Phase',
    activeStage: 1,
    badgeColor: '#d4a825',
    badgeText: 'Draft Phase',
  },
  {
    number: 'Book 4',
    title: 'Title TBA',
    stage: 'Brainstorm Phase',
    activeStage: 0,
    badgeColor: '#7c3aed',
    badgeText: 'Brainstorm',
  },
];

function stageClass(bookActiveStage: number, stageIdx: number) {
  if (stageIdx < bookActiveStage) return 'done';
  if (stageIdx === bookActiveStage) return 'active';
  return 'upcoming';
}
</script>

<template>
  <div class="jeb-extras">

    <!-- Header -->
    <header class="jeb-extras--header">
      <p class="jeb-sectionTitle">BEHIND THE SCENES</p>
      <h1 class="jeb-extras--headerTitle">Extras</h1>
      <p class="jeb-extras--headerSub">Book progress, behind-the-scenes, Jared's Favorites, and tour dates.</p>
    </header>

    <div class="jeb-extras--body jeb-watermark">

      <!-- ── Section: Series Progress ── -->
      <section class="jeb-extras--section">
        <h2 class="jeb-extras--sectionHeading">Series Progress</h2>

        <div class="jeb-extras--progressGrid">
          <div
            v-for="book in books"
            :key="book.title"
            class="jeb-extras--progressCard"
          >
            <div class="jeb-extras--progressTop">
              <div>
                <p class="jeb-extras--bookNum">{{ book.number }}</p>
                <p class="jeb-extras--bookTitle">{{ book.title }}</p>
              </div>
              <span
                class="jeb-extras--badge"
                :style="{ background: book.badgeColor }"
              >{{ book.badgeText }}</span>
            </div>

            <!-- Stage dots + line -->
            <div class="jeb-extras--stages">
              <div
                v-for="(stage, idx) in stages"
                :key="stage"
                class="jeb-extras--stageWrap"
              >
                <!-- connector line to next dot -->
                <div
                  v-if="idx < stages.length - 1"
                  class="jeb-extras--stageLine"
                  :class="{ done: idx < book.activeStage }"
                ></div>
                <div
                  class="jeb-extras--dot"
                  :class="stageClass(book.activeStage, idx)"
                ></div>
                <span class="jeb-extras--stageLabel">{{ stage }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Section: Jared's Favorites ── -->
      <section class="jeb-extras--section">
        <h2 class="jeb-extras--sectionHeading">Jared's Favorites</h2>

        <div class="jeb-extras--favoritesGrid">
          <div class="jeb-extras--favoriteCard">
            <h3 class="jeb-extras--favoriteTitle">📚 Favorite Books</h3>
            <div class="jeb-extras--favoriteGroup">
              <p class="jeb-extras--favoriteGroupLabel">Middle-Grade Readers</p>
              <ul>
                <li>Deltora Quest</li>
                <li>Harry Potter</li>
                <li>Fablehaven</li>
              </ul>
            </div>
            <div class="jeb-extras--favoriteGroup">
              <p class="jeb-extras--favoriteGroupLabel">Teens</p>
              <ul>
                <li>The Reckoners (Brandon Sanderson)</li>
                <li>Ready Player One</li>
                <li>Toy Story (Screenplay)</li>
              </ul>
            </div>
          </div>

          <div class="jeb-extras--favoriteCard">
            <h3 class="jeb-extras--favoriteTitle">📺 Favorite Cartoons</h3>
            <ul>
              <li>Digimon (Series 1 &amp; 2)</li>
              <li>Jackie Chan's Adventures</li>
              <li>Power Rangers <em>(not technically a cartoon)</em></li>
              <li>Spider-Man: The Animated Series</li>
              <li>Transformers Beast Wars</li>
              <li>X-Men: The Animated Series</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── Section: Behind the Scenes ── -->
      <section class="jeb-extras--section">
        <h2 class="jeb-extras--sectionHeading">Behind the Scenes</h2>

        <div class="jeb-extras--btsGrid">
          <figure class="jeb-extras--btsCard jeb-extras--btsWide">
            <img src="../assets/bts-roartag.webp" alt="Roartag sketch in small form and full-color defender form" />
            <figcaption><strong>Roartag Sketch</strong> - Small Form &amp; Defender Form</figcaption>
          </figure>
          <figure class="jeb-extras--btsCard jeb-extras--btsSketches">
            <img src="../assets/bts-character-sketches.webp" alt="Character sketches of Rebecca, Max, and Dude-He" />
            <figcaption><strong>Character Sketches</strong> - Rebecca, Max, and Dude-He</figcaption>
          </figure>
          <figure class="jeb-extras--btsCard jeb-extras--btsSymbol">
            <img src="../assets/bts-doyen-symbol.webp" alt="The Doyen symbol: seven interlocking rings" />
            <figcaption><strong>Doyen Symbol</strong> - Seven symbols representing the Seven Doyen</figcaption>
          </figure>
        </div>
      </section>

      <!-- ── Section: Tour Dates ── -->
      <section class="jeb-extras--section">
        <h2 class="jeb-extras--sectionHeading">Tour Dates</h2>
        <div class="jeb-extras--tourCard">
          <p class="jeb-extras--tourText">School visits and events coming soon! Check back for updates or <a href="/newsletter">sign up for the newsletter</a> to be notified first.</p>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* ── Header ── */
.jeb-extras--header {
  background: var(--navy);
  color: white;
  text-align: center;
  padding: 4rem 2rem 3.5rem;
}

.jeb-extras--headerTitle {
  font-size: clamp(3rem, 6vw, 5rem);
  color: white;
  margin: 0.5rem 0 1rem;
  text-align: center;
}

.jeb-extras--headerSub {
  font-size: 1.6rem;
  color: var(--light-blue);
  max-width: 60rem;
  margin: 0 auto;
  line-height: 1.5;
}

/* ── Body ── */
.jeb-extras--body {
  padding: 4rem 5vw;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ── Sections ── */
.jeb-extras--section {
  margin-bottom: 5rem;
}

.jeb-extras--sectionHeading {
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--navy);
  margin: 0 0 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid var(--gold);
  display: inline-block;
}

/* ── Progress cards ── */
.jeb-extras--progressGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.jeb-extras--progressCard {
  background: var(--navy);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(26,58,107,0.15);
}

.jeb-extras--progressTop {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
}

.jeb-extras--bookNum {
  font-size: 1.1rem;
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.jeb-extras--bookTitle {
  font-size: 1.6rem;
  color: white;
  font-weight: 700;
  line-height: 1.3;
}

.jeb-extras--badge {
  flex-shrink: 0;
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.9rem;
  border-radius: 0.4rem;
  white-space: nowrap;
}

/* ── Stage tracker ── */
.jeb-extras--stages {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
}

.jeb-extras--stageWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

/* Connector line */
.jeb-extras--stageLine {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.2);
  z-index: 0;
}

.jeb-extras--stageLine.done {
  background: #27ae60;
}

.jeb-extras--dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-bottom: 0.6rem;
}

.jeb-extras--dot.done {
  background: #27ae60;
}

.jeb-extras--dot.active {
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(245,200,66,0.3);
}

.jeb-extras--dot.upcoming {
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
}

.jeb-extras--stageLabel {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  text-align: center;
  line-height: 1.2;
}

/* ── Favorites ── */
.jeb-extras--favoritesGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.jeb-extras--favoriteCard {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(26,58,107,0.08);
}

.jeb-extras--favoriteTitle {
  font-size: 2rem;
  color: var(--navy);
  margin: 0 0 1.5rem;
}

.jeb-extras--favoriteGroup {
  margin-bottom: 1.5rem;
}

.jeb-extras--favoriteGroupLabel {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1.8rem;
  margin: 0;
}

li {
  font-size: 1.5rem;
  color: var(--text-mid);
  line-height: 1.8;
}

li em {
  color: var(--text-mid);
  font-style: italic;
  font-size: 1.2rem;
}

/* ── Tour dates ── */
.jeb-extras--tourCard {
  border: 2px dashed var(--light-blue);
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  background: #f0f5fc;
}

.jeb-extras--tourText {
  font-size: 1.6rem;
  color: var(--text-mid);
  line-height: 1.6;
}

.jeb-extras--tourText a {
  color: var(--navy);
  font-weight: 700;
  text-decoration: underline;
}

/* ── Responsive ── */
@media screen and (max-width: 800px) {
  .jeb-extras--progressGrid,
  .jeb-extras--favoritesGrid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .jeb-extras--stageLabel {
    font-size: 0.8rem;
  }
}
/* ── Behind the Scenes ── */
.jeb-extras--btsGrid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.jeb-extras--btsCard {
  margin: 0;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(26,58,107,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.jeb-extras--btsWide {
  grid-column: 1 / -1;
}

.jeb-extras--btsCard img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.jeb-extras--btsSymbol img {
  max-width: 24rem;
  margin: auto 0;
}

.jeb-extras--btsCard figcaption {
  text-align: center;
  font-size: 1.4rem;
  color: var(--text-mid);
  line-height: 1.5;
}

.jeb-extras--btsCard figcaption strong {
  color: var(--navy);
}

@media screen and (max-width: 800px) {
  .jeb-extras--btsGrid { grid-template-columns: 1fr; }
}
</style>
