import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1f5924df-9741-41e9-a4f7-b87d3937a98e', title: 'PATENT_TITLE_3061' },
        { id: 'ee0cc716-3009-43ae-90fe-d4346ad6c241', title: 'PATENT_TITLE_6930' },
        { id: 'd07c0562-b2a5-45ce-85a2-e75c0fbcfe7f', title: 'PATENT_TITLE_6943' },
        { id: '3c19ea94-77e9-4256-adec-8bdc587def2a', title: 'PATENT_TITLE_5493' },
        { id: 'd0613944-6fa0-4035-9930-53e267b25aa8', title: 'PATENT_TITLE_7291' },
        { id: '685c9ef1-ae9d-4bf7-8468-2c37069d2bd4', title: 'PATENT_TITLE_1689' },
        { id: '661edf55-5b8d-49e2-87ce-cab831cb1f89', title: 'PATENT_TITLE_4002' },
        { id: 'b0b5c948-3422-4d85-9137-6509d22c11bf', title: 'PATENT_TITLE_2936' },
        { id: '6515313e-ee05-4063-8416-a89d5676c379', title: 'PATENT_TITLE_3661' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App