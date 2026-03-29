import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Copy, Download } from 'lucide-react'
import React from 'react'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{name}</h2>
        <div className='flex items-center gap-3 ml-auto'>
          <Copy className='icon cursor-pointer' title='Copy content' />
          <Download className='icon cursor-pointer' title='Download file' />
        </div>
      </div>

      <div className='p-5 space-y-6 bg-white'>
        {image ?(
          <div className='w-full'>
            <img src={image} alt={name} className='w-full h-auto rounded'/>
          </div>
        ) : null}

        {subtitle ? <h3 className='text-lg font-semibold'>{subtitle}</h3> : null}

        <div className='text-body'>
          {description && Array.isArray(description) ? (
            description.map((para, idx) => (
              <p key={idx} className='text-paragraph'>
                {para}
              </p>
            ))
          ) : (
            <p className='text-paragraph'>{description}</p>
          )}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
