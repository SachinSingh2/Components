import React from 'react'
import useNavigation from '../hooks/useNavigation'
import classnames from 'classnames'

export default function Links({to , children , className , activeClassName}) {

    const {currentPath , navigate } = useNavigation()

    const classes = classnames("text-blue-500 " , className , currentPath===to && activeClassName )

    const onClickHandler = (e)=>{
        if(e.ctrlKey){
            return
        }
        e.preventDefault()
        navigate(to)
    };

  return (
    <div>
     <a className={classes} onClick={onClickHandler} href={to}>{children}</a> 
    </div>
  )
}
