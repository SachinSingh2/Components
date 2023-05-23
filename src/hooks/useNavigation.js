import React, { useContext } from 'react'
import NavigationContext from '../context/NavigationContext'

export default function useNavigation() {

    const useNavigation = useContext(NavigationContext)
    
    return useNavigation
};
