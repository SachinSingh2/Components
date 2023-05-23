import React from 'react'
import useNavigation from '../hooks/useNavigation'

export default function Route({path , children}) {
    const {currentPath} = useNavigation()

    if(path === currentPath){
        return children
    };

  return (
    <div>
      
    </div>
  )
}
