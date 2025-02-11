import { atom, selector } from "recoil";
import { AddressForm, Icon, Item, SelectedItem, Slider } from "../Types";

export const topState = atom<Item[]>({
  key: "topState",
  default: [
    {
      id: "상의1",
      name: "상의 1",
      price: 35000,
      sale: "20%",
      img: "../assets/top1.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top1-1.webp",
        "../assets/top1-2.webp",
        "../assets/top1-3.webp",
      ],
    },
    {
      id: "상의2",
      name: "상의 2",
      price: 32000,
      sale: "24%",
      img: "../assets/top2.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top2-1.webp",
        "../assets/top2-2.webp",
        "../assets/top2-3.webp",
      ],
    },
    {
      id: "상의3",
      name: "상의 3",
      price: 41500,
      img: "../assets/top3.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top3-1.webp",
        "../assets/top3-2.webp",
        "../assets/top3-3.webp",
      ],
    },
    {
      id: "상의4",
      name: "상의 4",
      price: 89000,
      sale: "20%",
      img: "../assets/top4.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top4-1.webp",
        "../assets/top4-2.webp",
        "../assets/top4-3.webp",
      ],
    },
    {
      id: "상의5",
      name: "상의 5",
      price: 62000,
      img: "../assets/top5.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top5-1.webp",
        "../assets/top5-2.webp",
        "../assets/top5-3.webp",
      ],
    },
    {
      id: "상의6",
      name: "상의 6",
      price: 29000,
      sale: "18%",
      img: "../assets/top6.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top6-1.webp",
        "../assets/top6-2.webp",
        "../assets/top6-3.webp",
      ],
    },
    {
      id: "상의7",
      name: "상의 7",
      price: 35000,
      img: "../assets/top7.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top7-1.webp",
        "../assets/top7-2.webp",
        "../assets/top7-3.webp",
      ],
    },
    {
      id: "상의8",
      name: "상의 8",
      price: 30500,
      img: "../assets/top8.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top8-1.webp",
        "../assets/top8-2.webp",
        "../assets/top8-3.webp",
      ],
    },
    {
      id: "상의9",
      name: "상의 9",
      price: 49000,
      sale: "14%",
      img: "../assets/top9.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top9-1.webp",
        "../assets/top9-2.webp",
        "../assets/top9-3.webp",
      ],
    },
    {
      id: "상의10",
      name: "상의 10",
      price: 34000,
      sale: "10%",
      img: "../assets/top10.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top10-1.webp",
        "../assets/top10-2.webp",
        "../assets/top10-3.webp",
      ],
    },
    {
      id: "상의11",
      name: "상의 11",
      price: 32500,
      sale: "15%",
      img: "../assets/top11.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top11-1.webp",
        "../assets/top11-2.webp",
        "../assets/top11-3.webp",
      ],
    },
    {
      id: "상의12",
      name: "상의 12",
      price: 36400,
      sale: "12%",
      img: "../assets/top12.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top12-1.webp",
        "../assets/top12-2.webp",
        "../assets/top12-3.webp",
      ],
    },
    {
      id: "상의13",
      name: "상의 13",
      price: 64000,
      sale: "10%",
      img: "../assets/top13.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top13-1.webp",
        "../assets/top13-2.webp",
        "../assets/top13-3.webp",
      ],
    },
    {
      id: "상의14",
      name: "상의 14",
      price: 37500,
      sale: "11%",
      img: "../assets/top14.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top14-1.webp",
        "../assets/top14-2.webp",
        "../assets/top14-3.webp",
      ],
    },
    {
      id: "상의15",
      name: "상의 15",
      price: 55000,
      sale: "15%",
      img: "../assets/top15.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top15-1.webp",
        "../assets/top15-2.webp",
        "../assets/top15-3.webp",
      ],
    },
    {
      id: "상의16",
      name: "상의 16",
      price: 85500,
      sale: "12%",
      img: "../assets/top16.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top16-1.webp",
        "../assets/top16-2.webp",
        "../assets/top16-3.webp",
      ],
    },
    {
      id: "상의17",
      name: "상의 17",
      price: 95400,
      sale: "10%",
      img: "../assets/top17.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top17-1.webp",
        "../assets/top17-2.webp",
        "../assets/top17-3.webp",
      ],
    },
    {
      id: "상의18",
      name: "상의 18",
      price: 75000,
      sale: "15%",
      img: "../assets/top18.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top18-1.webp",
        "../assets/top18-2.webp",
        "../assets/top18-3.webp",
      ],
    },
    {
      id: "상의19",
      name: "상의 19",
      price: 105000,
      sale: "18%",
      img: "../assets/top19.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/top19-1.webp",
        "../assets/top19-2.webp",
        "../assets/top19-3.webp",
      ],
    },
  ],
});

