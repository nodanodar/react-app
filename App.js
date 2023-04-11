import { useState } from "react";
import "./styles.css";
import reactStringReplace from "react-string-replace";




export default function App() {
  const posts = [
    {
      title: "【M.U.インテリア　事務所】　https://goo.gl/maps/oaGBd7R1njK4Zq6M8",
      category : "その他",
    },
    {
      title: "【レオパレスセンター　京都店】　https://goo.gl/maps/ZVqgStNaLqju3REK8",
      category : "その他",
    },
    {
      title: "【3204 伏見第3】　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%94%BA%E9%80%9A%E7%94%BA%EF%BC%92%EF%BC%90%E2%88%92%EF%BC%91&ftid=0x60010f6cf93c4769:0x1b3a130893aff8cf",
      category : "伏見区",
    },
    {
      title: "【5197 RX淀】　https://maps.google.com/?q=%E6%B7%80%E9%9A%9B%E7%9B%AE%E7%94%BA%EF%BC%91%EF%BC%95%E2%88%92%EF%BC%91&ftid=0x6001052a2a16205f:0x601cecf5e8e1d44d",
      category : "伏見区",
    },
    {
      title: "【10753 宇野】　https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E4%B8%8D%E5%8B%95%E8%AC%9B%E7%94%BA%EF%BC%95&ftid=0x60010e1db458eb81:0xcbf1f57e4c3e4dc",
        category : "伏見区",
    },
    {
      title: "【10886　藤ノ森】　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%9B%B4%E9%81%95%E6%A9%8B%E5%8D%97%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%EF%BC%90%EF%BC%92&ftid=0x60010f74cc5bd005:0x6a564a74e5781407",
        category : "伏見区",
    },
    {
      title: "【11996　観月】　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E5%BA%9A%E7%94%B3%E7%94%BA%EF%BC%91%EF%BC%90%EF%BC%98%E2%88%92%EF%BC%92&ftid=0x60010fdd1e353f2f:0xa0b0fccb28ac9a93",
          category : "伏見区",
    },
    {
      title: "【12481　カーサ石田大受】　https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%8F%97%E7%94%BA%EF%BC%98%E2%88%92%EF%BC%91&ftid=0x60010e17dd0d61b9:0xa4acce8eb92ead37",
        category : "伏見区",
    },
    {
      title: "【12964　Castello】　https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E8%8F%B1%E5%B7%9D%E7%94%BA%EF%BC%95%EF%BC%95%EF%BC%94&ftid=0x600105af031b7a49:0xc76bad2e9543bd7e",
        category : "伏見区",
    },
    {
      title: "【12987　シェルクール】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E5%BF%97%E6%B0%B4%E7%94%BA%EF%BC%93%E2%88%92%EF%BC%91&ftid=0x6001050a0c3e8947:0xfcf413e9a78f02ef",
        category : "伏見区",
    },
    {
      title: "【13181　アニバーサリー】 https://maps.google.com/?q=%E7%89%87%E5%8E%9F%E7%94%BA%EF%BC%92%EF%BC%98%EF%BC%96%E2%88%92%EF%BC%91&ftid=0x60010f8fa13b5c23:0xf166a4322edf37fb",
        category : "伏見区",
    },
    {
      title: "【13863　フェリシダード】 https://maps.google.com/?q=%E4%B9%85%E6%88%91%E6%9D%B1%E7%94%BA%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%99&ftid=0x600105a3b6ef1893:0x685d60c66363666e",
        category : "伏見区",
    },  {
      title: "【14295　沢井】 https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E8%A5%BF%E9%A2%A8%E5%91%82%E7%94%BA%EF%BC%94%EF%BC%99%E2%88%92%EF%BC%95&ftid=0x60010e1de2c0d583:0x4fcafb61d40a74c1",
        category : "伏見区",
    },{
      title: "【17042　和泉Ⅱ】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%92%8C%E6%B3%89%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%92&ftid=0x60010fcc52a6be1b:0xaa8965982dfd25ea",
        category : "伏見区",
    },{
      title: "【17043　和泉Ⅷ】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%92%8C%E6%B3%89%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%98&ftid=0x60010fcc51485a81:0x3199d1eab0e7bdc2",
        category : "伏見区",
    },{
      title: "【17111　FORTUNA】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E8%8F%B1%E5%B7%9D%E7%94%BA%EF%BC%95%EF%BC%95%EF%BC%94&ftid=0x600105af031b7a49:0xc76bad2e9543bd7e",
        category : "伏見区",
    },{
      title: "【17777　鳥羽街道】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E6%AD%A3%E8%A6%9A%E7%94%BA%EF%BC%99%E2%88%92%EF%BC%97%EF%BC%92&ftid=0x60010f3f3b081ec9:0xad831179b6f9e450",
        category : "伏見区",
    },{
      title: "【18002　ヒルサイドテラス】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E6%9D%B1%E5%8F%A4%E5%BE%A1%E9%A6%99%E7%94%BA%EF%BC%98%EF%BC%94&ftid=0x60010fb46a78b595:0x4d209dfd3bce75",
        category : "伏見区",
    },{
      title: "【18769　シェルクールⅡ】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E5%BF%97%E6%B0%B4%E7%94%BA%EF%BC%94%EF%BC%91%E2%88%92%EF%BC%94%EF%BC%91&ftid=0x6001050a285e1bf9:0x5c1af3598186e11b",
        category : "伏見区",
    },{
      title: "【18792　ラ・リッシュ】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%96%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x600105a0349e2313:0xf84b113f7ab21336",
        category : "伏見区",
    },{
      title: "【20584　紅雪北】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%B4%85%E9%9B%AA%E7%94%BA%EF%BC%94%EF%BC%92&ftid=0x60010fca41ff20ef:0x3704a14da697a88d",
        category : "伏見区",
    },{
      title: "【20713　紅雪南】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%B4%85%E9%9B%AA%E7%94%BA%EF%BC%96%EF%BC%91%E2%88%92%EF%BC%96%EF%BC%91&ftid=0x60010fca4303fecb:0xa0dad7ae0543ba07",
        category : "伏見区",
    },{
      title: "【20956　CONY】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%91%EF%BC%98%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x600105a0edf57811:0x699f41a6df0bed34",
        category : "伏見区",
    },{
      title: "【21535　宇治川】 https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E8%A5%BF%E5%A0%A4%E7%94%BA%EF%BC%93%EF%BC%91%E2%88%92%EF%BC%96&ftid=0x60010fec1d65e347:0x61bd878272f10d7f",
        category : "伏見区",
    },{
      title: "【22892　 HouseKEIYA】 https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E9%87%8E%E8%89%B2%E7%94%BA%EF%BC%93%EF%BC%92%E2%88%92%EF%BC%91&ftid=0x600111e38cd18105:0x4de6f3da4d9cb1ca",
        category : "伏見区",
    },{
      title: "【23388　墨染】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%97%A4%E6%A3%AE%E7%94%BA%EF%BC%93%EF%BC%97%E2%88%92%EF%BC%96%EF%BC%95&ftid=0x60010f0acf94e2af:0x445552f6723adffb",
        category : "伏見区",
    },{
      title: "【24052　淀コンフォート】 https://maps.google.com/?q=%E7%B4%8D%E6%89%80%E7%94%BA%EF%BC%97%EF%BC%91%E2%88%92%EF%BC%93%EF%BC%92&ftid=0x60010518abfa7b89:0x308bc42d46778d92",
        category : "伏見区",
    },{
      title: "【25147　高瀬川】 https://maps.google.com/?q=%E6%AF%9B%E5%88%A9%E7%94%BA%EF%BC%91%EF%BC%92%EF%BC%98&ftid=0x60010f80668dd34b:0x270e879504a0cdec2",
        category : "伏見区",
    },{
      title: "【25748　Pine】 https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E6%A3%AE%E5%8D%97%E7%94%BA%EF%BC%95&ftid=0x60010e234bea3739:0xcecf3f0e8f86a398",
        category : "伏見区",
    },{
      title: "【26915　万帖敷KKT】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E4%B8%87%E5%B8%96%E6%95%B7%E7%94%BA%EF%BC%94%EF%BC%91%EF%BC%98&ftid=0x60010fbabbf31103:0xbfe2022fae770171",
        category : "伏見区",
    },{
      title: "【27406　鴨川】 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%92%EF%BC%90%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x6001050ab8c85bad:0xfe418df73d4d6721",
        category : "伏見区",
    },{
      title: "【27503　安信町四九番地】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E5%AE%89%E4%BF%A1%E7%94%BA%EF%BC%94%EF%BC%99%E2%88%92%EF%BC%91&ftid=0x60010fca078abccd:0x791a59870ae90e15",
        category : "伏見区",
    },{
      title: "【28651　南小栗栖】 https://maps.google.com/?cid=11470890637286148946",
        category : "伏見区",
    },{
      title: "【29080　アゼリア】 https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E9%8D%AC%E3%83%8E%E6%9C%AC%EF%BC%91%EF%BC%90&ftid=0x6001056e389523eb:0xf4d18258721e7fa7",
        category : "伏見区",
    },{
      title: "【30157　MOMOYAMA】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E6%9C%80%E4%B8%8A%E7%94%BA%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%96&ftid=0x60010f98ef640001:0x84f0d96e5ed76fc9",
        category : "伏見区",
    },{
      title: "【31281　伏見】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E6%9C%80%E4%B8%8A%E7%94%BA%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%96&ftid=0x60010f98ef640001:0x84f0d96e5ed76fc9",
        category : "伏見区",
    },{
      title: "【31408　アゼリアⅡ】 https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E9%8D%AC%E3%83%8E%E6%9C%AC%EF%BC%91%EF%BC%90&ftid=0x6001056e389523eb:0xf4d18258721e7fa7",
        category : "伏見区",
    },{
      title: "【31621　司】　https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E5%90%91%E4%BB%A3%E7%94%BA%EF%BC%98%EF%BC%92&ftid=0x60010f5be44eaaab:0x45daa46cc49917a2",
        category : "伏見区",
    },{
      title: "【31931　ヴィルヌーブ醍醐】　https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%8F%97%E7%94%BA%EF%BC%93%EF%BC%92%E2%88%92%EF%BC%95&ftid=0x60010e3da57eee57:0xfe89a43a9e2b0331",
        category : "伏見区",
    },{
      title: "【32619　三井田】 https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E8%A5%BF%E5%86%85%E7%95%91%E7%94%BA%EF%BC%91%EF%BC%99&ftid=0x6001058a00e54db1:0x960758ee3022fb8e",
        category : "伏見区",
    },{
      title: "【33207　鳥羽街道ファミリア】 https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E8%A5%BF%E5%86%85%E7%95%91%E7%94%BA%EF%BC%91%EF%BC%99&ftid=0x6001058a00e54db1:0x960758ee3022fb8e",
        category : "伏見区",
    },{
      title: "【36270　インパクトⅠ】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%9B%A0%E5%B9%A1%EF%BC%92%EF%BC%92%EF%BC%93&ftid=0x60010e2d0be8a671:0xfcb530b2511a5277",
        category : "伏見区",
    },{
      title: "【36525　Ryouma】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%97%A4%E6%A3%AE%E7%8E%84%E8%95%83%E7%94%BA%EF%BC%95%EF%BC%98%EF%BC%93&ftid=0x60010f755ca55da5:0xbd35703b2cbdf760",
        category : "伏見区",
    },{
      title: "【36960　グリーングラスⅠ】 https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%B1%B1%E7%94%BA%EF%BC%94%EF%BC%92&ftid=0x60010e18a43e6f7b:0xe27245f0684d182c",
        category : "伏見区",
    },{
      title: "【38767　OKANISHI】　https://maps.google.com/?q=%E3%80%92601-1416+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%BC%8F%E8%A6%8B%E5%8C%BA%E6%97%A5%E9%87%8E%E5%B2%A1%E8%A5%BF%E7%94%BA&ftid=0x600111e222587acd:0xf7a6cbd5114fcbb6",
        category : "伏見区",
    },{
      title: "【39904　インパクトⅡ】　https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%9B%A0%E5%B9%A1%EF%BC%92%EF%BC%92%EF%BC%99&ftid=0x60010e2d0c47b9b5:0xad83c1c2b5d4787a",
        category : "伏見区",
    },{
      title: "【40269　シュン】　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%A5%BF%E6%B5%A6%E7%94%BA%EF%BC%98%E4%B8%81%E7%9B%AE%EF%BC%95&ftid=0x60010f68a9476fad:0xf40f30e8552bba04",
        category : "伏見区",
    },{
      title: "【41401　フージー桃山】 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E4%B8%B9%E5%BE%8C%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%94&ftid=0x60010fcef2db1dad:0x6501d5b4ec637832",
        category : "伏見区",
    },{
      title: "【42013　深草】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%93%A6%E7%94%BA%EF%BC%94%EF%BC%93&ftid=0x60010f094c96b7a9:0x71db603336d340e6",
        category : "伏見区",
    },{
      title: "【42825　極楽寺】 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E6%A5%B5%E6%A5%BD%E5%AF%BA%E7%94%BA%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x60010f131d4baeff:0x80a60a6981a42d71",
        category : "伏見区",
    },{
      title: "【43934　伏見桃山】　https://maps.google.com/?q=%E9%8D%8B%E5%B3%B6%E7%94%BA%EF%BC%92%EF%BC%94&ftid=0x60010f94d1b46801:0x903ba8322b756031",
        category : "伏見区",
    },{
      title: "【44181　立林】　https://maps.google.com/?q=%E5%B0%8F%E8%B1%86%E5%B1%8B%E7%94%BA%EF%BC%95%EF%BC%96%EF%BC%98%E2%88%92%EF%BC%92&ftid=0x60010f83430cd763:0x1124e5f0ba1caaef",
        category : "伏見区",
    },{
      title: "【44800　伏水向島】　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E5%BA%9A%E7%94%B3%E7%94%BA%EF%BC%93%EF%BC%98%E2%88%92%EF%BC%91&ftid=0x60010fc2d55c4813:0x487aec230dea1a37",
        category : "伏見区",
    },{
      title: "【5162　大輝】　https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E8%B2%B4%E8%88%B9%EF%BC%91%EF%BC%97&ftid=0x600105713e364211:0xbda68a24f5dc3464",
        category : "伏見区",
    },{
      title: "【5306　田中殿】　https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E7%94%B0%E4%B8%AD%E6%AE%BF%E7%94%BA%EF%BC%98%EF%BC%90&ftid=0x6001058bc917c53d:0x2da365103a3e6f8f",
        category : "伏見区",
    },{
      title: "【48370　石田森南】　 https://maps.google.com/?q=%E3%80%92601-1434+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%BC%8F%E8%A6%8B%E5%8C%BA%E7%9F%B3%E7%94%B0%E6%A3%AE%E5%8D%97%E7%94%BA&ftid=0x60010e24bafc429f:0x71a4295be4ee98f0     　",
        category : "伏見区",
    },{
      title: "【51591　ステュディオ】　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%87%BA%E7%BE%BD%E5%B1%8B%E6%95%B7%E7%94%BA%EF%BC%96%E2%88%92%EF%BC%92&ftid=0x60010f763a5bbb87:0x96e84eab9b004973      　",
        category : "伏見区",
    },{
      title: "【52810　クールドイリス】　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E6%A9%8B%E8%A9%B0%E7%94%BA%EF%BC%97%EF%BC%98%EF%BC%90&ftid=0x60010fe99fa4c3a3:0x51ec47172292e5f3",
        category : "伏見区",
    },{
      title: "【53028　第二宇治川】 https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E8%A5%BF%E5%A0%A4%E7%94%BA%EF%BC%93%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x60010fe8ff96e61b:0x19afa83cdbe7cb20   　",
        category : "伏見区",
    },{
      title: "【53080　シャルム桃山】　https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%A4%A7%E6%B4%A5%E7%94%BA%EF%BC%92%EF%BC%94&ftid=0x60010fcd2007c63d:0x24e8bd17b06d3437      　",
        category : "伏見区",
    },{
      title: "【54160　西大山】　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E5%A4%A7%E5%B1%B1%E7%94%BA%EF%BC%96&ftid=0x60010fa3f11cab3f:0x3292bad4d0adb69d      　",
        category : "伏見区",
    },{
      title: "【9753　三室戸】　https://maps.google.com/?q=%E8%8E%B5%E9%81%93%E8%BB%8A%E7%94%B0%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%96%EF%BC%97&ftid=0x600111a4e9b7d375:0x7e8167df5adedeaa",
      category : "宇治市",
    },{
      title: "【10754　あまの】  https://maps.google.com/?q=%E4%BC%8A%E5%8B%A2%E7%94%B0%E7%94%BA%E8%8B%A5%E6%9E%97%EF%BC%91%EF%BC%94%E2%88%92%EF%BC%91&ftid=0x600110597e70b8d1:0x9bbcd5481fa3523c",
      category : "宇治市",
    },{
      title: "【16659　オグラ】　https://maps.google.com/?q=%E5%B0%8F%E5%80%89%E7%94%BA%E6%98%A5%E6%97%A5%E6%A3%AE%EF%BC%96%EF%BC%91&ftid=0x6001104852aacd21:0x8b81d1a97657be1b",
      category : "宇治市",
    },{
      title: "【17585　メゾンラフィーネ】　https://maps.google.com/?q=%E5%AE%87%E6%B2%BB%E7%9F%A2%E8%90%BD%EF%BC%94%EF%BC%99&ftid=0x60011100b6b67fb3:0xabc1ce67a4025b7f",
      category : "宇治市",
    },{
      title: "【21292　J】　https://maps.google.com/?q=%E6%9C%A8%E5%B9%A1%E5%8D%97%E5%B1%B1%EF%BC%99%EF%BC%96&ftid=0x600111dd54e8c1a3:0x46994486617e0963",
      category : "宇治市",
    },{
      title: "【21706　Tomona】　https://maps.google.com/?q=%E5%A4%A7%E4%B9%85%E4%BF%9D%E7%94%BA%E4%B8%8A%E3%83%8E%E5%B1%B1%EF%BC%95%EF%BC%91%E2%88%92%EF%BC%92&ftid=0x600110ee6232704f:0x940ca84b9f2fc22d",
      category : "宇治市",
    },{
      title: "【22068　OKUBO】　https://maps.google.com/?q=%E5%A4%A7%E4%B9%85%E4%BF%9D%E7%94%BA%E4%B9%85%E4%BF%9D%EF%BC%92%E2%88%92%EF%BC%92&ftid=0x600110ef4fb7ef8f:0xcd643b288f338f79",
      category : "宇治市",
    },{
      title: "【23796　HIRAMORI】　https://maps.google.com/?q=%E5%A4%A7%E4%B9%85%E4%BF%9D%E7%94%BA%E5%B9%B3%E7%9B%9B%EF%BC%98%EF%BC%94%E2%88%92%EF%BC%92&ftid=0x60011086069a4489:0xecb28c703f587064",
      category : "宇治市",
    },{
      title: "【25026　宇治伊勢田】　https://maps.google.com/?q=%E4%BC%8A%E5%8B%A2%E7%94%B0%E7%94%BA%E5%8D%97%E5%B1%B1%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x6001105f69963cc5:0x6ab4e30c3f2be68e",
      category : "宇治市",
    },{
      title: "【27700　五箇庄】　https://maps.google.com/?q=%E4%BA%94%E3%82%B1%E5%BA%84%E5%B2%A1%E6%9C%AC%EF%BC%94&ftid=0x600111b9c016e6e7:0x3e28f5285dc88bc5　",
      category : "宇治市",
    },{
      title: "【33805　Yumedono】　https://maps.google.com/?q=%E3%80%92611-0021+%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E7%B1%B3%E9%98%AA&ftid=0x600111012a9329bf:0x7d590b65b5b2f470",
      category : "宇治市",
    },{
      title: "【34201　五ヶ庄Ⅱ】　https://maps.google.com/?q=%E3%80%92611-0011+%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E4%BA%94%E3%82%B1%E5%BA%84%E5%B2%A1%E6%9C%AC&ftid=0x600111b7806c2513:0x4b08cdea8fbb68f6",
      category : "宇治市",
    },{
      title: "【34449　TomonaⅡ】　https://maps.google.com/?q=%E5%BA%83%E9%87%8E%E7%94%BA%E6%A1%90%E7%94%9F%E8%B0%B7%EF%BC%92%EF%BC%98&ftid=0x600110fcb51f2133:0xeb42bbff0824688e",
      category : "宇治市",
    },{
      title: "【38138　HIROSHIBA】　https://maps.google.com/?q=%E4%BA%94%E3%82%B1%E5%BA%84%E8%8A%9D%E3%83%8E%E6%9D%B1%EF%BC%94%EF%BC%92&ftid=0x600111c5cf70f11d:0xb7e5ac0d9efdd8ac",
      category : "宇治市",
    },{
      title: "【39973　大河原】　https://maps.google.com/?q=%E6%A7%87%E5%B3%B6%E7%94%BA%E4%B8%80%E3%83%8E%E5%9D%AA%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x600110366055188f:0x7813cde3eb418ae2",
      category : "宇治市",
    },{
      title: "【41159　おおまち】　https://maps.google.com/?q=%E6%A7%87%E5%B3%B6%E7%94%BA%E5%A4%A7%E7%94%BA%EF%BC%93%EF%BC%99&ftid=0x6001104bb59764d9:0xad454bb0b75dcd75",
      category : "宇治市",
    },{
      title: "【44811　宇治壱番】　https://maps.google.com/?q=%E5%AE%87%E6%B2%BB%E4%B8%8B%E5%B1%85%EF%BC%97&ftid=0x6001110f691ff95f:0xd39a5a68dd8661db",
      category : "宇治市",
    },{
      title: "【47169　KS蔭山】　https://maps.google.com/?q=%E5%AE%87%E6%B2%BB%E8%94%AD%E5%B1%B1%EF%BC%99%EF%BC%90%E2%88%92%EF%BC%96&ftid=0x600110537a037a5b:0x4a1951bc8a3f22f7",
      category : "宇治市",
    },{
      title: "【52063　広野】　https://maps.google.com/?q=%E5%BA%83%E9%87%8E%E7%94%BA%E6%9D%B1%E8%A3%8F%EF%BC%91%EF%BC%94&ftid=0x600110f0ca12d46b:0xfdc4100e0e5cc585",
      category : "宇治市",
    },{
      title: "【52300　宇治大久保】　https://maps.google.com/?q=%E3%80%92611-0033+%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E5%A4%A7%E4%B9%85%E4%BF%9D%E7%94%BA%E5%8D%97%E3%83%8E%E5%8F%A3&ftid=0x600110ed461b0207:0x6dbfdff336041faa",
      category : "宇治市",
    },{
      title: "【55360　カンフォーラ】　https://maps.google.com/?q=%E5%85%AD%E5%9C%B0%E8%94%B5%E5%BE%B3%E6%B0%B8%EF%BC%98&ftid=0x60010e2e96a516ef:0x434f592ccd223d4c",
      category : "宇治市",
    },{
      title: "【55603　若文】　https://maps.google.com/?q=%E3%80%92611-0043+%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E4%BC%8A%E5%8B%A2%E7%94%B0%E7%94%BA%E6%AF%9B%E8%AA%9E&ftid=0x6001105e9ca69477:0xdf9b3938d5a73ece",
      category : "宇治市",
    },{
      title: "【55705　ヒルズ】　https://maps.google.com/?q=%E5%BA%83%E9%87%8E%E7%94%BA%E6%9D%B1%E8%A3%8F%EF%BC%91%EF%BC%92%EF%BC%99&ftid=0x600110e56dc4027d:0xa8e819ea74c41918",
      category : "宇治市",
    },{
      title: "【15971　荒見】https://maps.google.com/?q=%E5%AF%8C%E9%87%8E%E5%8C%97%E5%9E%A3%E5%86%85%EF%BC%93%EF%BC%92%E2%88%92%EF%BC%91&ftid=0x6001172f6346499b:0x49848cee6c791b2d",
      category : "城陽市",
    },{
      title: "【16014　ヴィラパルク壱番館】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E5%AE%AE%E3%83%8E%E5%B9%B3%EF%BC%92%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x600116d4e66b57db:0xe6dc9b255dcca239",
      category : "城陽市",
    },{
      title: "【16015　ヴィラパルク弐番館】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E5%AE%AE%E3%83%8E%E5%B9%B3%EF%BC%92%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x600116d4e66b57db:0xe6dc9b255dcca239",
      category : "城陽市",
    },{
      title: "【16605　PARCSIDE】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E4%BB%8A%E5%A0%80%EF%BC%91%EF%BC%98%E2%88%92%EF%BC%91&ftid=0x600110c84beaa7e1:0x1ad2f01400f2dcaa",
      category : "城陽市",
    },{
      title: "【20433　PARCSIDEⅡ】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E4%B8%AD%E5%A4%A7%E5%B0%8F%EF%BC%92%E2%88%92%EF%BC%94&ftid=0x600110c8ffeec927:0xf02ff173ea8acf96",
      category : "城陽市",
    },{
      title: "【26947　木蓮】https://maps.google.com/?q=%E9%95%B7%E6%B1%A0%E9%87%8C%E9%96%8B%EF%BC%96%EF%BC%92%E2%88%92%EF%BC%96%EF%BC%92&ftid=0x600116dc1d35b46f:0x3823b8dfb3eb6e81",
      category : "城陽市",
    },{
      title: "【43608　サザンガーデン寺田Ⅱ】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E9%AB%98%E7%94%B0%EF%BC%96%E2%88%92%EF%BC%98&ftid=0x600110cf847266fb:0xc8122ac202de1a48",
      category : "城陽市",
    },{
      title: "【45950　サザンガーデン寺田】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E6%96%B0%E6%B1%A0%EF%BC%97%EF%BC%99%E2%88%92%EF%BC%91&ftid=0x6001172ccbb1cf2f:0x8d8c04d0e2f3ed35",
      category : "城陽市",
    },{
      title: "【46285　との】https://maps.google.com/?q=%E6%9E%87%E6%9D%B7%E5%BA%84%E5%B3%B6%E3%83%8E%E5%AE%AE%EF%BC%93%EF%BC%99%E2%88%92%EF%BC%91&ftid=0x60011736e1fc7bcd:0x878c428421f40f23",
      category : "城陽市",
    },{
      title: "【57832　ドミール城陽】https://maps.google.com/?q=%E5%AF%BA%E7%94%B0%E6%9E%97%E3%83%8E%E5%8F%A3%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%95&ftid=0x600110d719614387:0x1ebe6e34553687eb",
      category : "城陽市",
    },{
      title: "【11276　SweetSeason】https://maps.google.com/?q=%E8%8D%89%E5%86%85%E9%90%98%E9%89%A6%E5%89%B2%EF%BC%91%EF%BC%90%E2%88%92%EF%BC%91&ftid=0x600117037664a211:0xc5d5f79b39ae3df0",
      category : "京田辺市",
    },{
      title: "【22517　ブライトン新田辺】https://maps.google.com/?q=%E6%B2%B3%E5%8E%9F%E5%BE%A1%E5%BD%B1%EF%BC%96&ftid=0x6001171251f232d1:0x9696734f0304461",
      category : "京田辺市",
    },{
      title: "【23916　K】https://maps.google.com/?q=%E3%80%92610-0313+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E4%B8%89%E5%B1%B1%E6%9C%A8%E8%A6%8B%E5%B0%8A%E7%94%B0&ftid=0x600117b539f69da3:0x627eab8db1f33026",
      category : "京田辺市",
    },{
      title: "【24767　プリマヴェーラ】https://maps.google.com/?q=%E4%B8%89%E5%B1%B1%E6%9C%A8%E5%B1%B1%E5%B4%8E%EF%BC%95%EF%BC%96%E2%88%92%EF%BC%91&ftid=0x600117b7a024173b:0x82d6b090bffc3105",
      category : "京田辺市",
    },{
      title: "【25659　宮津】https://maps.google.com/?q=%E3%80%92610-0314+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E5%AE%AE%E6%B4%A5%E4%BD%90%E7%89%99%E5%9E%A3%E5%86%85&ftid=0x600117cecac6328f:0x4936e67de4e40e73",
      category : "京田辺市",
    },{
      title: "【26432　サンメゾン】https://maps.google.com/?q=%E6%9D%B1%E5%8F%A4%E6%A3%AE%EF%BC%96%E2%88%92%EF%BC%92&ftid=0x600117044c87427f:0x588b36b9b33d9fb2",
      category : "京田辺市",
    },{
      title: "【27218　セレーノ】https://maps.google.com/?q=%E3%80%92610-0331+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E7%94%B0%E8%BE%BA%E6%B3%A2%E9%A2%A8&ftid=0x6001176a11827485:0x903f83f72bcfbe00",
      category : "京田辺市",
    },{
      title: "【30319　Holly】https://maps.google.com/?q=%E8%96%AA%E9%95%B7%E5%B0%BE%E8%B0%B7%EF%BC%93%EF%BC%96&ftid=0x60011766c7a66c4f:0xdf792b6503d49400",
      category : "京田辺市",
    },{
      title: "【33772　E&WIMAMURA】https://maps.google.com/?q=%E3%80%92610-0362+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E6%9D%B1%E8%A5%BF%E7%A5%9E%E5%B1%8B&ftid=0x6001171064f3f749:0x91b8306a3da8e9e8",
      category : "京田辺市",
    },{
      title: "【35400　一休寺道】https://maps.google.com/?q=%E8%96%AA%E5%A4%A9%E7%A5%9E%E5%A0%82%EF%BC%92%EF%BC%94&ftid=0x600117428f28455b:0x3dc111e5a9039d55",
      category : "京田辺市",
    },{
      title: "【35574　やわらぎ】https://maps.google.com/?cid=5077049721671191823",
      category : "京田辺市",
    },{
      title: "【38677　クールドロータス】https://maps.google.com/?q=%E7%94%B0%E8%BE%BA%E8%BE%BB%EF%BC%99%E2%88%92%EF%BC%91&ftid=0x600117699e81a2e3:0xab5089100cd16f6d",
      category : "京田辺市",
    },{
      title: "【40767　ラグラシューズ】https://maps.google.com/?cid=2167504060012655055",
      category : "京田辺市",
    },{
      title: "【41183　エヌリバー】https://maps.google.com/?cid=8361364438758276271",
      category : "京田辺市",
    },{
      title: "【41471　あきつ】https://maps.google.com/?q=%E6%B2%B3%E5%8E%9F%E5%B9%B3%E7%94%B0%EF%BC%97&ftid=0x6001171419980d81:0xfed4a17b6d093e34",
      category : "京田辺市",
    },{
      title: "【42649　MARUTO京田辺】https://goo.gl/maps/mHXMtJrh2DAnxh1D6",
      category : "京田辺市",
    },{
      title: "【43307　ビューテラス草内】https://maps.google.com/?q=%E3%80%92610-0311+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E8%8D%89%E5%86%85%E8%A5%BF%E5%9E%A3%E5%86%85&ftid=0x600117a9d2875a23:0x3af417256cc5f02b",
      category : "京田辺市",
    },{
      title: "【44603　ブロッサム】https://maps.google.com/?q=%E6%9D%B1%E5%8F%A4%E6%A3%AE%EF%BC%94%EF%BC%97&ftid=0x60011705781e3525:0x32bb69d35d22033b",
      category : "京田辺市",
    },{
      title: "【46025　京田辺】https://maps.google.com/?q=%E8%96%AA%E6%9D%B1%E6%B2%A2%EF%BC%93%EF%BC%93&ftid=0x60011742c02c7d83:0x41fe5dfc4dfbd933",
      category : "京田辺市",
    },{
      title: "【46640　ディアコート京田辺】https://maps.google.com/?q=%E8%96%AA%E4%BA%95%E6%89%8B%EF%BC%95%EF%BC%99&ftid=0x60011759372e4369:0xc01f8a67a4b1c75d",
      category : "京田辺市",
    },{
      title: "【53100　ディスポレール】https://maps.google.com/?q=%E3%80%92610-0311+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E7%94%B0%E8%BE%BA%E5%B8%82%E8%8D%89%E5%86%85%E6%A9%8B%E6%8A%98&ftid=0x600117001bb29d71:0xa205fb220451ee1a",
      category : "京田辺市",
    },{
      title: "【53362　旭】https://maps.google.com/?q=%E6%B2%B3%E5%8E%9F%E5%8F%97%E7%94%B0%EF%BC%96%EF%BC%90&ftid=0x600117127cf9e149:0xbaf6c975d3b78430",
      category : "京田辺市",
    },{
      title: "【53604　夢追人】https://goo.gl/maps/zJ4JY1EmJSjyQcud6",
      category : "京田辺市",
    },{
      title: "【29710　センターポール】https://maps.google.com/?q=%E4%BA%95%E6%89%8B%E8%A5%BF%E5%89%8D%E7%94%B0%EF%BC%96%EF%BC%92%E2%88%92%EF%BC%91&ftid=0x600116196374181d:0x6fea5323a1f79af8",
      category : "綴喜郡",
    },
  ];



  const [showPosts, setShowPosts] = useState(posts);
  const [inputValue, setInputValue] = useState();

  const categories = Array.from(new Set(posts.map((post) => post.category)));
  // const titles = Array.from(new Set(posts.map((post) => post.title)));
 

  // カテゴリー絞り込み
  const selectCategory = (category) => {
    if (category === "all") {
      setShowPosts(posts);
    } else {
      const selectedPosts = posts.filter((post) => post.category === category);
      setShowPosts(selectedPosts);
    }
  };

  // フリーキーワードでの絞り込み
  const search = (value) => {
    if (value !== "") {
      const serchedPosts = posts.filter(
        (post) =>
          Object.values(post).filter(
            (item) =>
              item !== undefined &&
              item !== null &&
              item.toUpperCase().indexOf(value.toUpperCase()) !== -1
          ).length > 0
      );
      setShowPosts(serchedPosts);
      return;
    }

    setShowPosts(posts);
    return;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  return (
    <div className="App">
      <h1>レオパレス物件検索</h1>
      {/* <div>
        <h2></GoogleMap></h2>
      </div> */}

      {/* カテゴリー選択ボタン */}
      <div>
        <h4>Category：</h4>
        <button onClick={() => selectCategory("all")}>All</button>
        {categories.map((category) => (
          <button onClick={() => selectCategory(category)}>{category}</button>
        ))}
      </div>

      {/* フリーキーワード検索フォーム */}
      <div>
        <h4>Search</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      {/* 記事一覧表示 */}
      {showPosts.map((post, index) => {
        return (
          <div key={post.title}>
            <p>
              {index + 1}. {reactStringReplace(post.title, /(https?:\/\/\S+)/g, (match, i) => (
               <a key={i} href={match} className="text-blue-400">
                 {match}
               </a>
             ))}
            </p>
            <p>category：{post.category}</p>
         </div>
        );
      })}
    </div>
    
  );
}
