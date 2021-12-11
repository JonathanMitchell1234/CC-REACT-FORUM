import './App.css';

function App() {
  return (
    <div>
      <div className="panel panel-default post-body">
      <div className="panel-body">
          Hello, I'm a post
        </div>
      </div>
      <div classname="panel panel-default post-editor">
       
          <textarea className="form-control post-editor-input"/>
          <button className="btn btn-success">Post</button>
        </div>
      </div>
    </div>
  );
}

export default App;
