const IMG_URL = "https://images.chesscomfiles.com/uploads/v1/user/4992389.1bd6388e.161x161o.5cd2c089e361@2x.jpeg";

function toDataURL(url) {
    return fetch(url)
        // get the response as a raw binary blob
        .then(response => response.blob())
        // read it as a file and convert it into a base64 image
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))
}

toDataURL(IMG_URL)
  .then(dataUrl => {
    const img = document.createElement('img')
    img.src = dataUrl;
    document.body.append(img);
    
    const p = document.createElement('p')
    p.innerText = dataUrl.split(',')[1].substr(1)
    document.body.append(p);
  })
