import "./FinderPages.css";

const FinderPages = ({ url }) => {
  const linkFinder = (finderURL) => (
    <a
      href={finderURL}
      onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noreferrer"
    >
      {finderURL}
    </a>
  );

  return (
    <>
      <h1>Finder Pages</h1>
      <div>
        Main Page
        <br />
        {linkFinder(url)}
      </div>
      <div>
        Account Page
        <br />
        {linkFinder(
          url + `/testnet/address/terra17tv2hvwpg0ukqgd2y5ct2w54fyan7z0zxrm2f9`
        )}
      </div>
      <div>
        Validator Page
        <br />
        {linkFinder(
          url +
            `/testnet/validator/terravaloper1kcux5ht2jslsyfzgs5wtfg4hx9dha8z4tes7xh`
        )}
      </div>
      <div>
        Block Page
        <br />
        {linkFinder(url + `/testnet/blocks/4090976`)}
      </div>
      <div>
        Contract Page
        <br />
        {linkFinder(
          url + `/testnet/address/terra1xwk2x2pyrhlshjgnlv3ql5q8r8r8vyrdf6u2mj`
        )}
      </div>
    </>
  );
};

export default FinderPages;
