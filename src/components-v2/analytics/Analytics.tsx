export default function Analytics(){
  return <>
    <script
      type="text/javascript"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config",${process.env.GOOGLE_ANALYTICS_ID});`,
      }}
    />
  </>
}