export const pantsState = atom<Item[]>({
  key: "pantsState",
  default: [
    {
      id: "하의1",
      name: "하의 1",
      price: 62000,
      sale: "14%",
      img: "../assets/pants1.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants1-1.webp",
        "../assets/pants1-2.webp",
        "../assets/pants1-3.webp",
      ],
    },
    {
      id: "하의2",
      name: "하의 2",
      price: 45000,
      img: "../assets/pants2.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants2-1.webp",
        "../assets/pants2-2.webp",
        "../assets/pants2-3.webp",
      ],
    },
    {
      id: "하의3",
      name: "하의 3",
      price: 38000,
      sale: "20%",
      img: "../assets/pants3.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants3-1.webp",
        "../assets/pants3-2.webp",
        "../assets/pants3-3.webp",
      ],
    },
    {
      id: "하의4",
      name: "하의 4",
      price: 47000,
      sale: "16%",
      img: "../assets/pants4.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants4-1.webp",
        "../assets/pants4-2.webp",
        "../assets/pants4-3.webp",
      ],
    },
    {
      id: "하의5",
      name: "하의 5",
      price: 51000,
      img: "../assets/pants5.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants5-1.webp",
        "../assets/pants5-2.webp",
        "../assets/pants5-3.webp",
      ],
    },
    {
      id: "하의6",
      name: "하의 6",
      price: 58600,
      sale: "20%",
      img: "../assets/pants6.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants6-1.webp",
        "../assets/pants6-2.webp",
        "../assets/pants6-3.webp",
      ],
    },
    {
      id: "하의7",
      name: "하의 7",
      price: 78600,
      img: "../assets/pants7.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants7-1.webp",
        "../assets/pants7-2.webp",
        "../assets/pants7-3.webp",
      ],
    },
    {
      id: "하의8",
      name: "하의 8",
      price: 85600,
      sale: "20%",
      img: "../assets/pants8.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants8-1.webp",
        "../assets/pants8-2.webp",
        "../assets/pants8-3.webp",
      ],
    },
    {
      id: "하의9",
      name: "하의 9",
      price: 69500,
      img: "../assets/pants9.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants9-1.webp",
        "../assets/pants9-2.webp",
        "../assets/pants9-3.webp",
      ],
    },
    {
      id: "하의10",
      name: "하의 10",
      price: 88400,
      sale: "10%",
      img: "../assets/pants10.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants10-1.webp",
        "../assets/pants10-2.webp",
        "../assets/pants10-3.webp",
      ],
    },
    {
      id: "하의11",
      name: "하의 11",
      price: 95500,
      sale: "15%",
      img: "../assets/pants11.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants11-1.webp",
        "../assets/pants11-2.webp",
        "../assets/pants11-3.webp",
      ],
    },
    {
      id: "하의12",
      name: "하의 12",
      price: 106000,
      sale: "12%",
      img: "../assets/pants12.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants12-1.webp",
        "../assets/pants12-2.webp",
        "../assets/pants12-3.webp",
      ],
    },
    {
      id: "하의13",
      name: "하의 13",
      price: 95000,
      sale: "10%",
      img: "../assets/pants13.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants13-1.webp",
        "../assets/pants13-2.webp",
        "../assets/pants13-3.webp",
      ],
    },
    {
      id: "하의14",
      name: "하의 14",
      price: 85500,
      sale: "15%",
      img: "../assets/pants14.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants14-1.webp",
        "../assets/pants14-2.webp",
        "../assets/pants14-3.webp",
      ],
    },
  ],
});

