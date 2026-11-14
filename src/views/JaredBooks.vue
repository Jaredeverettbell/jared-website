<script setup lang="ts">
// Books page
</script>

<template>
  <div class="jeb-books">

    <!-- Page header -->
    <header class="jeb-books--header">
      <p class="jeb-sectionTitle">THE SATURDAY MORNING SERIES</p>
      <h1 class="jeb-books--headerTitle">Books by Jared Everett Bell</h1>
      <p class="jeb-books--headerSub">Adventure, comedy, and heart. A book series for middle-grade readers, and great nostalgia for grown-ups who read with them.</p>
    </header>

    <main class="jeb-books--main jeb-watermark">

      <!-- Book 1 -->
      <article class="jeb-books--entry">
        <div class="jeb-books--cover">
          <img src="../assets/musculor-3d-cover.webp" class="jeb-books--cover3d" alt="Saturday Morning: Mayhem of Musculor cover" />
        </div>
        <div class="jeb-books--info">
          <p class="jeb-sectionTitle">BOOK ONE</p>
          <h2>Saturday Morning:<br/>Mayhem of Musculor</h2>
          <p class="jeb-books--desc">
            Max Santel is a nine-year-old Saturday Morning cartoon fanatic. His mom, Rebecca, just wants her kids' chores done. So when Max ignores chores one too many times, Rebecca takes a sledgehammer to the family TV — and seven cartoons escape from their television imprisonment. Now it's up to Max Santel to fix the mess and save the day!
          </p>
          <p class="jeb-books--meta">Grades 3–7 · Ages 8–12 · Adventure / Comedy</p>
          <div class="jeb-books--btns">
            <a href="https://a.co/d/1ic4m4e" target="_blank" rel="noopener noreferrer" class="jeb-btn-dark">Buy on Amazon</a>
            <RouterLink to="/store" class="jeb-btn-primary">Buy a Signed Copy</RouterLink>
          </div>
        </div>
      </article>

      <!-- Book 2 -->
      <article class="jeb-books--entry jeb-books--entry__reverse">
        <div class="jeb-books--cover jeb-books--cover__badge">
          <span class="jeb-books--newBadge">NEW</span>
          <img src="../assets/heyword-3d-cover.webp" class="jeb-books--cover3d" alt="Saturday Morning: Horrors of Heyword the Hippo cover" />
        </div>
        <div class="jeb-books--info">
          <p class="jeb-sectionTitle">BOOK TWO</p>
          <h2>Saturday Morning:<br/>Horrors of Heyword the Hippo</h2>
          <p class="jeb-books--desc">
            Max loves to sneak downstairs in the dark of early Saturday mornings to enjoy the cartoon he loved watching as a toddler called Heyword the Hippo. But his fun is quickly interrupted when his older brother, Miles, catches him in the act. Teasing ensues. But there's one problem, the real Heyword witnessed everything from the shadows and vowed to protect his new best friend from Miles. Can Max protect his brother from Heyword, the lyrical wizard? How will Max and Roartag capture the singing and dancing hippo? Find out in Saturday Morning: Horrors of Heyword the Hippo.
          </p>
          <p class="jeb-books--meta">Grades 3–7 · Ages 8–12 · Adventure / Comedy</p>
          <div class="jeb-books--btns">
            <a href="https://www.amazon.com/Saturday-Morning-Horrors-Heyword-Hippo/dp/B0F914D3RK/" target="_blank" rel="noopener noreferrer" class="jeb-btn-dark">Buy on Amazon</a>
            <RouterLink to="/store" class="jeb-btn-primary">Buy a Signed Copy</RouterLink>
          </div>
        </div>
      </article>

      <!-- Book 3 teaser -->
      <article class="jeb-books--entry jeb-books--entry__teaser">
        <div class="jeb-books--cover jeb-books--cover__teaser">
          <div class="jeb-books--teaserPlaceholder">
            <span>📺</span>
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="jeb-books--info">
          <p class="jeb-sectionTitle">BOOK THREE</p>
          <h2>Saturday Morning:<br/>Fight of the Founding Ferrets</h2>
          <p class="jeb-books--desc">
            Book three in the Saturday Morning series is currently in the draft phase! Follow along on the <a href="/extras">Extras page</a> to track its progress from brainstorm to bookshelves.
          </p>
          <p class="jeb-books--meta">In Progress — Draft Phase</p>
          <div class="jeb-books--btns">
            <a href="/extras" class="jeb-btn-secondary" style="color:var(--navy);border-color:var(--navy);">Track Progress →</a>
          </div>
        </div>
      </article>

    </main>
  </div>
