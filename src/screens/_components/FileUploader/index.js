import { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

const FileUpload = ({ onUpdate }) => {
  const [files, setFiles] = useState([]);
  const fileRef = useRef();

  return (
    <>
      <Row>
        <Col>
          <div className="mt-3 text-start">
            <label htmlFor="files">ADCIONAR ARQUIVO</label>
            <div
              className="bg-primary p-2"
              style={{
                border: "2px dashed white",
              }}
              onClick={() => {
                fileRef.current.click();
              }}
            >
              UPLOAD FILES
            </div>
            <input
              className="bg-primary form-control d-none"
              type="file"
              name="files"
              ref={fileRef}
              accept="image/png, image/jpeg, .pdf"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setFiles(e.target.files);
                  onUpdate(e.target.files);
                }
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        {files.length > 0 &&
          Array.from(files).map((f, index) => {
            return (
              <Row
                key={index}
                className="align-items-center bg-light text-dark p-2 my-2 justify-content-center"
              >
                <Col>{f.name}</Col>
                <Col className="text-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      const dataTransfer = new DataTransfer();
                      for (let i = 0; i < files.length; i++) {
                        const file = files[i];
                        if (i !== index) {
                          dataTransfer.items.add(file);
                        }
                      }
                      setFiles(dataTransfer.files);
                      onUpdate(dataTransfer.files);
                    }}
                  >
                    X
                  </button>
                </Col>
              </Row>
            );
          })}
      </Row>
    </>
  );
};

export default FileUpload;
