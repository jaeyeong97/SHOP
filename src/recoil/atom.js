import { atom, selector } from 'recoil';

export const topState = atom({
    key: 'topState',
    default: [
        { id: '상의1', name: '상의 1', price: '35,000', img: '../assets/top1.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top1-1.png', '../assets/top1-2.png', '../assets/top1-3.png'] },
        { id: '상의2', name: '상의 2', price: '32,000', img: '../assets/top2.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top2-1.png', '../assets/top2-2.png', '../assets/top2-3.png'] },
        { id: '상의3', name: '상의 3', price: '41,500', img: '../assets/top3.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top3-1.png', '../assets/top3-2.png', '../assets/top3-3.png'] },
        { id: '상의4', name: '상의 4', price: '89,000', img: '../assets/top4.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top4-1.png', '../assets/top4-2.png', '../assets/top4-3.png'] },
        { id: '상의5', name: '상의 5', price: '62,000', img: '../assets/top5.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top5-1.png', '../assets/top5-2.png', '../assets/top5-3.png'] },
        { id: '상의6', name: '상의 6', price: '29,000', img: '../assets/top6.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/top6-1.png', '../assets/top6-2.png', '../assets/top6-3.png'] },
    ],
});

export const pantsState = atom({
    key: 'pantsState',
    default: [
        { id: '하의1', name: '하의 1', price: '62,000', img: '../assets/pants1.png', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants1-1.png', '../assets/pants1-2.png', '../assets/pants1-3.png'] },
        { id: '하의2', name: '하의 2', price: '45,000', img: '../assets/pants2.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants2-1.png', '../assets/pants2-2.png', '../assets/pants2-3.png'] },
        { id: '하의3', name: '하의 3', price: '38,000', img: '../assets/pants3.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants3-1.png', '../assets/pants3-2.png', '../assets/pants3-3.png'] },
        { id: '하의4', name: '하의 4', price: '47,000', img: '../assets/pants4.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants4-1.png', '../assets/pants4-2.png', '../assets/pants4-3.png'] },
        { id: '하의5', name: '하의 5', price: '51,000', img: '../assets/pants5.png', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants5-1.png', '../assets/pants5-2.png', '../assets/pants5-3.png'] },
        { id: '하의6', name: '하의 6', price: '58,600', img: '../assets/pants6.png', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/pants6-1.png', '../assets/pants6-2.png', '../assets/pants6-3.png'] },
    ],
});

export const skirtState = atom({
    key: 'skirtState',
    default: [
        { id: '스커트1', name: '스커트 1', price: '56,000', img: '../assets/skirt1.webp', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt1-1.png', '../assets/skirt1-2.png', '../assets/skirt1-3.png'] },
        { id: '스커트2', name: '스커트 2', price: '66,000', img: '../assets/skirt2.webp', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt2-1.png', '../assets/skirt2-2.png', '../assets/skirt2-3.png'] },
        { id: '스커트3', name: '스커트 3', price: '87,500', img: '../assets/skirt3.webp', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt3-1.png', '../assets/skirt3-2.png', '../assets/skirt3-3.png'] },
        { id: '스커트4', name: '스커트 4', price: '89,000', img: '../assets/skirt4.webp', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt4-1.png', '../assets/skirt4-2.png', '../assets/skirt4-3.png'] },
        { id: '스커트5', name: '스커트 5', price: '52,000', img: '../assets/skirt5.webp', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt5-1.png', '../assets/skirt5-2.png', '../assets/skirt5-3.png'] },
        { id: '스커트6', name: '스커트 6', price: '56,400', img: '../assets/skirt6.png', size: ['XS', 'S', 'M', 'L'], sImgs: ['../assets/skirt6-1.png', '../assets/skirt6-2.png', '../assets/skirt6-3.png'] },
    ],
});

export const outerState = atom({
    key: 'outerState',
    default: [
        { id: '아우터1', name: '아우터 1', price: '180,000', img: '../assets/outer1.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer1-1.png', '../assets/outer1-2.png', '../assets/outer1-3.png'] },
        { id: '아우터2', name: '아우터 2', price: '185,500', img: '../assets/outer2.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer2-1.png', '../assets/outer2-2.png', '../assets/outer2-3.png'] },
        { id: '아우터3', name: '아우터 3', price: '240,000', img: '../assets/outer3.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer3-1.png', '../assets/outer3-2.png', '../assets/outer3-3.png'] },
        { id: '아우터4', name: '아우터 4', price: '275,500', img: '../assets/outer4.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer4-1.png', '../assets/outer4-2.png', '../assets/outer4-3.png'] },
        { id: '아우터5', name: '아우터 5', price: '189,000', img: '../assets/outer5.png', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer5-1.png', '../assets/outer5-2.png',] },
        { id: '아우터6', name: '아우터 6', price: '225,300', img: '../assets/outer6.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer6-1.png', '../assets/outer6-2.png', '../assets/outer6-3.png'] },
        { id: '아우터7', name: '아우터 7', price: '315,700', img: '../assets/outer7.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer7-1.png', '../assets/outer7-2.png', '../assets/outer7-3.png'] },
        { id: '아우터8', name: '아우터 8', price: '386,000', img: '../assets/outer8.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer8-1.png', '../assets/outer8-2.png', '../assets/outer8-3.png'] },
        { id: '아우터9', name: '아우터 9', price: '299,000', img: '../assets/outer9.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer9-1.png', '../assets/outer9-2.png', '../assets/outer9-3.png'] },
        { id: '아우터10', name: '아우터 10', price: '312,800', img: '../assets/outer10.webp', size: ['S', 'M', 'L', 'XL'], sImgs: ['../assets/outer10-1.png', '../assets/outer10-2.png', '../assets/outer10-3.png'] },
    ],
});

