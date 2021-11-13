export const createBlurDataUrl = (imgUrl) => {
    if (imgUrl.includes('w_800')) {
        return imgUrl.replace('h_800,w_800', 'h_100,q_10,w_100')
    } else {
        return imgUrl.replace('h_800', 'h_100,q_10')
    }
}

export const prepareImgUrl = (imgUrl) => {
    if (imgUrl.includes('w_800')) {
        return imgUrl.replace('h_800,w_800', 'h_1200,w_1200')
    } else {
        return imgUrl.replace('h_800', 'h_1200')
    }
}