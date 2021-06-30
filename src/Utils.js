export const baseImagePath = (path = "") => {
    return process.env.PUBLIC_URL + path
}

export const baseImageGalleryPath = (gallery_name = "LE", path) => {
    return baseImagePath("/gallery/" + gallery_name + "/" + path);
}

export const isMobile = () => window.innerWidth < 570;

export const RESUME_URL = () => `https://drive.google.com/file/d/18PmKdMY4JyT3d0_zq1w5SHfKUS-0BeGe/view?usp=sharing`;