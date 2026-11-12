<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="jeb-home">

    <!-- ── Gold ticker bar ── -->
    <div class="jeb-home--ticker" aria-hidden="true">
      <div class="jeb-home--tickerTrack">
        <span>📺 NEW BOOK OUT NOW — Horrors of Heyword the Hippo!</span>
        <span>⭐ Grab a signed copy of Saturday Morning today!</span>
        <span>🎒 Book Jared for your school — request a visit today!</span>
        <span>📖 Saturday Morning series — adventure, comedy, heart!</span>
        <span>✨ Join the newsletter for exclusive previews and extras!</span>
        <!-- duplicate for seamless loop -->
        <span>📺 NEW BOOK OUT NOW — Horrors of Heyword the Hippo!</span>
        <span>⭐ Grab a signed copy of Saturday Morning today!</span>
        <span>🎒 Book Jared for your school — request a visit today!</span>
        <span>📖 Saturday Morning series — adventure, comedy, heart!</span>
        <span>✨ Join the newsletter for exclusive previews and extras!</span>
      </div>
    </div>

    <!-- ── Full-bleed hero ── -->
    <section class="jeb-home--hero">
      <img
        class="jeb-home--heroBg"
        src="../assets/hero-heyword.jpg"
        alt="Saturday Morning: Horrors of Heyword the Hippo"
      />
      <div class="jeb-home--heroOverlay"></div>
      <div class="jeb-home--heroOnAir">
        <span class="jeb-home--heroOnAirDot"></span>
        ON AIR
      </div>
      <div class="jeb-home--heroContent">
        <h1 class="jeb-home--heroTitle">Where cartoons come to life!</h1>
        <p class="jeb-home--heroSub">The adventure-comedy series for middle-grade readers who love to laugh, cheer, and stay up past bedtime.</p>
        <div class="jeb-home--heroCtas">
          <RouterLink to="/books" class="jeb-btn-primary">Explore the Books</RouterLink>
          <RouterLink to="/schoolvisits" class="jeb-btn-secondary">Book a School Visit</RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Channel grid ── -->
    <section class="jeb-home--channels jeb-watermark">
      <p class="jeb-sectionTitle" style="text-align:center;display:block;padding-top:3rem;">NOW BROADCASTING</p>
      <h2 class="jeb-home--channelsTitle">Your Saturday Morning Lineup</h2>
      <div class="jeb-home--channelGrid">
        <RouterLink to="/books" class="jeb-home--channelCard">
          <div class="jeb-home--channelImg jeb-home--booksDuo">
            <img class="jeb-home--duoBack" src="../assets/heyword-3d-cover.webp" alt="Horrors of Heyword the Hippo" />
            <img class="jeb-home--duoFront" src="../assets/musculor-3d-cover.webp" alt="Mayhem of Musculor" />
          </div>
          <div class="jeb-home--channelInfo">
            <span class="jeb-home--channelNum">CH 01</span>
            <span class="jeb-home--channelName">The Books</span>
          </div>
        </RouterLink>
        <RouterLink to="/schoolvisits" class="jeb-home--channelCard">
          <div class="jeb-home--channelImg">
            <img src="../assets/school-visit-lydia-hawk.jpg" alt="Jared presenting at Lydia Hawk Elementary" class="jeb-home--lydia" />
          </div>
          <div class="jeb-home--channelInfo">
            <span class="jeb-home--channelNum">CH 02</span>
            <span class="jeb-home--channelName">School Visits</span>
          </div>
        </RouterLink>
        <RouterLink to="/meet-jared" class="jeb-home--channelCard">
          <div class="jeb-home--channelImg">
            <img src="../assets/meet-the-author.jpg" alt="Jared Everett Bell" />
          </div>
          <div class="jeb-home--channelInfo">
            <span class="jeb-home--channelNum">CH 03</span>
            <span class="jeb-home--channelName">Meet the Author</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ── Books section ── -->
    <section class="jeb-home--books">
      <p class="jeb-sectionTitle" style="text-align:center;display:block;">NOW ON SHELVES</p>
      <h2 class="jeb-home--booksTitle">The Saturday Morning Series</h2>
      <div class="jeb-home--bookGrid">

        <!-- Book 1 -->
        <div class="jeb-home--bookCard">
          <img src="../assets/musculor-3d-cover.webp" class="jeb-home--bookImg3d" alt="Mayhem of Musculor cover" />
          <div class="jeb-home--bookInfo">
            <h3>Book 1: Mayhem of Musculor</h3>
            <p>Max Santel's mom smashes the TV — and seven cartoon characters escape into the real world. It's up to one 9-year-old Saturday Morning fanatic to save the day!</p>
            <div class="jeb-home--bookBtns">
              <a href="https://a.co/d/1ic4m4e" target="_blank" rel="noopener noreferrer" class="jeb-btn-dark">Buy on Amazon</a>
              <a href="https://forms.gle/AAYVqYKsYaa32Z2J7" target="_blank" rel="noopener noreferrer" class="jeb-btn-primary">Signed Copy</a>
            </div>
          </div>
        </div>

        <!-- Book 2 — NEW badge -->
        <div class="jeb-home--bookCard jeb-home--bookCardNew">
          <div class="jeb-home--newBadge">NEW</div>
          <img src="../assets/heyword-3d-cover.webp" class="jeb-home--bookImg3d" alt="Horrors of Heyword the Hippo cover" />
          <div class="jeb-home--bookInfo">
            <h3>Book 2: Horrors of Heyword the Hippo</h3>
            <p>The Saturday Morning crew is back — and this time a terrifying cartoon hippo is on the loose. Can Max and his friends survive the horrors of Heyword?</p>
            <div class="jeb-home--bookBtns">
              <a href="https://www.amazon.com/Saturday-Morning-Horrors-Heyword-Hippo/dp/B0F914D3RK/" target="_blank" rel="noopener noreferrer" class="jeb-btn-dark">Buy on Amazon</a>
              <a href="https://forms.gle/AAYVqYKsYaa32Z2J7" target="_blank" rel="noopener noreferrer" class="jeb-btn-primary">Signed Copy</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Engagement cards ── -->
    <section class="jeb-home--engage jeb-watermark">
      <div class="jeb-home--engageCard jeb-home--engageSchool">
        <p class="jeb-sectionTitle">FOR EDUCATORS</p>
        <h3>Bring Jared to Your School</h3>
        <p>Story structure, comedy, writing — delivered to your students in a fun, interactive author visit. Great for grades 3–8.</p>
        <RouterLink to="/schoolvisits" class="jeb-btn-primary" style="margin-top:1.5rem;">Request a Visit</RouterLink>
      </div>
      <div class="jeb-home--engageCard jeb-home--engageNewsletter">
        <p class="jeb-sectionTitle">STAY IN THE LOOP</p>
        <h3>Join the Newsletter</h3>
        <p>Get book updates, exclusive art, and surprises before they hit social media.</p>
        <RouterLink to="/newsletter" class="jeb-btn-dark" style="margin-top:1.5rem;">Sign Up Free</RouterLink>
      </div>
    </section>

    <!-- ── Social footer ── -->
    <div class="jeb-home--social">
      <a href="https://www.facebook.com/profile.php?id=100088101285779" target="_blank" rel="noopener noreferrer">
        <img src="../assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/jaredbell90" target="_blank" rel="noopener noreferrer">
        <img src="../assets/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@jaredeverettbell?lang=en" target="_blank" rel="noopener noreferrer">
        <img src="../assets/tiktok.svg" alt="TikTok" />
      </a>
    </div>

  </div>