export const skirtState = atom<Item[]>({
  key: "skirtState",
  default: [
    {
      id: "스커트1",
      name: "스커트 1",
      price: 56000,
      sale: "20%",
      img: "../assets/skirt1.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt1-1.webp",
        "../assets/skirt1-2.webp",
        "../assets/skirt1-3.webp",
      ],
    },
    {
      id: "스커트2",
      name: "스커트 2",
      price: 66000,
      sale: "20%",
      img: "../assets/skirt2.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt2-1.webp",
        "../assets/skirt2-2.webp",
        "../assets/skirt2-3.webp",
      ],
    },
    {
      id: "스커트3",
      name: "스커트 3",
      price: 87500,
      img: "../assets/skirt3.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt3-1.webp",
        "../assets/skirt3-2.webp",
        "../assets/skirt3-3.webp",
      ],
    },
    {
      id: "스커트4",
      name: "스커트 4",
      price: 89000,
      img: "../assets/skirt4.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt4-1.webp",
        "../assets/skirt4-2.webp",
        "../assets/skirt4-3.webp",
      ],
    },
    {
      id: "스커트5",
      name: "스커트 5",
      price: 52000,
      sale: "10%",
      img: "../assets/skirt5.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt5-1.webp",
        "../assets/skirt5-2.webp",
        "../assets/skirt5-3.webp",
      ],
    },
    {
      id: "스커트6",
      name: "스커트 6",
      price: 56400,
      img: "../assets/skirt6.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt6-1.webp",
        "../assets/skirt6-2.webp",
        "../assets/skirt6-3.webp",
      ],
    },
    {
      id: "스커트7",
      name: "스커트 7",
      price: 57500,
      img: "../assets/skirt7.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt7-1.webp",
        "../assets/skirt7-2.webp",
        "../assets/skirt7-3.webp",
      ],
    },
    {
      id: "스커트8",
      name: "스커트 8",
      price: 56500,
      img: "../assets/skirt8.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt8-1.webp",
        "../assets/skirt8-2.webp",
        "../assets/skirt8-3.webp",
      ],
    },
    {
      id: "스커트9",
      name: "스커트 9",
      price: 65500,
      img: "../assets/skirt9.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt9-1.webp",
        "../assets/skirt9-2.webp",
        "../assets/skirt9-3.webp",
      ],
    },
    {
      id: "스커트10",
      name: "스커트 10",
      price: 75500,
      img: "../assets/skirt10.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt10-1.webp",
        "../assets/skirt10-2.webp",
        "../assets/skirt10-3.webp",
      ],
    },
    {
      id: "스커트11",
      name: "스커트 11",
      price: 74500,
      img: "../assets/skirt11.webp",
      size: ["XS", "S", "M", "L"],
      sImgs: [
        "../assets/skirt11-1.webp",
        "../assets/skirt11-2.webp",
        "../assets/skirt11-3.webp",
      ],
    },
  ],
});

