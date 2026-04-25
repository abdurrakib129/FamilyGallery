import dadi from "@/assets/dadi.jpg";
import boroabba from "@/assets/boroabba.jpg";
import borofupu from "@/assets/borofupu.jpg";
import abba from "@/assets/abba.jpg";
import chacha from "@/assets/chacha.jpg";
import chotofupu from "@/assets/chotofupu.jpg";
import firoz from "@/assets/firoz.jpg";
import nasrin from "@/assets/nasrin.jpg";
import muslema from "@/assets/muslema.jpg";
import nazma from "@/assets/nazma.jpg";
import parvin from "@/assets/parvin.jpg";
import nazmul from "@/assets/nazmul.jpg";
import rasel from "@/assets/rasel.jpg";
import rakib from "@/assets/rakib.jpg";
import monolina from "@/assets/monolina.jpg";
import mugdho from "@/assets/mugdho.jpg";
import sharmin from "@/assets/sharmin.jpg";
import moinul from "@/assets/moinul.jpg";

export type InfoLine = { label: string; value: string; href?: string };

export type Person = {
  id: string;
  name: string;
  image: string;
  info: InfoLine[];
  childrenIds?: string[];
};

export const dadiPerson: Person = {
  id: "dadi",
  name: "মালেক জান",
  image: dadi,
  info: [
    { label: "নাম", value: "মালেক জান" },
    { label: "স্বামী", value: "হাবিবুর রহমান হটু" },
    { label: "জন্মস্থান", value: "বড় ফুলপুর" },
  ],
  childrenIds: ["boroabba", "borofupu", "abba", "chacha", "chotofupu"],
};

