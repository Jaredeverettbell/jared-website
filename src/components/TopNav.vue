<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
</script>

<template>
  <nav class="jeb-nav">
    <RouterLink to="/" class="jeb-nav--logo">
      <img src="../assets/logo-tv-button.png" alt="Jared Everett Bell - Home" />
    </RouterLink>

    <button type="button" class="jeb-nav--trigger" @click="toggleNav" aria-label="Open menu">
      <span class="jeb-nav--line" />
      <span class="jeb-nav--line" />
      <span class="jeb-nav--line" />
    </button>

    <div class="jeb-nav--links" :class="{ 'jeb-nav--links__hidden': !navOpen }">
      <RouterLink to="/meet-jared" class="jeb-nav--link">Meet Jared</RouterLink>
      <RouterLink to="/books" class="jeb-nav--link">Books</RouterLink>

      <RouterLink to="/schoolvisits" class="jeb-nav--link">School Visits</RouterLink>

      <RouterLink to="/newsletter" class="jeb-nav--link">Newsletter</RouterLink>
      <RouterLink to="/extras" class="jeb-nav--link">Extras</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
/* ── Base nav ── */
.jeb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 2.5rem;
  background: var(--navy);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
}

/* ── Logo ── */
.jeb-nav--logo {
  display: flex;
  align-items: center;
}
/* Raised TV home button: Jared's own artwork, shown as-is (no white filter) */
.jeb-nav--logo img {
  height: 5.6rem;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 0 #0b1a33) drop-shadow(0 7px 7px rgba(0,0,0,.35));
  transform: translateY(-2px);
  transition: transform .12s ease, filter .12s ease;
}
.jeb-nav--logo:hover img,
.jeb-nav--logo:focus-visible img {
  transform: translateY(-4px);
  filter: drop-shadow(0 6px 0 #0b1a33) drop-shadow(0 10px 10px rgba(0,0,0,.35));
}
.jeb-nav--logo:active img {
  transform: translateY(2px);
  filter: drop-shadow(0 0 0 #0b1a33) drop-shadow(0 2px 2px rgba(0,0,0,.3));
}
@media screen and (max-width: 600px) {
  .jeb-nav--logo img { height: 4.4rem; }
}

/* ── Desktop links ── */
.jeb-nav--links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.jeb-nav--link,
.jeb-nav--dropBtn {
  color: var(--white);
  font-size: 1.4rem;
  padding: 0.6rem 1.1rem;
  border-radius: 0.4rem;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
}

.jeb-nav--link::after,
.jeb-nav--dropBtn::after {
  content: '';
  position: absolute;
  bottom: 0.3rem;
  left: 1.1rem;
  right: 1.1rem;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform 0.2s;
}

.jeb-nav--link:hover,
.jeb-nav--dropBtn:hover,
.jeb-nav--link.router-link-active {
  color: var(--gold);
  text-decoration: none;
}

.jeb-nav--link:hover::after,
.jeb-nav--dropBtn:hover::after,
.jeb-nav--link.router-link-active::after {
  transform: scaleX(1);
}

/* ── Dropdown ── */
.jeb-nav--dropdown {
  position: relative;
}

.jeb-nav--dropMenu {
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  background: var(--navy-dark);
  border: 1px solid rgba(245,200,66,0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  min-width: 14rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  z-index: 200;
}

.jeb-nav--dropItem {
  display: block;
  color: var(--white);
  padding: 0.75rem 1.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.jeb-nav--dropItem:hover {
  background: rgba(245,200,66,0.12);
  color: var(--gold);
  text-decoration: none;
}

/* ── Hamburger ── */
.jeb-nav--trigger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  padding: 0.9rem;
  border-radius: 0.4rem;
  background: rgba(255,255,255,0.1);
  border: none;
  cursor: pointer;
}

.jeb-nav--trigger:hover {
  background: rgba(255,255,255,0.18);
}

.jeb-nav--line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
}

/* ── Mobile ── */
@media screen and (max-width: 900px) {
  .jeb-nav {
    flex-wrap: wrap;
    padding: 0.75rem 1.25rem;
  }

  .jeb-nav--trigger {
    display: flex;
  }

  .jeb-nav--links {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.15);
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }

  .jeb-nav--links__hidden {
    display: none;
  }

  .jeb-nav--link,
  .jeb-nav--dropBtn {
    width: 100%;
    text-align: left;
    padding: 1rem 1.25rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .jeb-nav--link::after,
  .jeb-nav--dropBtn::after {
    display: none;
  }

  .jeb-nav--dropdown {
    width: 100%;
  }

  .jeb-nav--dropMenu {
    position: static;
    background: rgba(0,0,0,0.2);
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }

  .jeb-nav--dropItem {
    padding-left: 2.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
}
</style>
