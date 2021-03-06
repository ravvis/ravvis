import '../src/index.css';
import Head from "next/head";
import {useEffect, useState} from "react";
import {getFavColor, setFavColor} from "../src/Utils";
import {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import Analytics from "../src/components-v2/analytics/Analytics";

export default function MyApp({ Component, pageProps } : AppProps) {

  const [favColorLocal, setFavColorLocal] = useState<string>(getFavColor());

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
  const metaDescription = "Ravindra is a tech enthusiast and an explorer. He has worked as a Software Developer Intern at Kuvera and INDmoney in the past.";

  return (<>
    <Head>
      <meta name="description" content={metaDescription}/>
      <meta property="og:url" content="https://www.ravvis.codes/"/>
      <meta property="og:image" content="https://www.ravvis.codes/images/opengraph.jpeg"/>
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:title" content="Ravindra"/>
      <title>Ravindra</title>
      <link
        href="https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTLGLQjUwkQ.woff2"
        rel="stylesheet"
      />
      <Analytics/>
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}
