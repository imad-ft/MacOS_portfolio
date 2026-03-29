import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile.data

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{name}</h2>
      </div>

      <div className='p-5 bg-white flex items-center justify-center'>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className='max-w-full max-h-[80vh] object-contain' />
        ) : (
          <p>No image URL available</p>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
