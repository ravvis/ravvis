import '../src/index.css';
import Head from "next/head";
import {useEffect, useState} from "react";
import {getFavColor, setFavColor} from "../src/Utils";

export default function MyApp({ Component, pageProps }) {

  const [favColorLocal, setFavColorLocal] = useState(getFavColor());

  useEffect(() => {
    console.log(`
    #     #      #######                             ### 
    #     # #       #    #    # ###### #####  ###### ### 
    #     # #       #    #    # #      #    # #      ### 
    ####### #       #    ###### #####  #    # #####   #  
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #      ### 
    #     # #       #    #    # ###### #    # ###### ### `);

    setFavColor(getFavColor());
    setFavColorLocal(getFavColor());
    console.log("Currently selected fav color: ", favColorLocal);
  }, [])

  return (<>
    <Head>
      <title>Ravindra</title>
      <link
        href="https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTLGLQjUwkQ.woff2"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>)
}