export const outerState = atom<Item[]>({
  key: "outerState",
  default: [
    {
      id: "아우터1",
      name: "아우터 1",
      price: 180000,
      img: "../assets/outer1.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer1-1.webp",
        "../assets/outer1-2.webp",
        "../assets/outer1-3.webp",
      ],
    },
    {
      id: "아우터2",
      name: "아우터 2",
      price: 185500,
      sale: "15%",
      img: "../assets/outer2.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer2-1.webp",
        "../assets/outer2-2.webp",
        "../assets/outer2-3.webp",
      ],
    },
    {
      id: "아우터3",
      name: "아우터 3",
      price: 240000,
      img: "../assets/outer3.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer3-1.webp",
        "../assets/outer3-2.webp",
        "../assets/outer3-3.webp",
      ],
    },
    {
      id: "아우터4",
      name: "아우터 4",
      price: 275500,
      sale: "20%",
      img: "../assets/outer4.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer4-1.webp",
        "../assets/outer4-2.webp",
        "../assets/outer4-3.webp",
      ],
    },
    {
      id: "아우터5",
      name: "아우터 5",
      price: 189000,
      sale: "20%",
      img: "../assets/outer5.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: ["../assets/outer5-1.webp", "../assets/outer5-2.webp"],
    },
    {
      id: "아우터6",
      name: "아우터 6",
      price: 225300,
      img: "../assets/outer6.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer6-1.webp",
        "../assets/outer6-2.webp",
        "../assets/outer6-3.webp",
      ],
    },
    {
      id: "아우터7",
      name: "아우터 7",
      price: 315700,
      img: "../assets/outer7.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer7-1.webp",
        "../assets/outer7-2.webp",
        "../assets/outer7-3.webp",
      ],
    },
    {
      id: "아우터8",
      name: "아우터 8",
      price: 386000,
      img: "../assets/outer8.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer8-1.webp",
        "../assets/outer8-2.webp",
        "../assets/outer8-3.webp",
      ],
    },
    {
      id: "아우터9",
      name: "아우터 9",
      price: 299000,
      sale: "20%",
      img: "../assets/outer9.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer9-1.webp",
        "../assets/outer9-2.webp",
        "../assets/outer9-3.webp",
      ],
    },
    {
      id: "아우터10",
      name: "아우터 10",
      price: 312800,
      img: "../assets/outer10.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer10-1.webp",
        "../assets/outer10-2.webp",
        "../assets/outer10-3.webp",
      ],
    },
    {
      id: "아우터11",
      name: "아우터 11",
      price: 282200,
      sale: "16%",
      img: "../assets/outer11.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer11-1.webp",
        "../assets/outer11-2.webp",
        "../assets/outer11-3.webp",
      ],
    },
    {
      id: "아우터12",
      name: "아우터 12",
      price: 382800,
      sale: "20%",
      img: "../assets/outer12.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer12-1.webp",
        "../assets/outer12-2.webp",
        "../assets/outer12-3.webp",
      ],
    },
    {
      id: "아우터13",
      name: "아우터 13",
      price: 402800,
      sale: "20%",
      img: "../assets/outer13.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer13-1.webp",
        "../assets/outer13-2.webp",
        "../assets/outer13-3.webp",
      ],
    },
    {
      id: "아우터14",
      name: "아우터 14",
      price: 322500,
      sale: "15%",
      img: "../assets/outer14.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer14-1.webp",
        "../assets/outer14-2.webp",
        "../assets/outer14-3.webp",
      ],
    },
    {
      id: "아우터15",
      name: "아우터 15",
      price: 522800,
      sale: "18%",
      img: "../assets/outer15.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer15-1.webp",
        "../assets/outer15-2.webp",
        "../assets/outer15-3.webp",
      ],
    },
    {
      id: "아우터16",
      name: "아우터 16",
      price: 625800,
      sale: "25%",
      img: "../assets/outer16.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer16-1.webp",
        "../assets/outer16-2.webp",
        "../assets/outer16-3.webp",
      ],
    },
    {
      id: "아우터17",
      name: "아우터 17",
      price: 542000,
      sale: "10%",
      img: "../assets/outer17.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer17-1.webp",
        "../assets/outer17-2.webp",
        "../assets/outer17-3.webp",
      ],
    },
    {
      id: "아우터18",
      name: "아우터 18",
      price: 665200,
      sale: "22%",
      img: "../assets/outer18.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer18-1.webp",
        "../assets/outer18-2.webp",
        "../assets/outer18-3.webp",
      ],
    },
  ],
});

