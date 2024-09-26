import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ab127522-1878-4adc-a9d5-bb10997b0735', title: 'PATENT_TITLE_7888' },
            { id: 'e52f1cfd-5d7c-4b68-b7f3-0ccea272a84a', title: 'PATENT_TITLE_4538' },
            { id: '0eacddda-5a06-404e-9da6-5d2ff839f41f', title: 'PATENT_TITLE_2915' },
        ]}
    />
)

export default App