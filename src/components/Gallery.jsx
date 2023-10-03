import GalleryItem from './GalleryItem'

function Gallery (props) {

    const display = props.data.map((item, index) => {
        return(
            <GalleryItem item={item} key={index}/>
            )
    })

    return (
        <div style={{'width': '100%'}}>
            {display}
        </div>
    )
}

export default Gallery

