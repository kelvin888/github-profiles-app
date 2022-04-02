import React, { FC } from 'react'
type AvatarProps = {
    avatar_url: string
}
export const Avatar:FC<AvatarProps> = ({avatar_url}) => {
  return (
    <img className='rounded-full w-32 h-32' src={avatar_url} alt="user" />
  )
}
