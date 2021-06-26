export const baseImagePath = (path = "") => {
    return process.env.PUBLIC_URL + path
}

export const baseImageGalleryPath = (gallery_name = "LE", path) => {
    return baseImagePath("/gallery/" + gallery_name + "/" + path);
}

export const isMobile = () => window.innerWidth < 570;