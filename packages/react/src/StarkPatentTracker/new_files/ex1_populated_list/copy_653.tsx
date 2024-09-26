import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3fe7a4ba-baca-4cae-b102-05ab32719703', title: 'PATENT_TITLE_5044' },
            { id: '8f5ca379-99e0-4b02-8f63-c8353bf18ff7', title: 'PATENT_TITLE_5913' },
            { id: 'eafd6ac0-13fe-4baf-821f-ac893b166186', title: 'PATENT_TITLE_5591' },
            { id: '6cdef420-afa6-404c-89b2-5d8442080e7d', title: 'PATENT_TITLE_5977' },
            { id: '04e11b16-559f-4af4-b056-60321780b7dc', title: 'PATENT_TITLE_8655' },
            { id: 'd73e5bf2-0645-44e5-8054-17700b414eec', title: 'PATENT_TITLE_9577' },
            { id: 'cfb947fa-9327-4d63-ba97-5b91e69f6822', title: 'PATENT_TITLE_7604' },
            { id: 'ae8a19ba-2727-40db-9c8c-0ba0fd79de35', title: 'PATENT_TITLE_7872' },
            { id: '7038b1db-35d9-4ea9-af26-08fdb7867c97', title: 'PATENT_TITLE_7531' },
            { id: 'd9ff215d-25c1-44e8-8ac3-482e92b2a584', title: 'PATENT_TITLE_6254' },
        ]}
    />
)

export default App