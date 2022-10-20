import reactDom from "react-dom";
import './VideoModal.css'

function VideoModal({ showw, children, w, mh }) {
    return reactDom.createPortal(
        <>
         {
         showw ?
         
          <div className={`modalContainerr ${showw ? "showw" : ""}`}>

            <div className="modall" onClick={(e) => e.stopPropagation()} style={{width: `${w}px`, height: `${mh}px`}} >

              <main className="modal_contentt"> {children} </main>

            </div>

          </div>
          : null
         }
        </>,
        document.getElementById("modall")
      );
}

export default VideoModal