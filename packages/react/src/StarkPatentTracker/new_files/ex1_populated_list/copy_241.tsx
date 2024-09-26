import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0505ca0c-2deb-414b-8ee5-73906e704ef3', title: 'PATENT_TITLE_2731' },
            { id: '1575f307-79e2-4706-8f22-2bf7b5a5aba9', title: 'PATENT_TITLE_2303' },
            { id: 'fd601f28-187b-4320-80b1-da728db6d93e', title: 'PATENT_TITLE_5295' },
            { id: '42cb8370-5970-4e75-80b2-629eecf914d7', title: 'PATENT_TITLE_6808' },
            { id: '1dbbc1f1-fb86-4e3a-84b2-f180ed8dbc1e', title: 'PATENT_TITLE_1384' },
            { id: 'ce2b1d3f-0f78-4d65-8c78-fad36bc09f60', title: 'PATENT_TITLE_3462' },
        ]}
    />
)

export default App