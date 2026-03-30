import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-[red] h-[50px] rounded-[10px] pl-[40px] !text-[20px] pr-[40px] !text-[white]'>{name}</button>
    </div>
  )
}

export default Button