</template>

<style scoped>
/* ── Page wrapper ── */
.jeb-home {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* ── Ticker ── */
.jeb-home--ticker {
  background: var(--gold);
  color: var(--navy-dark);
  font-weight: 700;
  font-size: 1.3rem;
  overflow: hidden;
  white-space: nowrap;
  padding: 0.55rem 0;
}

.jeb-home--tickerTrack {
  display: inline-flex;
  gap: 0;
  animation: ticker 37.5s linear infinite;
}

.jeb-home--tickerTrack span {
  padding: 0 3.5rem;
}

/* ── Hero ── */
.jeb-home--hero {
  position: relative;
  width: 100%;
  height: 88vh;
  min-height: 520px;
  overflow: hidden;
}

.jeb-home--heroBg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.jeb-home--heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26,58,107,0.95) 0%,
    rgba(26,58,107,0.55) 45%,
    rgba(26,58,107,0.15) 75%,
    rgba(26,58,107,0.0) 100%
  );
}

.jeb-home--heroOnAir {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(192,57,43,0.92);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  padding: 0.4rem 1rem;
  border-radius: 0.3rem;
}

.jeb-home--heroOnAirDot {
  width: 0.7rem;
  height: 0.7rem;
  background: #fff;
  border-radius: 50%;
  animation: blink 1.2s step-start infinite;
}

