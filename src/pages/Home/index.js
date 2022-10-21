import { HomeAbout, HomeBlog, HomeContact, HomeMain, HomePartners, HomeProduction, HomeProducts } from 'sections'
import { Line } from 'subcomponents'

export default function Home({langTitle, uzbek, english, russian}) {
  return (
    <div style={{position: "relative", zIndex: 5}}>
      <HomeMain  
        langTitle={langTitle}
        english={english}
        russian={russian}
        uzbek={uzbek}
      />
      <div className='relative'>
        <HomeProducts 
          langTitle={langTitle}
          english={english}
          russian={russian}
          uzbek={uzbek}  />
        <HomeAbout />
        <HomeBlog
          langTitle={langTitle}
          english={english}
          russian={russian}
          uzbek={uzbek} 
        />
        <Line lineNum={1} style={{right: "10px", top: "530px"}} />
        <Line lineNum={2} style={{left: "60px", top: "1230px"}} />
        <Line lineNum={3} style={{right: "100px", top: "2030px"}} />
      </div>
      <HomeProduction />
      <HomePartners />
      <HomeContact />
    </div>
  )
}
