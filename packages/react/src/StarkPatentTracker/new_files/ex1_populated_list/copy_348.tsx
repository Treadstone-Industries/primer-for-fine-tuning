import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd6aabf14-863d-4ed5-a50f-d7a0203a3165', title: 'PATENT_TITLE_8201' },
            { id: 'adcefd99-5ab5-4141-a095-bad5847de630', title: 'PATENT_TITLE_8586' },
            { id: 'ce93dbc1-092f-479b-ab4f-fd3ca483fe77', title: 'PATENT_TITLE_9735' },
            { id: 'a18ffbde-45c4-4a66-afcd-6fc3edcda261', title: 'PATENT_TITLE_4856' },
            { id: '27621dc6-a981-4b23-8c4c-4da69eb1bf10', title: 'PATENT_TITLE_1979' },
        ]}
    />
)

export default App