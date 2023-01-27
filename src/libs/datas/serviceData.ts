export type TServiceCard = {
  src: string;
  width: number;
  height: number;
  title: string;
  text: string;
  href: string;
  type: 'families' | 'present' | 'presentList';
};

export const serviceCardData = [
  {
    src: '/home/userList.svg',
    width: 297,
    height: 297,
    title: '家族一覧',
    text: '話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸',
    href: '/',
    type: 'families',
  },
  {
    src: '/home/present.svg',
    width: 375,
    height: 332,
    title: 'お年玉・プレゼント登録',
    text: '話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗',
    href: '/',
    type: 'present',
  },
  {
    src: '/home/presentList.svg',
    width: 431,
    height: 319,
    title: 'お年玉・プレゼント一覧',
    text: '話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸',
    href: '/',
    type: 'presentList',
  },
] as const satisfies readonly TServiceCard[];
