"use client"

import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    const fetchHandle = async () =>{
        let response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        let result = await response.json()
        await setData(result[currency])
    }
    useEffect(()=>{
        fetchHandle()
    }, [currency])
    return data
}

export default useCurrencyInfo


