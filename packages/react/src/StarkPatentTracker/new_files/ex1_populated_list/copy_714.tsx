import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b6ca670a-4e6e-40b1-9fa0-6c42ae6be07b', title: 'PATENT_TITLE_9628' },
            { id: '64cf87cb-d4f5-4c07-bcb6-d9eb855a0f02', title: 'PATENT_TITLE_9950' },
            { id: 'ca970e14-2fb3-4f58-ab7e-862cc1f7706e', title: 'PATENT_TITLE_6879' },
            { id: '3b5f92f3-c646-4801-b1f4-e421fb966666', title: 'PATENT_TITLE_2674' },
            { id: '900c7649-88c8-4d03-9d39-97120cca1eeb', title: 'PATENT_TITLE_9447' },
            { id: '52768df1-48f6-47d8-8144-8e9dc0eafe5c', title: 'PATENT_TITLE_9378' },
            { id: '875861a3-d2d4-43a8-93db-d83ba56069c4', title: 'PATENT_TITLE_5884' },
        ]}
    />
)

export default App