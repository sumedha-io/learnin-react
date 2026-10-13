import React from 'react'

const Button = ({
    text,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props

}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor}`} {...props} >{text}</button>
  )
}

export default Button
//user can give props including the values for all those features like textColor classname,etc while calling Button component
//props other than classname could also be given so spread them 
//className= {} because js component is gonna be accessed