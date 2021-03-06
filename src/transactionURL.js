const mainnet = "mainnet";
const testnet = "testnet";

export const anchorURL = [
  {
    bLunaBond: `/${testnet}/tx/7B248CC3268E14A722438076F6447343B94495AB1FD7AC2A16010EF9B6243814`,
  },
  {
    bLunaUnbond: `/${testnet}/tx/61EDF9C6F20106C57841AF03236AE002B8707D7A37ABE85E782C7310847026B5`,
  },
  {
    bLunaWithdraw: `/${mainnet}/tx/09ED913E979611AA8675E01D36B2C03F74EC0145F8E9C4DAA37FCE66BCA8278E`,
  },
  {
    bLunaClaimRewards: `/${mainnet}/tx/A31188656AE9DA23E3BDE7256C1CA3863640B65BA5A6A6C91E62E52A64DC3AD8`,
  },
  {
    AnchorDeposit: `/${testnet}/tx/F2F3D7A37398EB172A290898C2FB55598AF91036102D8B98DB05F223736E83F7`,
  },

  {
    AnchorWithdraw: `/${testnet}/tx/FB9F781E2D16E5D7B73AD8BAA64080ACD68C42DFDA79BCC7902D8544EB5E7784`,
  },
  {
    AnchorProvideCollateral: `/${testnet}/tx/5DA3BBA16D5FDE2E9DF15B95ACEB881DE87B54E9D6F07E7200DB5B0C47F1F176`,
  },
  {
    AnchorWithdrawCollateral: `/${testnet}/tx/D6572D5DD8EC199791CCF4D7C67BC6D4517E14D605A70E2A90A114CC8B1FDEB1`,
  },
  {
    AnchorBorrow: `/${testnet}/tx/4E05149E00D04ACC0EC683CE4902C986BD40BBF5A9BBD2A2A56CC5DB24A644EE`,
  },
  {
    AnchorRepay: `/${testnet}/tx/29EBE9D2A7C463CB3E87176B8EF3806C8B7FE351C38596A95352F602C1277F4B`,
  },
  {
    AnchorSwap: `/${testnet}/tx/6DA9861FE22DE8134F3C9930D9B8E395B2B6622220AA9D5FD1407913FD370915`,
  },
  {
    AnchorSwap: `/${testnet}/tx/7904A69BC704C0A7A8B45725C206B777B105037ABD3D33A759551DBC6EB62163`,
  },
  {
    AnchorProvideLiquidity: `/${testnet}/tx/82FD83C6A85C8C8ED6431EAD667A8CE462C1EF6B8FA0358C2F990447184CDDC3`,
  },
  {
    AnchorWithdrawLiquidity: `/${testnet}/tx/4F3ACDA67FA855E64B7D9EEE895781C97E5B0ED3CC234FFE5D87940ECCD2B6A9`,
  },
  {
    AnchorStakeLP: `/${testnet}/tx/5D8D806E45B8439D5CA761DD3212EB484D2CCF4ADCFDCD1DC8902C77D6FCD549`,
  },
  {
    AnchorUnstakeLP: `/${testnet}/tx/21E53E6CFEADE4EB3386FA9D47C6D85D465FF5FD95E1FD65A9FE545F584A374E`,
  },
  {
    AnchorClaimAirdrop: `/${mainnet}/tx/E16B43B905E08B9E52E4A4BE589815FC848059A8E76C4EFBCE128C02FFD058BF`,
  },
  {
    LPStakingRewardClaim: `/${testnet}/tx/7FC44985D3C9B6347F803AAE1DF11303FD8468F7F8F575585DF90E98528106DE`,
  },
  {
    USTBorrowRewardClaim: `/${testnet}/tx/9E50D51ADA4364AA4603EC0C2A3B4D616E38F210D2144540D62D0CC8302D7708`,
  },
  {
    AnchorStakeANC: `/${testnet}/tx/7969647B2E691A6F0E487F1A9AA3C0C2964671A3378D898B5A6367C9A6E148C2`,
  },
  {
    AnchorUnstakeANC: `/${testnet}/tx/90544ABCE0BFC7BF9154FA4143585803B9F579F79F140BF8938700927A50A293`,
  },
  {
    CreatePoll: `/${testnet}/tx/A19C95D500B3B377BA790A824814EEEF044E4E932234EC8D5482FF88222AB441`,
  },
  {
    CastVote: `/${testnet}/tx/8F60DA84547A56E9501204503204AA5772E40BE1EFD0CEF6684334AE1C285370`,
  },
  {
    SubmitBid: `/${testnet}/tx/BB004F34A925C2BF2A981B3BDC72AFE0DEE4F8EAE7E39F477D5530F32820F65A`,
  },
  {
    RetractBid: `/${testnet}/tx/B11EFBAD4D9118F050FA7C5164E46FFA8CB0F7A420F5513261380F0CDC91F0F7`,
  },
  {
    ActivateBid: `/${testnet}/tx/565C3D6487292734FB9D816129BF09108C2F703BBEED1C05DEE2FEFAA5052F3F`,
  },
  {
    ExecuteBid: `/${testnet}/tx/B199EE16CDF86A9905FE3356EFB4C60FBFDB56AA32F9091A8955D591B70352D9`,
  },
  {
    ClaimLiquidations: `/${testnet}/tx/03BC19ADCB8BA412A6FF958AF3ACD6D0ABDD52DC4B2C4CD727181D9C5B959F0A`,
  },
];

