// Write your code here.

import './index.css'

const Thumbnail = props => {
  const {thumblineimages, updateImage} = props
  const {id, thumbnailUrl} = thumblineimages

  const onClickUpdate = () => {
    updateImage(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickUpdate}>
        <img
          src={thumbnailUrl}
          className="thumnail_image"
          alt="thumbnailAltText"
        />
      </button>
    </li>
  )
}

export default Thumbnail