export const shoesState = atom({
    key: 'shoesState',
    default: [
        { id: '신발1', name: '신발 1', price: '220,000', img: '../assets/shoes1.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes1-1.png', '../assets/shoes1-2.png', '../assets/shoes1-3.png'] },
        { id: '신발2', name: '신발 2', price: '225,000', img: '../assets/shoes2.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes2-1.png', '../assets/shoes2-2.png', '../assets/shoes2-3.png'] },
        { id: '신발3', name: '신발 3', price: '205,500', img: '../assets/shoes3.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes3-1.png', '../assets/shoes3-2.png', '../assets/shoes3-3.png'] },
        { id: '신발4', name: '신발 4', price: '206,500', img: '../assets/shoes4.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes4-1.png', '../assets/shoes4-2.png', '../assets/shoes4-3.png'] },
        { id: '신발5', name: '신발 5', price: '165,000', img: '../assets/shoes5.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes5-1.png', '../assets/shoes5-2.png', '../assets/shoes5-3.png'] },
        { id: '신발6', name: '신발 6', price: '158,500', img: '../assets/shoes6.webp', size: ['235', '240', '245', '250', '255', '260', '265'], sImgs: ['../assets/shoes6-1.png', '../assets/shoes6-2.png', '../assets/shoes6-3.png'] },
    ],
});

export const accessoryState = atom({
    key: 'accessoryState',
    default: [
        { id: '주얼리1', name: '주얼리 1', price: '23,500', img: '../assets/accessory1.webp', color: ['실버', '골드'], sImgs: ['../assets/accessory1-1.png', '../assets/accessory1-2.png', '../assets/accessory1-3.png'] },
        { id: '주얼리2', name: '주얼리 2', price: '34,500', img: '../assets/accessory2.webp', color: ['실버', '골드'], sImgs: ['../assets/accessory2-1.png',] },
        { id: '주얼리3', name: '주얼리 3', price: '28,300', img: '../assets/accessory3.png', color: ['실버', '골드'], sImgs: ['../assets/accessory3-1.png', '../assets/accessory3-2.png',] },
        { id: '주얼리4', name: '주얼리 4', price: '22,000', img: '../assets/accessory4.webp', color: ['실버', '골드'], sImgs: ['../assets/accessory4-1.png', '../assets/accessory4-2.png',] },
        { id: '주얼리5', name: '주얼리 5', price: '37,500', img: '../assets/accessory5.webp', color: ['실버', '골드'], sImgs: ['../assets/accessory5-1.png', '../assets/accessory5-2.png',] },
        { id: '주얼리6', name: '주얼리 6', price: '31,400', img: '../assets/accessory6.png', color: ['실버', '골드'], sImgs: ['../assets/accessory6-1.png', '../assets/accessory6-2.png',] },
    ],
});

export const eyewareState = atom({
    key: 'eyewareState',
    default: [
        { id: '아이웨어1', name: '아이웨어 1', price: '125,000', img: '../assets/eyeware1.webp', color: ['블랙', '브라운', '그레이', '화이트'], sImgs: ['../assets/eyeware1-1.png', '../assets/eyeware1-2.png',] },
        { id: '아이웨어2', name: '아이웨어 2', price: '125,000', img: '../assets/eyeware2.webp', color: ['블랙', '브라운', '그레이', '화이트'], sImgs: ['../assets/eyeware2-1.png', '../assets/eyeware2-2.png',] },
        { id: '아이웨어3', name: '아이웨어 3', price: '124,500', img: '../assets/eyeware3.webp', color: ['블랙', '브라운', '그레이', '화이트'], sImgs: ['../assets/eyeware3-1.png', '../assets/eyeware3-2.png',] },
        { id: '아이웨어4', name: '아이웨어 4', price: '167,500', img: '../assets/eyeware4.png', color: ['블랙', '브라운', '그레이', '화이트'], sImgs: ['../assets/eyeware4-1.png', '../assets/eyeware4-2.png',] },
    ],
});

