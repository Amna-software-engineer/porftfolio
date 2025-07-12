import React from 'react'

const Btn = (props) => {
  const classes = `${props.className} bg-heading text-center text-lg inline-block text-black px-14 py-2 rounded-3xl mt-6 hover:shadow-custom w-56`
  return (
    <a className={classes} href={props.href} target="_blank">{props.content}</a>
  )
}

export default Btn