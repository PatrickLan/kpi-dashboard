const randomRgbColor = (): string => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let rgbColor = "rgb(" + x + "," + y + "," + z + ")";
    return rgbColor
}

export default randomRgbColor