export const shoesState = atom<Item[]>({
  key: "shoesState",
  default: [
    {
      id: "신발1",
      name: "신발 1",
      price: 220000,
      img: "../assets/shoes1.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes1-1.webp",
        "../assets/shoes1-2.webp",
        "../assets/shoes1-3.webp",
      ],
    },
    {
      id: "신발2",
      name: "신발 2",
      price: 225000,
      sale: "12%",
      img: "../assets/shoes2.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes2-1.webp",
        "../assets/shoes2-2.webp",
        "../assets/shoes2-3.webp",
      ],
    },
    {
      id: "신발3",
      name: "신발 3",
      price: 205500,
      img: "../assets/shoes3.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes3-1.webp",
        "../assets/shoes3-2.webp",
        "../assets/shoes3-3.webp",
      ],
    },
    {
      id: "신발4",
      name: "신발 4",
      price: 206500,
      sale: "20%",
      img: "../assets/shoes4.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes4-1.webp",
        "../assets/shoes4-2.webp",
        "../assets/shoes4-3.webp",
      ],
    },
    {
      id: "신발5",
      name: "신발 5",
      price: 165000,
      sale: "15%",
      img: "../assets/shoes5.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes5-1.webp",
        "../assets/shoes5-2.webp",
        "../assets/shoes5-3.webp",
      ],
    },
    {
      id: "신발6",
      name: "신발 6",
      price: 158500,
      img: "../assets/shoes6.webp",
      size: ["235", "240", "245", "250", "255", "260", "265"],
      sImgs: [
        "../assets/shoes6-1.webp",
        "../assets/shoes6-2.webp",
        "../assets/shoes6-3.webp",
      ],
    },
  ],
});

export const accessoryState = atom<Item[]>({
  key: "accessoryState",
  default: [
    {
      id: "주얼리1",
      name: "주얼리 1",
      price: 23500,
      sale: "17%",
      img: "../assets/accessory1.webp",
      color: ["실버", "골드"],
      sImgs: [
        "../assets/accessory1-1.webp",
        "../assets/accessory1-2.webp",
        "../assets/accessory1-3.webp",
      ],
    },
    {
      id: "주얼리2",
      name: "주얼리 2",
      price: 34500,
      sale: "20%",
      img: "../assets/accessory2.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory2-1.webp"],
    },
    {
      id: "주얼리3",
      name: "주얼리 3",
      price: 28300,
      img: "../assets/accessory3.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory3-1.webp", "../assets/accessory3-2.webp"],
    },
    {
      id: "주얼리4",
      name: "주얼리 4",
      price: 22000,
      sale: "10%",
      img: "../assets/accessory4.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory4-1.webp", "../assets/accessory4-2.webp"],
    },
    {
      id: "주얼리5",
      name: "주얼리 5",
      price: 37500,
      img: "../assets/accessory5.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory5-1.webp", "../assets/accessory5-2.webp"],
    },
    {
      id: "주얼리6",
      name: "주얼리 6",
      price: 31400,
      img: "../assets/accessory6.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory6-1.webp", "../assets/accessory6-2.webp"],
    },
  ],
});

export const eyewareState = atom<Item[]>({
  key: "eyewareState",
  default: [
    {
      id: "아이웨어1",
      name: "아이웨어 1",
      price: 125000,
      img: "../assets/eyeware1.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      sImgs: ["../assets/eyeware1-1.webp", "../assets/eyeware1-2.webp"],
    },
    {
      id: "아이웨어2",
      name: "아이웨어 2",
      price: 125000,
      sale: "18%",
      img: "../assets/eyeware2.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      sImgs: ["../assets/eyeware2-1.webp", "../assets/eyeware2-2.webp"],
    },
    {
      id: "아이웨어3",
      name: "아이웨어 3",
      price: 124500,
      sale: "10%",
      img: "../assets/eyeware3.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      sImgs: ["../assets/eyeware3-1.webp", "../assets/eyeware3-2.webp"],
    },
    {
      id: "아이웨어4",
      name: "아이웨어 4",
      price: 167500,
      img: "../assets/eyeware4.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      sImgs: ["../assets/eyeware4-1.webp", "../assets/eyeware4-2.webp"],
    },
  ],
});

