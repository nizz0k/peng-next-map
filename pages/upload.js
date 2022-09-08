import Head from 'next/head'


const upload = () => {
return (
<div>
    <Head>
        <title> Upload</title>
    </Head>
    <h1>Upload here:</h1>
    <div>
        <h3>Add Photos to be uploaded</h3>
        <input type="file" ></input>

    </div>
</div>
)
}

export default upload