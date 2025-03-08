import React, {ReactElement,FC, JSX} from 'react'
import {Exercise as Ex1} from './ex1'
import ArrEx2 from './ex2'
import ArrEx3 from './ext3'
import Inter1 from '../input/input1-ts'
import {default as InputYup} from '../input/input1-Yup'

export type guideUnit= {
    text:string,
    element:JSX.Element
}

export type guideType={
    data:guideUnit[]
}

export const guideObject : guideType  ={
   data: [{
        text:"Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.",
        element: <Ex1/>
    },
    {text:"Find the missing element in the array.",
        element:<ArrEx2/>
    },
    {
        text: "Trapping Rainwater Problem",
        element:<ArrEx3/>
    },
    {
        text:'Inter1',
        element:<Inter1/>
    },
    {
        text:'Input1 Yup',
        element:<InputYup/>
    },

]
}