export const people: Record<string, Person> = {
  dadi: dadiPerson,
  boroabba: {
    id: "boroabba",
    name: "নজিবুর রহমান",
    image: boroabba,
    info: [
      { label: "নাম", value: "নজিবুর রহমান" },
      { label: "পিতা", value: "হাবিবুর রহমান" },
      { label: "মাতা", value: "মালেক জান" },
      { label: "পেশা", value: "সহ. প্রধান শিক্ষক" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
    childrenIds: ["firoz", "nasrin"],
  },
  borofupu: {
    id: "borofupu",
    name: "নতিফুল বেগম",
    image: borofupu,
    info: [
      { label: "নাম", value: "নতিফুল বেগম" },
      { label: "স্বামী", value: "মুকছেদ আলী" },
      { label: "পিতা", value: "হাবিবুর রহমান" },
      { label: "মাতা", value: "মালেক জান" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
    childrenIds: ["muslema", "nazma", "parvin", "nazmul"],
  },
  abba: {
    id: "abba",
    name: "দিলবর রহমান",
    image: abba,
    info: [
      { label: "নাম", value: "দিলবর রহমান" },
      { label: "পিতা", value: "হাবিবুর রহমান" },
      { label: "মাতা", value: "মালেক জান" },
      { label: "পেশা", value: "ব্যবসা ও কৃষি কাজ" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
    childrenIds: ["rasel", "rakib"],
  },
  chacha: {
    id: "chacha",
    name: "মহসিন আলী",
    image: chacha,
    info: [
      { label: "নাম", value: "মহসিন আলী" },
      { label: "পিতা", value: "হাবিবুর রহমান" },
      { label: "মাতা", value: "মালেক জান" },
      { label: "পেশা", value: "পুলিশ ইন্সপেক্টর" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
    childrenIds: ["monolina", "mugdho"],
  },
  chotofupu: {
    id: "chotofupu",
    name: "মইফুল বেগম",
    image: chotofupu,
    info: [
      { label: "নাম", value: "মইফুল বেগম" },
      { label: "স্বামী", value: "সেকেন আলী" },
      { label: "পিতা", value: "হাবিবুর রহমান" },
      { label: "মাতা", value: "মালেক জান" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
    childrenIds: ["sharmin", "moinul"],
  },

  // Boroabba's children
  firoz: {
    id: "firoz",
    name: "মোস্তাফিজুর রহমান ফিরোজ",
    image: firoz,
    info: [
      { label: "নাম", value: "মোস্তাফিজুর রহমান ফিরোজ" },
      { label: "পিতা", value: "নজিবুর রহমান" },
      { label: "মাতা", value: "ফিরোজা খাতুন" },
      { label: "পেশা", value: "সহকারী শিক্ষক" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
  },
  nasrin: {
    id: "nasrin",
    name: "নাসরিন সুলতানা",
    image: nasrin,
    info: [
      { label: "নাম", value: "নাসরিন সুলতানা" },
      { label: "স্বামী", value: "মাওলানা আফজাল হোসেন" },
      { label: "পিতা", value: "নজিবুর রহমান" },
      { label: "মাতা", value: "ফিরোজা খাতুন" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
    ],
  },

  // Borofupu's children
  muslema: {
    id: "muslema",
    name: "মুসলেমা আক্তার",
    image: muslema,
    info: [
      { label: "নাম", value: "মুসলেমা আক্তার" },
      { label: "স্বামী", value: "কছিম উদ্দিন" },
      { label: "পিতা", value: "মুকছেদ আলী" },
      { label: "মাতা", value: "নতিফুল বেগম" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পশ্চিম পাড়া" },
    ],
  },
  nazma: {
    id: "nazma",
    name: "নাজমা খাতুন",
    image: nazma,
    info: [
      { label: "নাম", value: "নাজমা খাতুন" },
      { label: "স্বামী", value: "নির্বাচন কমিশনার" },
      { label: "পিতা", value: "মুকছেদ আলী" },
      { label: "মাতা", value: "নতিফুল বেগম" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পশ্চিম পাড়া" },
    ],
  },
  parvin: {
    id: "parvin",
    name: "পারভিন আক্তার",
    image: parvin,
    info: [
      { label: "নাম", value: "পারভিন আক্তার" },
      { label: "স্বামী", value: "Unnamed" },
      { label: "পিতা", value: "মুকছেদ আলী" },
      { label: "মাতা", value: "নতিফুল বেগম" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "দেওপাড়া পশ্চিম পাড়া" },
    ],
  },
  nazmul: {
    id: "nazmul",
    name: "নাজমুল হক",
    image: nazmul,
    info: [
      { label: "নাম", value: "নাজমুল হক" },
      { label: "পিতা", value: "মুকছেদ আলী" },
      { label: "মাতা", value: "নতিফুল বেগম" },
      { label: "পেশা", value: "ব্যাংকার (সিমান্ত ব্যাংক)" },
      { label: "জন্মস্থান", value: "দেওপাড়া পশ্চিম পাড়া" },
    ],
  },

  // Abba's children
  rasel: {
    id: "rasel",
    name: "আব্দুর রশিদ রাসেল",
    image: rasel,
    info: [
      { label: "নাম", value: "আব্দুর রশিদ রাসেল" },
      { label: "পিতা", value: "দিলবর রহমান" },
      { label: "মাতা", value: "রওশন আরা" },
      { label: "পেশা", value: "ব্যবসা" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
      {
        label: "ফেইসবুক",
        value: "Click Here",
        href: "https://facebook.com/consulateboyrasel",
      },
    ],
  },
  rakib: {
    id: "rakib",
    name: "আব্দুর রাকিব",
    image: rakib,
    info: [
      { label: "নাম", value: "আব্দুর রাকিব" },
      { label: "পিতা", value: "দিলবর রহমান" },
      { label: "মাতা", value: "রওশন আরা" },
      { label: "পেশা", value: "সফটওয়্যার ইন্জিনিয়ার" },
      { label: "জন্মস্থান", value: "দেওপাড়া পূর্ব পাড়া" },
      {
        label: "ফেইসবুক",
        value: "Click Here",
        href: "https://www.facebook.com/abdurakib129/",
      },
      {
        label: "LinkedIn",
        value: "Click Here",
        href: "https://www.linkedin.com/in/rakib129/",
      },
    ],
  },

  // Chacha's children
  monolina: {
    id: "monolina",
    name: "মহিমা প্রকৃতি মনোলীনা",
    image: monolina,
    info: [
      { label: "নাম", value: "মহিমা প্রকৃতি মনোলীনা" },
      { label: "পিতা", value: "মুহসিন আলী" },
      { label: "মাতা", value: "আম্বিয়া সুলতানা" },
      { label: "পেশা", value: "শিক্ষার্থী (চট্রগ্রাম বিশ্ববিদ্যালয়)" },
      { label: "জন্মস্থান", value: "পাবনা" },
      {
        label: "ফেইসবুক",
        value: "Click Here",
        href: "https://facebook.com/mohima.prokitemonolina.9",
      },
    ],
  },
  mugdho: {
    id: "mugdho",
    name: "মাহিয়া মেহজাবিন মুগ্ধ",
    image: mugdho,
    info: [
      { label: "নাম", value: "মাহিয়া মেহজাবিন মুগ্ধ" },
      { label: "পিতা", value: "মুহসিন আলী" },
      { label: "মাতা", value: "আম্বিয়া সুলতানা" },
      { label: "পেশা", value: "শিক্ষার্থী (ক্লাস-৭)" },
      { label: "জন্মস্থান", value: "নওগাঁ" },
    ],
  },

  // Chotofupu's children
  sharmin: {
    id: "sharmin",
    name: "শারমিন আক্তার",
    image: sharmin,
    info: [
      { label: "নাম", value: "শারমিন আক্তার" },
      { label: "স্বামী", value: "লতিফ হোসেন" },
      { label: "পিতা", value: "সেকেন আলী" },
      { label: "মাতা", value: "মইফুল বেগম" },
      { label: "পেশা", value: "গৃহিণী" },
      { label: "জন্মস্থান", value: "গোয়ালমান্দ (ভরট্ট)" },
    ],
  },
  moinul: {
    id: "moinul",
    name: "মইনুল হোসেন",
    image: moinul,
    info: [
      { label: "নাম", value: "মইনুল হোসেন" },
      { label: "পিতা", value: "সেকেন আলী" },
      { label: "মাতা", value: "মইফুল বেগম" },
      { label: "পেশা", value: "ইলেক্ট্রিসিয়ান" },
      { label: "জন্মস্থান", value: "গোয়ালমান্দ (ভরট্ট)" },
    ],
  },
};
