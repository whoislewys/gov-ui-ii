import s from './s.module.css'
import React from 'react'

const BackgroundBlobs: React.FC = () => {
  return (
    <>
      <div className={s.blob1} />
      <div className={s.blob2} />
      <div className={s.blob3} />
    </>
  )
}

export default BackgroundBlobs