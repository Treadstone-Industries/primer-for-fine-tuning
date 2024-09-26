import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'be22303c-51fd-4394-8fcf-2c8dd87af2ba', title: 'PATENT_TITLE_4134' },
            { id: '33d755fc-d7ba-4c71-8f5a-5c3f99038b62', title: 'PATENT_TITLE_3727' },
            { id: '62efd53b-9bbd-4732-bcc2-90589ae609b3', title: 'PATENT_TITLE_8794' },
            { id: '7dfdd1c0-b5a5-43a1-8a78-bfdce5437be5', title: 'PATENT_TITLE_2704' },
            { id: '33cde0fb-22b1-43f0-8546-14fc4ce8ac9f', title: 'PATENT_TITLE_6731' },
            { id: '467df5da-cc6d-4400-aceb-ace2e0e5f34e', title: 'PATENT_TITLE_5072' },
            { id: 'a409c5ae-4b3f-4416-92c0-6c0c8f14981f', title: 'PATENT_TITLE_6534' },
            { id: '9ff49c8d-b65b-42a9-a9a9-14468b4654a8', title: 'PATENT_TITLE_7728' },
            { id: '5b5afe5a-ad4b-444f-b88b-0722050a4cd6', title: 'PATENT_TITLE_7331' },
            { id: '49eed43c-c435-4f3f-be46-21c37daab345', title: 'PATENT_TITLE_2988' },
        ]}
    />
)

export default App