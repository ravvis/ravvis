export const baseImagePath = (path = "") : string => {
  return "" + path
}

export const baseImageGalleryPath = (gallery_name = "LE", path : string) => {
  return baseImagePath("/gallery/" + gallery_name + "/" + path);
}

// export const isMobile = () => typeof window === "undefined" ? false : window.innerWidth < 570;

export const RESUME_URL = () => `https://drive.google.com/file/d/18PmKdMY4JyT3d0_zq1w5SHfKUS-0BeGe/view?usp=sharing`;

export const setFavColor = (color : string) => {
  if(typeof window !== "undefined"){
    localStorage.setItem("--fav-color", color);
    const r : HTMLElement | null = document.querySelector(':root');
    r && r.style.setProperty('--fav-color', color);
  }
}
export const getFavColor = () => {
  if(typeof window !== "undefined"){
    return localStorage.getItem("--fav-color") || getFavColors()[0].color;
  }
  return getFavColors()[0].color;
}
export const getFavColors = () => {
  return [
    {
      name: "Purple",
      color: "rgb(121, 75, 196)"
    },
    {
      name: "Blue",
      color: "rgb(29, 161, 242)"
    },
    {
      name: "Green",
      color: "rgb(23, 191, 99)"
    },
    {
      name: "yellow",
      color: "rgb(255, 173, 31)"
    },
    {
      name: "Orange",
      color: "rgb(244, 93, 34)"
    },
    {
      name: "Red",
      color: "rgb(224, 36, 94)"
    }
  ]
}