</template>

<style scoped>
/* ── Header ── */
.jeb-books--header {
  background: var(--navy);
  color: white;
  text-align: center;
  padding: 4rem 2rem 3.5rem;
}

.jeb-books--headerTitle {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: white;
  margin: 0.5rem 0 1rem;
  text-align: center;
}

.jeb-books--headerSub {
  font-size: 1.6rem;
  color: var(--light-blue);
  max-width: 65rem;
  margin: 0 auto;
  line-height: 1.5;
}

/* ── Main ── */
.jeb-books--main {
  padding: 4rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ── Book entry ── */
.jeb-books--entry {
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 4rem;
  background: #fff;
  border-radius: 1.2rem;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(26,58,107,0.10);
  align-items: start;
}

.jeb-books--entry__reverse {
  grid-template-columns: 1fr 26rem;
}

.jeb-books--entry__reverse .jeb-books--cover {
  order: 2;
}

.jeb-books--entry__reverse .jeb-books--info {
  order: 1;
}

/* Teaser entry */
.jeb-books--entry__teaser {
  border: 2px dashed var(--light-blue);
  background: #f0f5fc;
  box-shadow: none;
}

/* ── Cover ── */
.jeb-books--cover {
  position: relative;
}

.jeb-books--cover img {
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}

/* 3D book image has its own shading, so no extra frame */
.jeb-books--cover img.jeb-books--cover3d {
  border-radius: 0;
  box-shadow: none;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.18));
}

.jeb-books--cover__badge {
  position: relative;
}

.jeb-books--newBadge {
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: var(--red-badge);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  padding: 0.4rem 1.1rem;
  border-radius: 0.4rem;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.jeb-books--cover__teaser {
  display: flex;
  align-items: center;
  justify-content: center;
}

.jeb-books--teaserPlaceholder {
  width: 100%;
  aspect-ratio: 3/4;
  background: linear-gradient(135deg, #dce8f5 0%, #c8daee 100%);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 2px dashed var(--light-blue);
}

.jeb-books--teaserPlaceholder span {
  font-size: 4rem;
}

.jeb-books--teaserPlaceholder p {
  font-size: 1.6rem;
  color: var(--navy);
  font-weight: 700;
  letter-spacing: 0.1em;
}

/* ── Info ── */
.jeb-books--info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.jeb-books--info h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--navy);
  margin: 0;
  line-height: 1.2;
}

.jeb-books--desc {
  font-size: 1.5rem;
  color: var(--text-mid);
  line-height: 1.7;
}

.jeb-books--desc a {
  color: var(--navy);
  text-decoration: underline;
}

.jeb-books--meta {
  font-size: 1.25rem;
  color: var(--navy);
  background: var(--section-bg);
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.jeb-books--btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

/* ── Responsive ── */
@media screen and (max-width: 860px) {
  .jeb-books--entry,
  .jeb-books--entry__reverse {
    grid-template-columns: 1fr;
  }

  .jeb-books--entry__reverse .jeb-books--cover,
  .jeb-books--entry__reverse .jeb-books--info {
    order: unset;
  }

  .jeb-books--cover img {
    max-width: 22rem;
    margin: 0 auto;
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .jeb-books--entry {
    padding: 1.5rem;
    gap: 1.5rem;
  }
}
</style>
