export async function loadPoints() {
    const data = await fetch('/api/getpoints')
    const features = await data.json()
    
    return features
  
}