.jeb-home--heroContent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 5vw 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
}

.jeb-home--heroLogo {
  height: 4.5rem;
  width: auto;
  filter: brightness(0) invert(1);
  margin-bottom: 0.5rem;
}

.jeb-home--heroTitle {
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  color: var(--white);
  text-align: left;
  margin: 0;
  line-height: 1.1;
  text-shadow: 0 2px 18px rgba(0,0,0,0.4);
}

.jeb-home--heroSub {
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  color: var(--light-blue);
  line-height: 1.5;
}

.jeb-home--heroCtas {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

/* ── Channel grid ── */
.jeb-home--channels {
  padding: 1rem 5vw 4rem;
  text-align: center;
}

.jeb-home--channelsTitle {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  color: var(--navy);
  margin: 0.5rem 0 2.5rem;
}

.jeb-home--channelGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.jeb-home--channelCard {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(26,58,107,0.12);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  background: #fff;
  display: block;
}

.jeb-home--channelCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(26,58,107,0.2);
  text-decoration: none;
}

.jeb-home--channelImg {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.jeb-home--channelImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.jeb-home--channelCard:hover .jeb-home--channelImg img {
  transform: scale(1.04);
}

.jeb-home--channelInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  background: var(--navy);
  color: white;
}

.jeb-home--channelNum {
  font-size: 1rem;
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 0.12em;
}

.jeb-home--channelName {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
}

/* ── Books section ── */
.jeb-home--books {
  padding: 4rem 5vw;
  background: #fff;
  text-align: center;
}

.jeb-home--booksTitle {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  color: var(--navy);
  margin: 0.5rem 0 2.5rem;
}

.jeb-home--bookGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.jeb-home--bookCard {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  background: var(--section-bg);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(26,58,107,0.08);
  position: relative;
}

.jeb-home--bookCard img {
  width: 12rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
}

.jeb-home--bookInfo {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
}

.jeb-home--bookInfo h3 {
  font-size: 1.8rem;
  color: var(--navy);
  margin: 0;
}

.jeb-home--bookInfo p {
  font-size: 1.4rem;
  color: var(--text-mid);
  line-height: 1.6;
}

.jeb-home--bookBtns {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.jeb-home--bookCardNew {
  border: 2px solid var(--red-badge);
}

.jeb-home--newBadge {
  position: absolute;
  top: -0.8rem;
  right: 1.5rem;
  background: var(--red-badge);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.15em;
  padding: 0.3rem 0.9rem;
  border-radius: 0.3rem;
}

/* ── Engagement cards ── */
.jeb-home--engage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 4rem 5vw;
}

.jeb-home--engageCard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  border-radius: 1rem;
  margin: 0.75rem;
}

.jeb-home--engageCard h3 {
  font-size: 2.4rem;
  margin: 0.5rem 0 1rem;
}

.jeb-home--engageCard p {
  font-size: 1.5rem;
  line-height: 1.6;
}

.jeb-home--engageSchool {
  background: var(--navy);
  color: white;
}

.jeb-home--engageSchool .jeb-sectionTitle {
  color: var(--gold);
}

.jeb-home--engageNewsletter {
  background: #fef3c7;
  color: var(--navy-dark);
}

.jeb-home--engageNewsletter .jeb-sectionTitle {
  color: var(--navy);
}

/* ── Social ── */
.jeb-home--social {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  background: #fff;
}

.jeb-home--social img {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
  transition: transform 0.2s;
}

.jeb-home--social a:hover img {
  transform: scale(1.15);
}

