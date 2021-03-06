import ReactDOM from 'react-dom';

import InfiniteListExample from './simple_example';
import InfiniteListPagingExample from './example_paging';

import './styles/app.scss';

ReactDOM.render(
    <div className='examples'>
        <h3> Infinite List Example </h3>
        <div className='example'>
            <InfiniteListExample />
        </div>
        <h3> Infinite List With Paging Example </h3>
        <div className='example'>
            <InfiniteListPagingExample />
        </div>
    </div>,
    document.getElementById('app')
);
