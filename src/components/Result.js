import React from 'react';
import useDataFetcher from './FetchData';
import Story from './Story';



const Result = (props) => {
  const { type } = props.match.params;
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          <ol> {stories.map(({ data: story }) => (
           <li key={story.id}><Story story={story} /></li>
          ))}</ol>
         
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Result;