export const capState = atom<Item[]>({
  key: "capState",
  default: [
    {
      id: "모자1",
      name: "모자 1",
      price: 52000,
      sale: "14%",
      img: "../assets/cap1.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      size: ["1", "2", "3"],
      sImgs: [
        "../assets/cap1-1.webp",
        "../assets/cap1-2.webp",
        "../assets/cap1-3.webp",
      ],
    },
    {
      id: "모자2",
      name: "모자 2",
      price: 55300,
      sale: "20%",
      img: "../assets/cap2.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      size: ["1", "2", "3"],
      sImgs: [
        "../assets/cap2-1.webp",
        "../assets/cap2-2.webp",
        "../assets/cap2-3.webp",
      ],
    },
  ],
});

export const bagState = atom<Item[]>({
  key: "bagState",
  default: [
    {
      id: "가방1",
      name: "가방 1",
      price: 252200,
      img: "../assets/bag1.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag1-1.webp",
        "../assets/bag1-2.webp",
        "../assets/bag1-3.webp",
      ],
    },
    {
      id: "가방2",
      name: "가방 2",
      price: 255100,
      sale: "16%",
      img: "../assets/bag2.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag2-1.webp",
        "../assets/bag2-2.webp",
        "../assets/bag2-3.webp",
      ],
    },
    {
      id: "가방3",
      name: "가방 3",
      price: 199000,
      img: "../assets/bag3.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag3-1.webp",
        "../assets/bag3-2.webp",
        "../assets/bag3-3.webp",
      ],
    },
    {
      id: "가방4",
      name: "가방 4",
      price: 198000,
      sale: "20%",
      img: "../assets/bag4.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag4-1.webp",
        "../assets/bag4-2.webp",
        "../assets/bag4-3.webp",
      ],
    },
    {
      id: "가방5",
      name: "가방 5",
      price: 218000,
      sale: "5%",
      img: "../assets/bag5.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag5-1.webp",
        "../assets/bag5-2.webp",
        "../assets/bag5-3.webp",
      ],
    },
    {
      id: "가방6",
      name: "가방 6",
      price: 236000,
      img: "../assets/bag6.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag6-1.webp",
        "../assets/bag6-2.webp",
        "../assets/bag6-3.webp",
      ],
    },
    {
      id: "가방7",
      name: "가방 7",
      price: 248000,
      img: "../assets/bag7.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag7-1.webp",
        "../assets/bag7-2.webp",
        "../assets/bag7-3.webp",
      ],
    },
    {
      id: "가방8",
      name: "가방 8",
      price: 328000,
      sale: "10%",
      img: "../assets/bag8.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag8-1.webp",
        "../assets/bag8-2.webp",
        "../assets/bag8-3.webp",
      ],
    },
    {
      id: "가방9",
      name: "가방 9",
      price: 455000,
      sale: "15%",
      img: "../assets/bag9.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag9-1.webp",
        "../assets/bag9-2.webp",
        "../assets/bag9-3.webp",
      ],
    },
    {
      id: "가방10",
      name: "가방 10",
      price: 565000,
      sale: "12%",
      img: "../assets/bag10.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag10-1.webp",
        "../assets/bag10-2.webp",
        "../assets/bag10-3.webp",
      ],
    },
  ],
});

