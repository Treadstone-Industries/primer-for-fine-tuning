import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ff650fee-aa4b-4639-a076-b8be29299b30', title: 'PATENT_TITLE_4622' },
        { id: '211dc0ac-fcaf-4307-b648-76befd6631ec', title: 'PATENT_TITLE_6546' },
        { id: '7dbabe86-3575-4996-9d71-e74ce9adf373', title: 'PATENT_TITLE_9375' },
        { id: '64cf4920-552e-4545-bbc6-d570e619b95b', title: 'PATENT_TITLE_6112' },
        { id: '47481044-e093-4ae5-a9c6-dd8644eac188', title: 'PATENT_TITLE_2035' },
        { id: '1ea555c9-7404-47fd-91e5-a5b14652423e', title: 'PATENT_TITLE_8023' },
        { id: 'aadf56f0-1e10-42ab-97a5-6dbe6b5ed972', title: 'PATENT_TITLE_2035' },
        { id: '593ad915-e3a9-4785-a4ae-3571fe9ca771', title: 'PATENT_TITLE_8043' },
        { id: '4839f638-be11-4a38-b0ed-edbd1f343f2a', title: 'PATENT_TITLE_9167' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App