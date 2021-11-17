import { useState } from "react";
import "./TxTap.css";

const TxTap = ({ url, transactionURL, name }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)} className="tapButton">
        {show ? `${name} Hide` : name}
      </button>

      {show && (
        <table className="txList">
          <thead>
            <tr>
              <th colspan="2">{name}</th>
            </tr>
          </thead>
          <tbody>
            {transactionURL.map((urlArray) => {
              const [key, value] = Object.entries(urlArray).flat();
              return (
                <tr>
                  <td>{key}</td>
                  <td>
                    <a
                      href={url + value}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {url + value}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TxTap;
