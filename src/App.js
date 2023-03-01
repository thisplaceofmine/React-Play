import React from 'react';
import Child from './child';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const arr = Array(100)
    .fill(0)
    .map(() => Math.floor(Math.random() * 1000));

  const [to, setTo] = React.useState(0);
  const scrollRef = React.useRef(null);

  return (
    <div className="container vh-100 bg-light">
      <ErrorBoundary>
        <div ref={scrollRef} style={{ height: '200px' }} className="bg-dark overflow-auto my-auto">
          {arr.map((item, i) => {
            return (
              <div key={i} data-key={i}>
                <Child {...{ i, item }} />
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <input
            type="number"
            className="input-group-prepend"
            value={to}
            max={arr.length - 1}
            min={0}
            onChange={(e) => setTo(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              // scrollRef.current.scrollTo(0, to);
              const el = document.querySelector(`[data-key="${to}"]`);
              console.log(el);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Scroll to
          </button>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
