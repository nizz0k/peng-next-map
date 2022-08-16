import Head from 'next/head'
import dynamic from 'next/dynamic';
const mapPage = () =>{
    const MapWithNoSSR = dynamic(() => import("../components/Map"), {
        ssr: false
      });
    
    return (
        <div>
        <Head>
        <title>About</title>
        </Head>
        <h1>Map of Peng spots</h1>
        <p>Map should go here!</p>
        <MapWithNoSSR />
        </div>
    )
}

export default mapPage  