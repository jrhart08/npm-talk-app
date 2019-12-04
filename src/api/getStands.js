import delay from 'delay';

export default async () => {
  await delay(300);

  return [
    {
      id: 100,
      name: 'Star Platinum',
      user: 'Jotaro Kujo',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/6/6a/StarPlatinumMangaAv.png/revision/latest/scale-to-width-down/120?cb=20190215003635',
      isAJoestar: true,
      series: 'Stardust Crusaders',
    },
    {
      id: 101,
      name: "Magician's Red",
      user: 'Muhammad Avdol',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/7/7c/MagicianRedMangaAv.png/revision/latest/scale-to-width-down/120?cb=20170915231312',
      isAJoestar: false,
      series: 'Stardust Crusaders',
    },
    {
      id: 102,
      name: 'Hermit Purple',
      user: 'Joseph Joestar',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/0/08/HermitPurpleMangaAv.png/revision/latest/scale-to-width-down/120?cb=20190215003729',
      isAJoestar: true,
      series: 'Stardust Crusaders',
    },
    {
      id: 103,
      name: 'Hierophant Green',
      user: 'Noriaki Kakyoin',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/6/6a/HierophantGreenMangaAv.png/revision/latest/scale-to-width-down/120?cb=20190215003826',
      isAJoestar: false,
      series: 'Stardust Crusaders',
    },
    {
      id: 104,
      name: 'Silver Chariot',
      user: 'Jean-Pierre Polnareff',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/8/8d/SilverChariotMangaAv.png/revision/latest/scale-to-width-down/120?cb=20190215004005',
      isAJoestar: false,
      series: 'Stardust Crusaders',
    },

    // diamond is unbreakable
    {
      id: 105,
      name: 'Crazy Diamond',
      user: 'Josule Higashikata',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/d/d5/CrazyDiamondMangaAv.png/revision/latest?cb=20170916000119',
      isAJoestar: true,
      series: 'Diamond Is Unbreakable',
    },
    {
      id: 106,
      name: 'The Hand',
      user: 'Okuyasu Nijimura',
      thumbnail: 'https://vignette.wikia.nocookie.net/jjba/images/7/78/TheHandMangaAv.png/revision/latest/scale-to-width-down/120?cb=20190428002029',
      isAJoestar: false,
      series: 'Diamond Is Unbreakable',
    },
    // ... that's enough
  ];
};
