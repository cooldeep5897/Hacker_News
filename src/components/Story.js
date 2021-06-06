import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} >
{title}
  </a>
);

const Story = ({ story: {  by, title, url } }) => {
  return (
    <div className="story">
      <div className="story-title">

        <Link url={url}  title={title} />
      </div>
      <div className="story-info">
        <span>
          by {by}
        </span>
        
      </div>
    </div>
   
  );
};

export default Story;
