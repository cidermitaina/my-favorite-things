import { getCategorizedDaata } from '../lib/posts.js'
import { Top as TopComponent } from '../components/page/Top'


export default function Top({ categorizedData }) {
  return (
    <TopComponent categorizedData={categorizedData} />
  )
}

export async function getStaticProps() {
  
  const categorizedData = getCategorizedDaata()

  return {
    props: {
      categorizedData
    }
  }
}
