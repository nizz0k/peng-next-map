export async function loadPoints() {
    const data = await fetch('http:/localhost:3000/api/getlocations')
    const features = await data.json()
    
    return features
  
}