export const socksState = atom<Item[]>({
  key: "socksState",
  default: [
    {
      id: "양말1",
      name: "양말 1",
      price: 7400,
      img: "../assets/socks1.webp",
      color: ["블랙", "브라운", "화이트"],
      size: ["1", "2", "3"],
      sImgs: ["../assets/socks1-1.webp", "../assets/socks1-2.webp"],
    },
    {
      id: "양말2",
      name: "양말 2",
      price: 7400,
      sale: "10%",
      img: "../assets/socks2.webp",
      color: ["블랙", "브라운", "화이트"],
      size: ["1", "2", "3"],
      sImgs: ["../assets/socks2-1.webp", "../assets/socks2-2.webp"],
    },
    {
      id: "양말3",
      name: "양말 3",
      price: 6200,
      sale: "16%",
      img: "../assets/socks3.webp",
      color: ["블랙", "브라운", "화이트"],
      size: ["1", "2", "3"],
      sImgs: ["../assets/socks3-1.webp", "../assets/socks3-2.webp"],
    },
    {
      id: "양말4",
      name: "양말 4",
      price: 6200,
      img: "../assets/socks4.webp",
      color: ["블랙", "브라운", "화이트"],
      size: ["1", "2", "3"],
      sImgs: ["../assets/socks4-1.webp", "../assets/socks4-2.webp"],
    },
  ],
});

// 카테고리 아이콘
export const iconsState = atom<Icon[]>({
  key: "iconsState",
  default: [
    {
      src: "../assets/top.webp",
      alt: "상의 경로 이동",
      path: "/top",
      label: "상의",
    },
    {
      src: "../assets/pants.webp",
      alt: "하의 경로 이동",
      path: "/pants",
      label: "하의",
    },
    {
      src: "../assets/outer.webp",
      alt: "아우터 경로 이동",
      path: "/outer",
      label: "아우터",
    },
    {
      src: "../assets/shoes.webp",
      alt: "신발 경로 이동",
      path: "/shoes",
      label: "신발",
    },
    {
      src: "../assets/skirt.webp",
      alt: "치마 경로 이동",
      path: "/skirt",
      label: "스커트",
    },
    {
      src: "../assets/socks.webp",
      alt: "양말 경로 이동",
      path: "/socks",
      label: "양말",
    },
    {
      src: "../assets/bag.webp",
      alt: "가방 경로 이동",
      path: "/bag",
      label: "가방",
    },
    {
      src: "../assets/cap.webp",
      alt: "모자 경로 이동",
      path: "/cap",
      label: "모자",
    },
    {
      src: "../assets/eyeware.webp",
      alt: "아이웨어 경로 이동",
      path: "/eyeware",
      label: "아이웨어",
    },
    {
      src: "../assets/acc.webp",
      alt: "악세사리 경로 이동",
      path: "/accessory",
      label: "주얼리",
    },
  ],
});

// 좋아요한 상품 상태
export const favoriteState = atom<Item[]>({
  key: "favoriteState",
  default: [],
});

// 선택된 상품 한개를 상세페이지 모달로
export const selectedItemState = atom<SelectedItem>({
  key: "selectedItemState",
  default: {
    id: "",
    name: "",
    price: 0,
    color: [],
    sale: "",
    img: "",
    size: [],
    sImgs: [],
    selectedSize: null,
    selectedColor: null,
    quantity: 1,
  },
});

// 장바구니 상태
export const cartState = atom<SelectedItem[]>({
  key: "cartState",
  default: [],
});

// 장바구니에서 선택된 상품 상태
export const selectedCartItemState = atom<SelectedItem[]>({
  key: "selectedCartItemState",
  default: [],
});

// 슬라이더
export const sliderState = atom<Slider[]>({
  key: "sliderState",
  default: [
    { id: "슬라이더1", img: "../assets/banner1.webp" },
    { id: "슬라이더2", img: "../assets/banner2.webp" },
    { id: "슬라이더3", img: "../assets/banner3.webp" },
    { id: "슬라이더4", img: "../assets/banner4.webp" },
    { id: "슬라이더5", img: "../assets/banner5.webp" },
    { id: "슬라이더6", img: "../assets/banner6.webp" },
    { id: "슬라이더7", img: "../assets/banner7.webp" },
    { id: "슬라이더8", img: "../assets/banner8.webp" },
    { id: "슬라이더9", img: "../assets/banner9.webp" },
    { id: "슬라이더10", img: "../assets/banner10.webp" },
    { id: "슬라이더11", img: "../assets/banner11.webp" },
    { id: "슬라이더12", img: "../assets/banner12.webp" },
    { id: "슬라이더13", img: "../assets/banner13.webp" },
  ],
});

