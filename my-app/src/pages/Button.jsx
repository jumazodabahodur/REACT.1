import React from 'react'

const Button = ({name}) => {
  return (
    <div >
<button className='pl-[30px] pr-[30px] py-2 rounded-2xl bg-[#26264a] !text-white hover:bg-white hover:!text-black transition-all'>
  {name}
</button>    </div>
  )
}

export default Button
