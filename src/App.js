import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="vh-100">
      <div className="py-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card shadow rounded-3 container-xl">
            <div className="card-body p-5 text-center">
              <div className="fw-bold">サンプルページ</div>
              <img src={logo} className="App-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
