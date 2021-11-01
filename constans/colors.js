export default colors = (part, dark) => {
    switch (part) {
        case 'primary': return dark ? "#1f1f1f" : '#7209b7'
        case 'background': return dark ? "#1f1f1f" : '#f1f0f1'
        case 'text': return dark ? '#fff' : '#333333'
        case 'header': return dark ? "#fff" : '#333333'
        case 'semiBack': return dark ? '#121212' : '#f1f0f1'
    }
}