// 추천상품 슬라이더
export const recommendedItemsState = atom({
  key: "recommendedItems",
  default: [
    {
      id: "양말4",
      name: "양말 4",
      price: 6200,
      img: "../assets/socks4.webp",
      color: ["블랙", "브라운", "화이트"],
      size: ["1", "2", "3"],
      sImgs: ["../assets/socks4-1.webp", "../assets/socks4-2.webp"],
    },
    {
      id: "주얼리4",
      name: "주얼리 4",
      price: 22000,
      sale: "10%",
      img: "../assets/accessory4.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory4-2.webp", "../assets/accessory4-1.webp"],
    },
    {
      id: "모자2",
      name: "모자 2",
      price: 55300,
      sale: "20%",
      img: "../assets/cap2.webp",
      color: ["블랙", "브라운", "그레이", "화이트"],
      size: ["1", "2", "3"],
      sImgs: [
        "../assets/cap2-1.webp",
        "../assets/cap2-2.webp",
        "../assets/cap2-3.webp",
      ],
    },
    {
      id: "아우터17",
      name: "아우터 17",
      price: 542000,
      sale: "10%",
      img: "../assets/outer17.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/outer17-1.webp",
        "../assets/outer17-2.webp",
        "../assets/outer17-3.webp",
      ],
    },
    {
      id: "하의12",
      name: "하의 12",
      price: 85500,
      sale: "15%",
      img: "../assets/pants12.webp",
      size: ["S", "M", "L", "XL"],
      sImgs: [
        "../assets/pants12-1.webp",
        "../assets/pants12-2.webp",
        "../assets/pants12-3.webp",
      ],
    },
    {
      id: "주얼리3",
      name: "주얼리 3",
      price: 28300,
      img: "../assets/accessory3.webp",
      color: ["실버", "골드"],
      sImgs: ["../assets/accessory3-1.webp", "../assets/accessory3-2.webp"],
    },
    {
      id: "가방10",
      name: "가방 10",
      price: 565000,
      sale: "12%",
      img: "../assets/bag10.webp",
      color: ["블랙", "브라운", "화이트"],
      sImgs: [
        "../assets/bag10-1.webp",
        "../assets/bag10-2.webp",
        "../assets/bag10-3.webp",
      ],
    },
  ],
});

// 모든 카테고리 아이템을 합치는 selector
export const allItemsState = selector<Item[]>({
  key: "allItemsState",
  get: ({ get }) => {
    const socks = get(socksState);
    const caps = get(capState);
    const bags = get(bagState);
    const tops = get(topState);
    const pants = get(pantsState);
    const skirt = get(skirtState);
    const outer = get(outerState);
    const shoes = get(shoesState);
    const accessory = get(accessoryState);
    const eyeware = get(eyewareState);

    // 모든 카테고리 아이템을 하나의 배열로 합침
    return [
      ...outer,
      ...accessory,
      ...bags,
      ...caps,
      ...tops,
      ...pants,
      ...skirt,
      ...shoes,
      ...eyeware,
      ...socks,
    ];
  },
});

// 앱 모달 on/off
export const appModalState = atom<boolean>({
  key: "appModalState",
  default: false,
});

// 주소 상태
export const addressFormState = atom<AddressForm>({
  key: "addressFormState",
  default: {
    zonecode: 0,
    address: "",
    detailAddress: "",
    addressName: "",
    personName: "",
    phone: "",
  },
});

export const scrollState = atom({
  key: "scrollState",
  default: 0,
});
