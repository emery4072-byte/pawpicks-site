/* ============================================================
   EDIT THIS FILE to customize your site.
   1. Change SITE.name / tagline / email.
   2. Replace each product below with a real AliExpress product:
      - title: short, honest product name
      - blurb: 1-2 sentences on who it's for and why it's useful
      - price: the price range you see on AliExpress (e.g. "$8-12")
      - link: your affiliate link from the AliExpress Portals link generator
      - image: path to an image (e.g. "img/harness.jpg") or leave "" to show the emoji
      - tags: "deal" shows the product on the 11.11 deals section too
   ============================================================ */

const SITE = {
  name: "PawPicks",
  tagline: "Budget-friendly finds for dogs, cats and the people who love them.",
  email: "hello@example.com"
};

const PRODUCTS = [
  // ---------- DOGS ----------
  { cat: "dogs", emoji: "🦮", title: "Replace: No-pull dog harness",
    blurb: "Describe who it's for (e.g. medium dogs that pull on walks) and what makes it a good pick.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] },
  { cat: "dogs", emoji: "🎾", title: "Replace: Chew toy",
    blurb: "Mention material, size options and what kind of chewer it suits.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: [] },
  { cat: "dogs", emoji: "🛁", title: "Replace: Grooming glove or brush",
    blurb: "Say what coat types it works on and how it helps with shedding.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: [] },
  { cat: "dogs", emoji: "🥣", title: "Replace: Slow feeder bowl",
    blurb: "Explain the benefit (slower eating) and which dogs it's best for.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] },

  // ---------- CATS ----------
  { cat: "cats", emoji: "🐈", title: "Replace: Cat scratching pad",
    blurb: "Mention size, material and whether it's good for protecting furniture.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] },
  { cat: "cats", emoji: "🪶", title: "Replace: Interactive wand toy",
    blurb: "Describe the play style it encourages and how durable it is.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: [] },
  { cat: "cats", emoji: "💧", title: "Replace: Pet water fountain",
    blurb: "Note capacity, noise level and how easy it is to clean.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: [] },
  { cat: "cats", emoji: "🧺", title: "Replace: Cozy cat bed",
    blurb: "Mention size, washability and what kind of cat it suits.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] },

  // ---------- GIFTS ----------
  { cat: "gifts", emoji: "🎁", title: "Replace: Personalized pet ID tag",
    blurb: "A small, useful gift. Mention customization options.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] },
  { cat: "gifts", emoji: "🧦", title: "Replace: Pet-themed gift for owners",
    blurb: "Something for the pet lover in your life: mug, socks, keychain, etc.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: [] },
  { cat: "gifts", emoji: "🎄", title: "Replace: Holiday pet costume or bandana",
    blurb: "Mention sizes and fabric. Check shipping time before the holidays.",
    price: "$0-0", link: "https://REPLACE-WITH-YOUR-AFFILIATE-LINK", image: "", tags: ["deal"] }
];

const CATEGORIES = {
  dogs:  { label: "Dogs",  emoji: "🐶", page: "dogs.html",  desc: "Harnesses, toys, grooming and feeding picks for dogs." },
  cats:  { label: "Cats",  emoji: "🐱", page: "cats.html",  desc: "Scratchers, toys, fountains and beds for cats." },
  gifts: { label: "Gifts", emoji: "🎁", page: "gifts.html", desc: "Gift ideas for pets and pet lovers." }
};
