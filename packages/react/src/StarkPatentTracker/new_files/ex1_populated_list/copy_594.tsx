import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b8f3cd87-ec6a-477a-bc97-6e48e39364e9', title: 'PATENT_TITLE_7076' },
            { id: '0c787ce8-d193-44af-b87a-376c21c956ba', title: 'PATENT_TITLE_8897' },
            { id: 'b6a9c543-f6c2-4d52-afca-9e075bd1d03b', title: 'PATENT_TITLE_7697' },
            { id: '72155cd2-9711-492b-81b9-6737e5bb7fd5', title: 'PATENT_TITLE_1725' },
            { id: 'ae62dba9-be9a-49b9-a276-0a3a73eb0343', title: 'PATENT_TITLE_7284' },
            { id: 'ef785264-db0c-4dab-a0b1-567b1d6eac87', title: 'PATENT_TITLE_7539' },
            { id: '788a4378-c431-491b-bb36-50ddfaebe6c8', title: 'PATENT_TITLE_9235' },
            { id: 'e58b39ae-646c-4310-99b9-502cf2de4891', title: 'PATENT_TITLE_3204' },
        ]}
    />
)

export default App