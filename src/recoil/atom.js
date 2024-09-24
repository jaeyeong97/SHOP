import { atom } from 'recoil';

export const topState = atom({
    key: 'topState',
    default: [
        { id: 1, name: '상의 1', price: '35,000', img: '../assets/top1.webp' },
        { id: 2, name: '상의 2', price: '32,000', img: '../assets/top2.webp' },
        { id: 3, name: '상의 3', price: '41,500', img: '../assets/top3.webp' },
        { id: 4, name: '상의 4', price: '89,000', img: '../assets/top4.webp' },
        { id: 5, name: '상의 5', price: '62,000', img: '../assets/top5.webp' },
        { id: 6, name: '상의 6', price: '29,000', img: '../assets/top6.webp' },
    ],
});

export const pantsState = atom({
    key: 'pantsState',
    default: [
        { id: 1, name: '하의 1', price: '62,000', img: '../assets/pants1.png' },
        { id: 2, name: '하의 2', price: '45,000', img: '../assets/pants2.webp' },
        { id: 3, name: '하의 3', price: '38,000', img: '../assets/pants3.webp' },
        { id: 4, name: '하의 4', price: '47,000', img: '../assets/pants4.webp' },
        { id: 5, name: '하의 5', price: '51,000', img: '../assets/pants5.png' },
        { id: 6, name: '하의 6', price: '58,600', img: '../assets/pants6.png' },
    ],
});

export const skirtState = atom({
    key: 'skirtState',
    default: [
        { id: 1, name: '스커트 1', price: '56,000', img: '../assets/skirt1.webp' },
        { id: 2, name: '스커트 2', price: '66,000', img: '../assets/skirt2.webp' },
        { id: 3, name: '스커트 3', price: '87,500', img: '../assets/skirt3.webp' },
        { id: 4, name: '스커트 4', price: '89,000', img: '../assets/skirt4.webp' },
        { id: 5, name: '스커트 5', price: '52,000', img: '../assets/skirt5.webp' },
        { id: 6, name: '스커트 6', price: '56,400', img: '../assets/skirt6.png' },
    ],
});

export const outerState = atom({
    key: 'outerState',
    default: [
        { id: 1, name: '아우터 1', price: '180,000', img: '../assets/outer1.webp' },
        { id: 2, name: '아우터 2', price: '185,500', img: '../assets/outer2.webp' },
        { id: 3, name: '아우터 3', price: '240,000', img: '../assets/outer3.webp' },
        { id: 4, name: '아우터 4', price: '275,500', img: '../assets/outer4.webp' },
        { id: 5, name: '아우터 5', price: '189,000', img: '../assets/outer5.png' },
        { id: 6, name: '아우터 6', price: '225,300', img: '../assets/outer6.webp' },
        { id: 7, name: '아우터 7', price: '315,700', img: '../assets/outer7.webp' },
        { id: 8, name: '아우터 8', price: '386,000', img: '../assets/outer8.webp' },
        { id: 9, name: '아우터 9', price: '299,000', img: '../assets/outer9.webp' },
        { id: 10, name: '아우터 10', price: '312,800', img: '../assets/outer10.webp' },
    ],
});

export const shoesState = atom({
    key: 'shoesState',
    default: [
        { id: 1, name: '신발 1', price: '220,000', img: '../assets/shoes1.webp' },
        { id: 2, name: '신발 2', price: '225,000', img: '../assets/shoes2.webp' },
        { id: 3, name: '신발 3', price: '205,500', img: '../assets/shoes3.webp' },
        { id: 4, name: '신발 4', price: '206,500', img: '../assets/shoes4.webp' },
        { id: 5, name: '신발 5', price: '165,000', img: '../assets/shoes5.webp' },
        { id: 6, name: '신발 6', price: '158,500', img: '../assets/shoes6.webp' },
    ],
});

export const accessoryState = atom({
    key: 'accessoryState',
    default: [
        { id: 1, name: '주얼리 1', price: '23,500', img: '../assets/accessory1.webp' },
        { id: 2, name: '주얼리 2', price: '34,500', img: '../assets/accessory2.webp' },
        { id: 3, name: '주얼리 3', price: '28,300', img: '../assets/accessory3.png' },
        { id: 4, name: '주얼리 4', price: '22,000', img: '../assets/accessory4.webp' },
        { id: 5, name: '주얼리 5', price: '37,500', img: '../assets/accessory5.webp' },
        { id: 6, name: '주얼리 6', price: '31,400', img: '../assets/accessory6.png' },
    ],
});

export const eyewareState = atom({
    key: 'eyewareState',
    default: [
        { id: 1, name: '아이웨어 1', price: '125,000', img: '../assets/eyeware1.webp' },
        { id: 2, name: '아이웨어 2', price: '125,000', img: '../assets/eyeware2.webp' },
        { id: 3, name: '아이웨어 3', price: '124,500', img: '../assets/eyeware3.webp' },
        { id: 4, name: '아이웨어 4', price: '167,500', img: '../assets/eyeware4.png' },
    ],
});

export const capState = atom({
    key: 'capState',
    default: [
        { id: 1, name: '모자 1', price: '52,000', img: '../assets/cap1.png' },
        { id: 2, name: '모자 2', price: '55,300', img: '../assets/cap2.png' },
    ],
});

export const bagState = atom({
    key: 'bagState',
    default: [
        { id: 1, name: '가방 1', price: '252,200', img: '../assets/bag1.webp' },
        { id: 2, name: '가방 2', price: '255,100', img: '../assets/bag2.webp' },
        { id: 3, name: '가방 3', price: '199,000', img: '../assets/bag3.png' },
        { id: 4, name: '가방 4', price: '198,000', img: '../assets/bag4.png' },
    ],
});

export const socksState = atom({
    key: 'socksState',
    default: [],
});

export const iconsState = atom({
    key: 'iconsState',
    default: [
        { src: "../assets/top.jpg", alt: "상의", path: "/top", label: "상의" },
        { src: "../assets/pants.jpg", alt: "하의", path: "/pants", label: "하의" },
        { src: "../assets/outer.jpg", alt: "아우터", path: "/outer", label: "아우터" },
        { src: "../assets/shoes.jpg", alt: "신발", path: "/shoes", label: "신발" },
        { src: "../assets/skirt.jpg", alt: "치마", path: "/skirt", label: "스커트" },
        { src: "../assets/socks.jpg", alt: "양말", path: "/socks", label: "양말" },
        { src: "../assets/bag.jpg", alt: "가방", path: "/bag", label: "가방" },
        { src: "../assets/cap.jpg", alt: "모자", path: "/cap", label: "모자" },
        { src: "../assets/eyeware.jpg", alt: "아이웨어", path: "/eyeware", label: "아이웨어" },
        { src: "../assets/acc.jpg", alt: "악세사리", path: "/accessory", label: "주얼리" },
    ],
});