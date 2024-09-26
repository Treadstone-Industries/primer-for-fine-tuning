import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '94f961cd-5e71-476c-9b58-8803fdf61149', title: 'PATENT_TITLE_3793' },
            { id: '73d3530f-1422-496a-898c-651b79e3460a', title: 'PATENT_TITLE_8716' },
            { id: '48cc0b06-dd11-4581-bf27-94800cd30be3', title: 'PATENT_TITLE_4741' },
            { id: 'f031a2c4-b565-48ec-82cf-63f0b99e67b5', title: 'PATENT_TITLE_3053' },
            { id: 'a26ac690-a278-47d7-a079-fcb41792c16a', title: 'PATENT_TITLE_6894' },
            { id: 'af23675c-1ce8-4326-8fab-cac6bdd3cd49', title: 'PATENT_TITLE_9806' },
            { id: 'a9ef6396-c777-43e9-90ae-5ed13b7f9a7d', title: 'PATENT_TITLE_9211' },
            { id: '19d3e2f6-361e-481f-8425-748d44aed193', title: 'PATENT_TITLE_8739' },
        ]}
    />
)

export default App