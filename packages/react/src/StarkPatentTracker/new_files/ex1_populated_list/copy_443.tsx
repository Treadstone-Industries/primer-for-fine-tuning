import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '36765cdf-afe6-4dfd-8b0e-eff033ae098f', title: 'PATENT_TITLE_6579' },
            { id: '668f7d75-6acc-4440-922a-d0d85d950775', title: 'PATENT_TITLE_9493' },
            { id: 'd735cc47-7614-47e5-83aa-6b928db6d59b', title: 'PATENT_TITLE_3114' },
            { id: 'af2ba7ce-13d8-450e-be0e-4ed04cbe25f5', title: 'PATENT_TITLE_9220' },
            { id: '6dd01044-ff4e-420f-ae42-1e12e6eb4c4e', title: 'PATENT_TITLE_2968' },
            { id: '9d5b30ab-3b07-410c-a266-b49c29d5f64a', title: 'PATENT_TITLE_9316' },
            { id: '3edcc170-cc9f-4195-8a31-c93c570557d5', title: 'PATENT_TITLE_2816' },
            { id: '16249ded-0b24-4240-a5c2-039ac5be4455', title: 'PATENT_TITLE_1207' },
        ]}
    />
)

export default App