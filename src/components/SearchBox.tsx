import * as React from 'react';
import history from '../history';

const SearchBox = ({className} : any) => {
    let input: any;

    return (
        <div className={className}>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) {
                    return
                }
                const query = input.value.split(' ').join('+');
                history.push(`/jobs/${query}/`);
            }}>
                <input ref={node => input = node}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;