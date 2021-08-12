import Link from "next/link";
import type {ReactNode} from "react";

export default function ({ isLink = true } : { isLink? : boolean }){
  return isLink ? <Link href="/">
      <div style={{ width: "30px", height: "30px" }} className="pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" fill="none">
          <path d="M4.00195 5.71289H2.34961V9H0.867188V0.46875H3.86719C4.85156 0.46875 5.61133 0.689453 6.14648 1.13086C6.68164 1.57227 6.94922 2.21094 6.94922 3.04688C6.94922 3.61719 6.81055 4.0957 6.5332 4.48242C6.25977 4.86523 5.87695 5.16016 5.38477 5.36719L7.30078 8.92383V9H5.71289L4.00195 5.71289ZM2.34961 4.52344H3.87305C4.37305 4.52344 4.76367 4.39844 5.04492 4.14844C5.32617 3.89453 5.4668 3.54883 5.4668 3.11133C5.4668 2.6543 5.33594 2.30078 5.07422 2.05078C4.81641 1.80078 4.42969 1.67187 3.91406 1.66406H2.34961V4.52344ZM13.1309 7.01367H9.82617L9.13477 9H7.59375L10.8164 0.46875H12.1465L15.375 9H13.8281L13.1309 7.01367ZM10.2422 5.81836H12.7148L11.4785 2.2793L10.2422 5.81836ZM3.87305 21.1426L6.04102 14.4688H7.66992L4.59961 23H3.16406L0.105469 14.4688H1.72852L3.87305 21.1426ZM10.2012 23H8.72461V14.4688H10.2012V23ZM16.4824 20.8027C16.4824 20.4277 16.3496 20.1387 16.084 19.9355C15.8223 19.7324 15.3477 19.5273 14.6602 19.3203C13.9727 19.1133 13.4258 18.8828 13.0195 18.6289C12.2422 18.1406 11.8535 17.5039 11.8535 16.7188C11.8535 16.0312 12.1328 15.4648 12.6914 15.0195C13.2539 14.5742 13.9824 14.3516 14.877 14.3516C15.4707 14.3516 16 14.4609 16.4648 14.6797C16.9297 14.8984 17.2949 15.2109 17.5605 15.6172C17.8262 16.0195 17.959 16.4668 17.959 16.959H16.4824C16.4824 16.5137 16.3418 16.166 16.0605 15.916C15.7832 15.6621 15.3848 15.5352 14.8652 15.5352C14.3809 15.5352 14.0039 15.6387 13.7344 15.8457C13.4688 16.0527 13.3359 16.3418 13.3359 16.7129C13.3359 17.0254 13.4805 17.2871 13.7695 17.498C14.0586 17.7051 14.5352 17.9082 15.1992 18.1074C15.8633 18.3027 16.3965 18.5273 16.7988 18.7812C17.2012 19.0312 17.4961 19.3203 17.6836 19.6484C17.8711 19.9727 17.9648 20.3535 17.9648 20.791C17.9648 21.502 17.6914 22.0684 17.1445 22.4902C16.6016 22.9082 15.8633 23.1172 14.9297 23.1172C14.3125 23.1172 13.7441 23.0039 13.2246 22.7773C12.709 22.5469 12.3066 22.2305 12.0176 21.8281C11.7324 21.4258 11.5898 20.957 11.5898 20.4219H13.0723C13.0723 20.9062 13.2324 21.2812 13.5527 21.5469C13.873 21.8125 14.332 21.9453 14.9297 21.9453C15.4453 21.9453 15.832 21.8418 16.0898 21.6348C16.3516 21.4238 16.4824 21.1465 16.4824 20.8027ZM20.0156 21.5C20.2812 21.5 20.4863 21.5762 20.6309 21.7285C20.7754 21.877 20.8477 22.0645 20.8477 22.291C20.8477 22.5137 20.7754 22.6992 20.6309 22.8477C20.4863 22.9922 20.2812 23.0645 20.0156 23.0645C19.7617 23.0645 19.5605 22.9922 19.4121 22.8477C19.2637 22.7031 19.1895 22.5176 19.1895 22.291C19.1895 22.0645 19.2617 21.877 19.4062 21.7285C19.5508 21.5762 19.7539 21.5 20.0156 21.5Z" fill="black"/>
        </svg>
      </div>
    </Link> : <div style={{ width: "30px", height: "30px" }} className="pointer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" fill="none">
      <path d="M4.00195 5.71289H2.34961V9H0.867188V0.46875H3.86719C4.85156 0.46875 5.61133 0.689453 6.14648 1.13086C6.68164 1.57227 6.94922 2.21094 6.94922 3.04688C6.94922 3.61719 6.81055 4.0957 6.5332 4.48242C6.25977 4.86523 5.87695 5.16016 5.38477 5.36719L7.30078 8.92383V9H5.71289L4.00195 5.71289ZM2.34961 4.52344H3.87305C4.37305 4.52344 4.76367 4.39844 5.04492 4.14844C5.32617 3.89453 5.4668 3.54883 5.4668 3.11133C5.4668 2.6543 5.33594 2.30078 5.07422 2.05078C4.81641 1.80078 4.42969 1.67187 3.91406 1.66406H2.34961V4.52344ZM13.1309 7.01367H9.82617L9.13477 9H7.59375L10.8164 0.46875H12.1465L15.375 9H13.8281L13.1309 7.01367ZM10.2422 5.81836H12.7148L11.4785 2.2793L10.2422 5.81836ZM3.87305 21.1426L6.04102 14.4688H7.66992L4.59961 23H3.16406L0.105469 14.4688H1.72852L3.87305 21.1426ZM10.2012 23H8.72461V14.4688H10.2012V23ZM16.4824 20.8027C16.4824 20.4277 16.3496 20.1387 16.084 19.9355C15.8223 19.7324 15.3477 19.5273 14.6602 19.3203C13.9727 19.1133 13.4258 18.8828 13.0195 18.6289C12.2422 18.1406 11.8535 17.5039 11.8535 16.7188C11.8535 16.0312 12.1328 15.4648 12.6914 15.0195C13.2539 14.5742 13.9824 14.3516 14.877 14.3516C15.4707 14.3516 16 14.4609 16.4648 14.6797C16.9297 14.8984 17.2949 15.2109 17.5605 15.6172C17.8262 16.0195 17.959 16.4668 17.959 16.959H16.4824C16.4824 16.5137 16.3418 16.166 16.0605 15.916C15.7832 15.6621 15.3848 15.5352 14.8652 15.5352C14.3809 15.5352 14.0039 15.6387 13.7344 15.8457C13.4688 16.0527 13.3359 16.3418 13.3359 16.7129C13.3359 17.0254 13.4805 17.2871 13.7695 17.498C14.0586 17.7051 14.5352 17.9082 15.1992 18.1074C15.8633 18.3027 16.3965 18.5273 16.7988 18.7812C17.2012 19.0312 17.4961 19.3203 17.6836 19.6484C17.8711 19.9727 17.9648 20.3535 17.9648 20.791C17.9648 21.502 17.6914 22.0684 17.1445 22.4902C16.6016 22.9082 15.8633 23.1172 14.9297 23.1172C14.3125 23.1172 13.7441 23.0039 13.2246 22.7773C12.709 22.5469 12.3066 22.2305 12.0176 21.8281C11.7324 21.4258 11.5898 20.957 11.5898 20.4219H13.0723C13.0723 20.9062 13.2324 21.2812 13.5527 21.5469C13.873 21.8125 14.332 21.9453 14.9297 21.9453C15.4453 21.9453 15.832 21.8418 16.0898 21.6348C16.3516 21.4238 16.4824 21.1465 16.4824 20.8027ZM20.0156 21.5C20.2812 21.5 20.4863 21.5762 20.6309 21.7285C20.7754 21.877 20.8477 22.0645 20.8477 22.291C20.8477 22.5137 20.7754 22.6992 20.6309 22.8477C20.4863 22.9922 20.2812 23.0645 20.0156 23.0645C19.7617 23.0645 19.5605 22.9922 19.4121 22.8477C19.2637 22.7031 19.1895 22.5176 19.1895 22.291C19.1895 22.0645 19.2617 21.877 19.4062 21.7285C19.5508 21.5762 19.7539 21.5 20.0156 21.5Z" fill="black"/>
    </svg>
  </div>
}