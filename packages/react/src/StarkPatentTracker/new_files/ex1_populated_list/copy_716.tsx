import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '33a5178b-684f-4500-b4f0-633a8b7ceaf4', title: 'PATENT_TITLE_1550' },
            { id: '6f1754aa-9b37-496e-bba5-152ae9566be2', title: 'PATENT_TITLE_3898' },
            { id: '047c727f-24cd-47b0-a6ff-6a1df7618f23', title: 'PATENT_TITLE_5653' },
            { id: '85adec0e-6aaa-427f-8ffc-edecd547032a', title: 'PATENT_TITLE_5170' },
            { id: 'b88801a0-ad1e-409c-8b4b-318511f828be', title: 'PATENT_TITLE_6977' },
            { id: 'e15192d1-9cee-4fe2-8cb3-f7d45b8ae5ea', title: 'PATENT_TITLE_1467' },
            { id: '757908cc-c795-445a-8650-d0ce684c6b24', title: 'PATENT_TITLE_4279' },
            { id: '5bda1fd7-2d67-438a-bd37-061f2079160c', title: 'PATENT_TITLE_9415' },
        ]}
    />
)

export default App