export const capState = atom({
    key: 'capState',
    default: [
        { id: '모자1', name: '모자 1', price: '52,000', img: '../assets/cap1.png', color: ['블랙', '브라운', '그레이', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/cap1-1.png', '../assets/cap1-2.png', '../assets/cap1-3.png'] },
        { id: '모자2', name: '모자 2', price: '55,300', img: '../assets/cap2.png', color: ['블랙', '브라운', '그레이', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/cap2-1.png', '../assets/cap2-2.png', '../assets/cap2-3.png'] },
    ],
});

export const bagState = atom({
    key: 'bagState',
    default: [
        { id: '가방1', name: '가방 1', price: '252,200', img: '../assets/bag1.webp', color: ['블랙', '브라운', '화이트'], sImgs: ['../assets/bag1-1.png', '../assets/bag1-2.png', '../assets/bag1-3.png'] },
        { id: '가방2', name: '가방 2', price: '255,100', img: '../assets/bag2.webp', color: ['블랙', '브라운', '화이트'], sImgs: ['../assets/bag2-1.png', '../assets/bag2-2.png', '../assets/bag2-3.png'] },
        { id: '가방3', name: '가방 3', price: '199,000', img: '../assets/bag3.png', color: ['블랙', '브라운', '화이트'], sImgs: ['../assets/bag3-1.png', '../assets/bag3-2.png', '../assets/bag3-3.png'] },
        { id: '가방4', name: '가방 4', price: '198,000', img: '../assets/bag4.png', color: ['블랙', '브라운', '화이트'], sImgs: ['../assets/bag4-1.png', '../assets/bag4-2.png', '../assets/bag4-3.png'] },
    ],
});

export const socksState = atom({
    key: 'socksState',
    default: [
        { id: '양말1', name: '양말 1', price: '7,400', img: '../assets/socks1.jpg', color: ['블랙', '브라운', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/socks1-1.png', '../assets/socks1-2.png',] },
        { id: '양말2', name: '양말 2', price: '7,400', img: '../assets/socks2.webp', color: ['블랙', '브라운', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/socks2-1.png', '../assets/socks2-2.png',] },
        { id: '양말3', name: '양말 3', price: '6,200', img: '../assets/socks3.jpg', color: ['블랙', '브라운', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/socks3-1.png', '../assets/socks3-2.png',] },
        { id: '양말4', name: '양말 4', price: '6,200', img: '../assets/socks4.jpg', color: ['블랙', '브라운', '화이트'], size: ['1', '2', '3'], sImgs: ['../assets/socks4-1.png', '../assets/socks4-2.png',] },
    ],
});

// 카테고리 아이콘
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

// 좋아요 상태
export const favoriteState = atom({
    key: "favoriteState",
    default: [],
});

// 선택된 상품 한개를 상세페이지로
export const selectedItemState = atom({
    key: "selectedItemState",
    default: { item: null, selectedSize: null, selectedColor: null, quantity: 1 },
});

// 장바구니 상태
export const cartState = atom({
    key: "cartState",
    default: [],
});

// 장바구니에서 선택된 상품 상태
export const selectedCartItemState = atom({
    key: "selectedCartItemState",
    default: [],
})

// 슬라이더
export const sliderState = atom({
    key: "sliderState",
    default: [
        { id: "슬라이더1", img: "../assets/banner1.png" },
        { id: "슬라이더2", img: "../assets/banner2.png" },
        { id: "슬라이더3", img: "../assets/banner3.png" },
        { id: "슬라이더4", img: "../assets/banner4.png" },
        { id: "슬라이더5", img: "../assets/banner5.png" },
        { id: "슬라이더6", img: "../assets/banner6.png" },
        { id: "슬라이더7", img: "../assets/banner7.png" },
        { id: "슬라이더8", img: "../assets/banner8.png" },
        { id: "슬라이더9", img: "../assets/banner9.png" },
    ]
})

// 슬라이더 인덱스
export const sliderIndexState = atom({
    key: 'sliderIndexState',
    default: 0,
});

// 검색어 관리 상태
export const searchTermState = atom({
    key: 'searchTermState',
    default: '',
});

// 모든 카테고리 아이템을 합치는 selector
export const allItemsState = selector({
    key: 'allItemsState',
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
        return [...socks, ...caps, ...bags, ...tops, ...pants, ...skirt, ...outer, ...shoes, ...accessory, ...eyeware];
    },
});

// 검색어에 따라 필터링된 아이템을 반환하는 selector
export const filteredItemsSelector = selector({
    key: 'filteredItemsSelector',
    get: ({ get }) => {
        const allItems = get(allItemsState);  // 모든 아이템 가져오기
        const searchTerm = get(searchTermState);  // 현재 검색어 가져오기

        // 검색어가 없을때 빈값
        if (!searchTerm) return [];

        // 검색어가 있으면 필터링된 아이템 반환
        return allItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
});

// 앱 모달 on/off
export const appModalState = atom({
    key: "appModalState",
    default: false,
})