import Head from 'next/head'
import dynamic from 'next/dynamic';
import { loadPoints } from '../lib/loadpoints';


export async function getStaticProps(){
    const points = await loadPoints()
    return {props: points}
}



const mapPage = (props) =>{


    const MapWithNoSSR = dynamic(() => import("../components/Map"), {
        ssr: false
      });
    
    return (
        <div>
        <Head>
        <title>Map</title>
        </Head>
        <h1>Map of Peng art in Frankfurt</h1>
        <MapWithNoSSR points={props} />
        </div>
    )
}

export default mapPage  