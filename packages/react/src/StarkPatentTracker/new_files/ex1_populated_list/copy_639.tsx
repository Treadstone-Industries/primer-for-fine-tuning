import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b9513fde-a5c5-4409-abef-29bec8dea7a5', title: 'PATENT_TITLE_2643' },
            { id: 'd5a00a8f-bdd4-40c5-8254-cffbe22cad4c', title: 'PATENT_TITLE_5088' },
            { id: 'c39dd375-6f7f-46d4-8d2d-3c4fa5610951', title: 'PATENT_TITLE_2049' },
            { id: 'b60d7390-23cb-4574-a42e-947a4723e25d', title: 'PATENT_TITLE_4635' },
            { id: 'b277d64a-8943-4a26-9ee9-ba71ee7d14e0', title: 'PATENT_TITLE_7181' },
            { id: '54ca04a3-ec2f-44d2-83bb-510094f10414', title: 'PATENT_TITLE_9186' },
            { id: '199aab90-c6b1-4253-9459-93051a3342a7', title: 'PATENT_TITLE_9023' },
            { id: '7cb772ec-a0d9-4558-9cbe-25a7f8b76b62', title: 'PATENT_TITLE_6254' },
            { id: 'a7d5ce44-3442-4a2a-b26a-9b47cdd8098e', title: 'PATENT_TITLE_5533' },
        ]}
    />
)

export default App