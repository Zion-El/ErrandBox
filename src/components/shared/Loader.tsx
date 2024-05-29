import ReactDOM from "react-dom";
import LoaderImg from '../../assets/loader.gif'


const Loader = () => {
  const loaderElement = document.getElementById('loader');
  if (!loaderElement) {
    return null;
  }
  return ReactDOM.createPortal(
    <div style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '999999999999999',
  }}>
    <div
    style={{
      position: 'fixed',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '999999999999999',
    }}
    >
      <div style={{  
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '999'
        }}>
        <img src={LoaderImg} alt='Loading'/>
      </div>
    </div>

    </div>,
    loaderElement
  )
}

export default Loader