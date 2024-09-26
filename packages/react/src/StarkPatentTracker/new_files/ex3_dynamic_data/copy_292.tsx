import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7e2ea1de-8948-4cd0-8b5d-f914de9a3937', title: 'PATENT_TITLE_9865' },
        { id: 'cb57a44d-0b46-4beb-96c1-2b806edebc9d', title: 'PATENT_TITLE_7181' },
        { id: '26ee983e-1060-4232-983a-6b8597214c3d', title: 'PATENT_TITLE_8571' },
        { id: 'ea52c9cf-9269-4108-95c6-46f777d728d7', title: 'PATENT_TITLE_8731' },
        { id: '916c7eea-d42e-4f79-ab7a-6de6149b7aba', title: 'PATENT_TITLE_4678' },
        { id: '175bfcc1-25aa-4814-9e6f-27807da313ed', title: 'PATENT_TITLE_7844' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App