export const mirrorURL = [
  {
    mAssetSwap: `/${testnet}/tx/B30EC9C755436FC5440B427C69309ADD109CB2E0CFC530B8AC23770787916AA5`,
  },
  {
    CanceledLimitOrder: `/${testnet}/tx/975AC8AC00EE4DF25C9EB55414DEBECEBB54DDE34D66D9AE4DEAC7BC103A13E7`,
  },
  {
    SubmitBuyOrder: `/${testnet}/tx/BF2173DCBAEEF228D24DE8FD34CF8E2258C7CF91B839013E7229712C9532AADC`,
  },
  {
    SubmitSellOrder: `/${testnet}/tx/C2F2B9598F4F5A0D1B719C47B64CE595F9F5E39C1D93EEF376C380E3E38B8880`,
  },
  {
    ExecuteBuyOrder: `/${testnet}/tx/8FAB5EC977300FEA03E1EADC7DC57B3F203DE90438C4F0A969F6A1E2F3467878`,
  },
  {
    ExecuteSellOrder: `/${testnet}/tx/9F672604DEC4F0C00A532E75AB7B871439C18BBC6B4D0DB20791F726900F6740`,
  },
  {
    Airdrop: `/${mainnet}/tx/A9DF009C2F03F9A15751A672D85E2669C62B71527A1530679DC68F391A76BE51`,
  },
  {
    CastVote: `/${mainnet}/tx/EC91074937A0C182CDABE31C6D09C45EF8E3DF6D7472950CC1508F004378F234`,
  },
  {
    CreatePoll: `/${testnet}/tx/C369F35F800F15827858AFE7E1D313C1CC9251982DE98183489AB03DC2CAED0C`,
  },
  {
    CalimRewards: `/${mainnet}/tx/009FB7E44C4E1DD6644B0C8B5FAC461DE4AC479C72024203AF747A25F33C767C`,
  },
  {
    StakeGov: `/${mainnet}/tx/A7145BE9D9F6C740BD57AC200B5AAF5C1C2B40485F25116CE8C73B710B94F9B8`,
  },
  {
    UnstakeGov: `/${mainnet}/tx/38296E71FB51D804FA2501B2B51F470D7E1037A9DEAFD4F54E6E5C1CF68E9E4C`,
  },
  {
    StakeLP: `/${testnet}/tx/6D67F07790601C01B8C141D67EA1AD3D0F32619CBFB92E11E88104D4EAEDDB05`,
  },
  {
    UnstakeLP: `/${mainnet}/tx/8A1E9D1CBF6929BEE293C14AEE054BDD8B853E05DFE81B0B436C687763E557CC`,
  },
  {
    OpenPosition: `/${testnet}/tx/05BD800CAF6B5BB8C072659A55B33BA5E854B2CD25CEC239E36817AAB6001AFC`,
  },
  {
    Withdraw: `/${testnet}/tx/C999E0E7869AA12590190360818D303A2BDF411D22C2AE66FD3CB05C6FE6B9D9`,
  },
];

