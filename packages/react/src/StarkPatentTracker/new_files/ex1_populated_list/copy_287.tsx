import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '152775e4-ccc3-4f94-ad36-f1b91f550375', title: 'PATENT_TITLE_3770' },
            { id: '9f1387e0-a806-4fd5-99d8-6c7f751cd969', title: 'PATENT_TITLE_8255' },
            { id: '5f8a27f3-6250-4593-b8f0-d940a9f95ec0', title: 'PATENT_TITLE_5853' },
            { id: '223b01b7-b610-4748-acf0-5cc2984a3aaa', title: 'PATENT_TITLE_4785' },
            { id: '0b39df2f-12e3-4a9f-a497-62cae108d2d8', title: 'PATENT_TITLE_9758' },
            { id: 'a9dc64cf-6997-4bfb-a1d4-a5547774e6a3', title: 'PATENT_TITLE_2398' },
            { id: 'c1aed52b-dc4c-4b33-9094-75c9e5c00d36', title: 'PATENT_TITLE_9997' },
            { id: '80853d30-4e7f-48c8-abc5-77bf08b1b281', title: 'PATENT_TITLE_5789' },
            { id: 'c560ac49-a4c6-4729-95d9-59e0ac80dd79', title: 'PATENT_TITLE_8937' },
        ]}
    />
)

export default App