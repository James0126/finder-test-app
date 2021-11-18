import {
  mirrorURL,
  anchorURL,
  nativeURL,
  failedURL,
  unknownURL,
} from "./transactionURL";
import TxTap from "./TxTap";
import "./Tx.css";

const Transaction = ({ url }) => (
  <div>
    <h1>Transaction</h1>
    <TxTap name="Anchor" transactionURL={anchorURL} url={url} />
    <TxTap name="Mirror" transactionURL={mirrorURL} url={url} />
    <TxTap name="Native" transactionURL={nativeURL} url={url} />
    <TxTap name="Failed" transactionURL={failedURL} url={url} />
    <TxTap name="Unknown" transactionURL={unknownURL} url={url} />
  </div>
);

export default Transaction;