export const nativeURL = [
  {
    Swap: `/${testnet}/tx/07BBD943876C66E3294475855BCDD6692C2A097C62CE240EDB463299262351A9`,
  },
  {
    Send: `/${testnet}/tx/CBFAA0DE5A57E6774302C3DCF929EDCEB460589BACA1B2BF2C1FF06AADDFBF6A`,
  },
  {
    Delegate: `/${testnet}/tx/4E2998EE10E006F1775965ABA82BBD24FF6FA1158627648D124DBC9BEC9FF030`,
  },
  {
    Redelegate: `/${testnet}/tx/C776A14599DA0EF7708AB3C8EA5B41AA1BA35B7C21DE3C03822F547EAA64B5DE`,
  },
  {
    Undelegate: `/${testnet}/tx/B3C1F28B60BF6011C5E010505F08C2F124A74D13C66F7BAC0786949061206E34`,
  },
  {
    MultipleSwap: `/${testnet}/tx/9F46B596F38A06E1FA89352B5FB6D502BDCE8687B01964515DF11A8A9490C202`,
  },
  {
    Vote: `/${testnet}/tx/63EDBD713C506C559B2D7FBDDBF1CA9A7A3D6BCA9B34B908ADF26A30C09ADC31`,
  },
  {
    Deposit: `/${testnet}/tx/CDDA5471CC42158DDA821194DC57B6FB7DB7A77DB0C986F8CCA6E923BBA305FF`,
  },
  {
    WithdrawDelegateReward: `/${testnet}/tx/0537E54018FA75B8258E654E1480802EB0EEBBB10AA7790028198986284A19C2`,
  },
  {
    InstantiateContract: `/${testnet}/tx/93FD01CE1E3711505C3CF43C0035D15FC3395F13B789462FB6E14B0674DD3DB8`,
  },
  {
    Store: `/${testnet}/tx/0D08CC9427B1ADCC9B4E3C2B3BACDEEEEA74D83D182DE4DD6DDF807524539FF8`,
  },
  {
    MultiSend: `/${mainnet}/tx/319340BC84D1E950A919EF1FB56865411BAE8BEF9ECEB353E436433E81AE0500`,
  },
];

export const failedURL = [
  {
    ExecuteFailed: `/${testnet}/tx/71A3770CD1B3225BE9311B09B9C26F433F30F6A85B2C5DFF4B7CD6AD079CB268`,
  },
  {
    NativeFailed: `/${testnet}/tx/EFA73A36A50956126EDE5B51AAB7491CA2DECBB1EFD1D90CE366BC6F9A32D89A`,
  },
];

export const unknownURL = [
  {
    Unknown: `/${mainnet}/tx/762660669F45F0E046300B97606F9269403AF8003894B3B97FA6D1DF9E874D6A`,
  },
  {
    Unknown: `/${mainnet}/tx/9A3F30A11E0C3375A5CB3C03C1E1252CEB836AECCD1C5D9E7E6BDD94025FE988`,
  },
  {
    Unknown: `/${mainnet}/tx/C3B793F232549793EE2E778C48DD2EA43DEF05C3832098C06B072CCD2641F5DB`,
  },
  {
    Unknown: `/${mainnet}/tx/59073B0299A3AEE5AE37FD2A154A8CC6DD81BEE8F6E39CD37748AAD79F290507`,
  },
  {
    Unknown: `/${testnet}/tx/7C55C82ABFAC84A2837CC355CDD648E74143609D63E4DDAC3875CBC7E287A3C7`,
  },
];