/* ── Responsive ── */
@media screen and (max-width: 900px) {
  .jeb-home--channelGrid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }

  .jeb-home--bookGrid {
    grid-template-columns: 1fr;
  }

  .jeb-home--bookCard {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .jeb-home--bookInfo {
    text-align: center;
  }

  .jeb-home--bookBtns {
    justify-content: center;
  }

  .jeb-home--engage {
    grid-template-columns: 1fr;
  }

  .jeb-home--heroContent {
    align-items: center;
    text-align: center;
    padding: 2rem 1.5rem 3rem;
  }

  .jeb-home--heroTitle {
    text-align: center;
  }

  .jeb-home--heroCtas {
    justify-content: center;
  }
}
/* ── Oct 2026 homepage update ── */
/* hero: the whole Heyword title card on every device (never cropped),
   surrounded by a soft purple wash, headline on one line below the title */
.jeb-home--hero { background: #7b4fb0; }
.jeb-home--hero::before { content: ""; position: absolute; inset: -40px; background: url(../assets/hero-fill.jpg) center/cover no-repeat; }
.jeb-home--heroOverlay { background: linear-gradient(to top, rgba(26,58,107,.94) 0%, rgba(26,58,107,.8) 16%, rgba(26,58,107,.35) 27%, rgba(26,58,107,0) 36%); }
.jeb-home--heroTitle { white-space: nowrap; font-size: min(4.4rem, 5.6vw); text-shadow: 0 2px 14px rgba(11,26,51,.7); }
.jeb-home--heroSub { max-width: 44ch; text-wrap: balance; }
@media (min-aspect-ratio: 5/4) {
  .jeb-home--heroBg { object-fit: cover; width: auto; max-width: none; height: 86%; left: 50%; right: auto; bottom: auto; transform: translateX(-50%);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
}
@media (max-aspect-ratio: 5/4) {
  .jeb-home--hero { height: auto; min-height: 0; }
  .jeb-home--heroBg { position: relative; display: block; width: 100%; height: auto; object-fit: contain;
    -webkit-mask-image: linear-gradient(to bottom, #000 80%, transparent); mask-image: linear-gradient(to bottom, #000 80%, transparent); }
  .jeb-home--heroContent { position: relative; margin-top: -4vw; padding-top: 0; }
  .jeb-home--heroOverlay { background: linear-gradient(to top, rgba(26,58,107,.94) 0%, rgba(26,58,107,.85) 35%, rgba(26,58,107,0) 60%); }
}

/* faded background pattern removed on the homepage (for now) */
.jeb-home .jeb-watermark { background-image: none; }

/* CH 01: both books together */
.jeb-home--booksDuo { position: relative; background: radial-gradient(120% 100% at 50% 40%, #eef4fc 0%, #c9daf1 60%, #a9c3e8 100%); }
.jeb-home--booksDuo img { position: absolute; width: auto; object-fit: contain; border-radius: .4rem; }
.jeb-home--booksDuo .jeb-home--duoBack { border-radius: 0; height: 84%; top: 8%; left: 49%; filter: drop-shadow(0 6px 10px rgba(11,26,51,.25)); }
.jeb-home--booksDuo .jeb-home--duoFront { height: 82%; top: 11%; left: 19%; border-radius: 0; filter: drop-shadow(0 8px 14px rgba(11,26,51,.4)); }
.jeb-home--channelCard:hover .jeb-home--booksDuo img { transform: none; }
.jeb-home--channelCard:hover .jeb-home--booksDuo .jeb-home--duoFront { transform: translateY(-4px) rotate(-2deg); }
.jeb-home--channelCard:hover .jeb-home--booksDuo .jeb-home--duoBack { transform: translateY(-2px) rotate(2deg); }

/* CH 02: keep Jared and the screen in frame */
.jeb-home--channelImg img.jeb-home--lydia { object-position: 50% 30%; }

/* Book 2 card: 3D cover has its own shading, so no extra frame */
.jeb-home--bookCard img.jeb-home--bookImg3d { box-shadow: none; border-radius: 0; filter: drop-shadow(0 4px 10px rgba(0,0,0,.2)); }
</style>
