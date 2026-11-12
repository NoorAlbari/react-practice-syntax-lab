import './Button.css' // Importing the CSS file for styling



function handleClick() {
    console.log('Button Clicked')
}

function Button() {
    return (
        <div>
            <p id="upload" onClick={handleClick}>
                Upload
            </p>
        </div>
    )
}

export default Button // Exporting the component Button