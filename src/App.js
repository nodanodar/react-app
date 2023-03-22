import { useState } from "react";
import "./styles.css";
import reactStringReplace from "react-string-replace";

export default function App() {
  const posts = [
    {
      title: "3204 伏見第3　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%94%BA%E9%80%9A%E7%94%BA%EF%BC%92%EF%BC%90%E2%88%92%EF%BC%91&ftid=0x60010f6cf93c4769:0x1b3a130893aff8cf",
      category : "伏見区",
    },
    {
      title: "5197 RX淀　https://maps.google.com/?q=%E6%B7%80%E9%9A%9B%E7%9B%AE%E7%94%BA%EF%BC%91%EF%BC%95%E2%88%92%EF%BC%91&ftid=0x6001052a2a16205f:0x601cecf5e8e1d44d",
      category : "伏見区",
    },
    {
      title: "10753 宇野　https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E4%B8%8D%E5%8B%95%E8%AC%9B%E7%94%BA%EF%BC%95&ftid=0x60010e1db458eb81:0xcbf1f57e4c3e4dc",
        category : "伏見区",
    },
    {
      title: "10886　藤ノ森　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%9B%B4%E9%81%95%E6%A9%8B%E5%8D%97%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%EF%BC%90%EF%BC%92&ftid=0x60010f74cc5bd005:0x6a564a74e5781407",
        category : "伏見区",
    },
    {
      title: "11996　観月　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E5%BA%9A%E7%94%B3%E7%94%BA%EF%BC%91%EF%BC%90%EF%BC%98%E2%88%92%EF%BC%92&ftid=0x60010fdd1e353f2f:0xa0b0fccb28ac9a93",
          category : "伏見区",
    },
    {
      title: "12481　カーサ石田大受　https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%8F%97%E7%94%BA%EF%BC%98%E2%88%92%EF%BC%91&ftid=0x60010e17dd0d61b9:0xa4acce8eb92ead37",
        category : "伏見区",
    },
    {
      title: "12964　Castello　https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E8%8F%B1%E5%B7%9D%E7%94%BA%EF%BC%95%EF%BC%95%EF%BC%94&ftid=0x600105af031b7a49:0xc76bad2e9543bd7e",
        category : "伏見区",
    },
    {
      title: "12987　シェルクール https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E5%BF%97%E6%B0%B4%E7%94%BA%EF%BC%93%E2%88%92%EF%BC%91&ftid=0x6001050a0c3e8947:0xfcf413e9a78f02ef",
        category : "伏見区",
    },
    {
      title: "13181　アニバーサリー https://maps.google.com/?q=%E7%89%87%E5%8E%9F%E7%94%BA%EF%BC%92%EF%BC%98%EF%BC%96%E2%88%92%EF%BC%91&ftid=0x60010f8fa13b5c23:0xf166a4322edf37fb",
        category : "伏見区",
    },
    {
      title: "13863　フェリシダード https://maps.google.com/?q=%E4%B9%85%E6%88%91%E6%9D%B1%E7%94%BA%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%99&ftid=0x600105a3b6ef1893:0x685d60c66363666e",
        category : "伏見区",
    },  {
      title: "14295　沢井 https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E8%A5%BF%E9%A2%A8%E5%91%82%E7%94%BA%EF%BC%94%EF%BC%99%E2%88%92%EF%BC%95&ftid=0x60010e1de2c0d583:0x4fcafb61d40a74c1",
        category : "伏見区",
    },{
      title: "17042　和泉Ⅱ https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%92%8C%E6%B3%89%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%92&ftid=0x60010fcc52a6be1b:0xaa8965982dfd25ea",
        category : "伏見区",
    },{
      title: "17043　和泉Ⅷ https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%92%8C%E6%B3%89%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%98&ftid=0x60010fcc51485a81:0x3199d1eab0e7bdc2",
        category : "伏見区",
    },{
      title: "17111　FORTUNA https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E8%8F%B1%E5%B7%9D%E7%94%BA%EF%BC%95%EF%BC%95%EF%BC%94&ftid=0x600105af031b7a49:0xc76bad2e9543bd7e",
        category : "伏見区",
    },{
      title: "17777　鳥羽街道 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E6%AD%A3%E8%A6%9A%E7%94%BA%EF%BC%99%E2%88%92%EF%BC%97%EF%BC%92&ftid=0x60010f3f3b081ec9:0xad831179b6f9e450",
        category : "伏見区",
    },{
      title: "18002　ヒルサイドテラス https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E6%9D%B1%E5%8F%A4%E5%BE%A1%E9%A6%99%E7%94%BA%EF%BC%98%EF%BC%94&ftid=0x60010fb46a78b595:0x4d209dfd3bce75",
        category : "伏見区",
    },{
      title: "18769　シェルクールⅡ https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E5%BF%97%E6%B0%B4%E7%94%BA%EF%BC%94%EF%BC%91%E2%88%92%EF%BC%94%EF%BC%91&ftid=0x6001050a285e1bf9:0x5c1af3598186e11b",
        category : "伏見区",
    },{
      title: "18792　ラ・リッシュ https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%96%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x600105a0349e2313:0xf84b113f7ab21336",
        category : "伏見区",
    },{
      title: "20584　紅雪北 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%B4%85%E9%9B%AA%E7%94%BA%EF%BC%94%EF%BC%92&ftid=0x60010fca41ff20ef:0x3704a14da697a88d",
        category : "伏見区",
    },{
      title: "20713　紅雪南 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%B4%85%E9%9B%AA%E7%94%BA%EF%BC%96%EF%BC%91%E2%88%92%EF%BC%96%EF%BC%91&ftid=0x60010fca4303fecb:0xa0dad7ae0543ba07",
        category : "伏見区",
    },{
      title: "20956　CONY https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%91%EF%BC%98%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x600105a0edf57811:0x699f41a6df0bed34",
        category : "伏見区",
    },{
      title: "21535　宇治川 https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E8%A5%BF%E5%A0%A4%E7%94%BA%EF%BC%93%EF%BC%91%E2%88%92%EF%BC%96&ftid=0x60010fec1d65e347:0x61bd878272f10d7f",
        category : "伏見区",
    },{
      title: "22892　 HouseKEIYA https://maps.google.com/?q=%E6%97%A5%E9%87%8E%E9%87%8E%E8%89%B2%E7%94%BA%EF%BC%93%EF%BC%92%E2%88%92%EF%BC%91&ftid=0x600111e38cd18105:0x4de6f3da4d9cb1ca",
        category : "伏見区",
    },{
      title: "23388　墨染 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%97%A4%E6%A3%AE%E7%94%BA%EF%BC%93%EF%BC%97%E2%88%92%EF%BC%96%EF%BC%95&ftid=0x60010f0acf94e2af:0x445552f6723adffb",
        category : "伏見区",
    },{
      title: "24052　淀コンフォート https://maps.google.com/?q=%E7%B4%8D%E6%89%80%E7%94%BA%EF%BC%97%EF%BC%91%E2%88%92%EF%BC%93%EF%BC%92&ftid=0x60010518abfa7b89:0x308bc42d46778d92",
        category : "伏見区",
    },{
      title: "25147　高瀬川 https://maps.google.com/?q=%E6%AF%9B%E5%88%A9%E7%94%BA%EF%BC%91%EF%BC%92%EF%BC%98&ftid=0x60010f80668dd34b:0x270e879504a0cdec2",
        category : "伏見区",
    },{
      title: "25748　Pine https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E6%A3%AE%E5%8D%97%E7%94%BA%EF%BC%95&ftid=0x60010e234bea3739:0xcecf3f0e8f86a398",
        category : "伏見区",
    },{
      title: "26915　万帖敷KKT https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E4%B8%87%E5%B8%96%E6%95%B7%E7%94%BA%EF%BC%94%EF%BC%91%EF%BC%98&ftid=0x60010fbabbf31103:0xbfe2022fae770171",
        category : "伏見区",
    },{
      title: "27406　鴨川 https://maps.google.com/?q=%E7%BE%BD%E6%9D%9F%E5%B8%AB%E9%B4%A8%E5%B7%9D%E7%94%BA%EF%BC%92%EF%BC%90%EF%BC%97%E2%88%92%EF%BC%91&ftid=0x6001050ab8c85bad:0xfe418df73d4d6721",
        category : "伏見区",
    },{
      title: "27503　安信町四九番地 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E5%AE%89%E4%BF%A1%E7%94%BA%EF%BC%94%EF%BC%99%E2%88%92%EF%BC%91&ftid=0x60010fca078abccd:0x791a59870ae90e15",
        category : "伏見区",
    },{
      title: "28651　南小栗栖 https://maps.google.com/?cid=11470890637286148946",
        category : "伏見区",
    },{
      title: "29080　アゼリア https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E9%8D%AC%E3%83%8E%E6%9C%AC%EF%BC%91%EF%BC%90&ftid=0x6001056e389523eb:0xf4d18258721e7fa7",
        category : "伏見区",
    },{
      title: "30157　MOMOYAMA https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E6%9C%80%E4%B8%8A%E7%94%BA%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%96&ftid=0x60010f98ef640001:0x84f0d96e5ed76fc9",
        category : "伏見区",
    },{
      title: "31281　伏見 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E6%9C%80%E4%B8%8A%E7%94%BA%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%96&ftid=0x60010f98ef640001:0x84f0d96e5ed76fc9",
        category : "伏見区",
    },{
      title: "31408　アゼリアⅡ https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E9%8D%AC%E3%83%8E%E6%9C%AC%EF%BC%91%EF%BC%90&ftid=0x6001056e389523eb:0xf4d18258721e7fa7",
        category : "伏見区",
    },{
      title: "31621　司　https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E5%90%91%E4%BB%A3%E7%94%BA%EF%BC%98%EF%BC%92&ftid=0x60010f5be44eaaab:0x45daa46cc49917a2",
        category : "伏見区",
    },{
      title: "31931　ヴィルヌーブ醍醐　https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%8F%97%E7%94%BA%EF%BC%93%EF%BC%92%E2%88%92%EF%BC%95&ftid=0x60010e3da57eee57:0xfe89a43a9e2b0331",
        category : "伏見区",
    },{
      title: "32619　三井田 https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E8%A5%BF%E5%86%85%E7%95%91%E7%94%BA%EF%BC%91%EF%BC%99&ftid=0x6001058a00e54db1:0x960758ee3022fb8e",
        category : "伏見区",
    },{
      title: "33207　鳥羽街道ファミリア https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E8%A5%BF%E5%86%85%E7%95%91%E7%94%BA%EF%BC%91%EF%BC%99&ftid=0x6001058a00e54db1:0x960758ee3022fb8e",
        category : "伏見区",
    },{
      title: "36270　インパクトⅠ https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%9B%A0%E5%B9%A1%EF%BC%92%EF%BC%92%EF%BC%93&ftid=0x60010e2d0be8a671:0xfcb530b2511a5277",
        category : "伏見区",
    },{
      title: "36525　Ryouma https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%97%A4%E6%A3%AE%E7%8E%84%E8%95%83%E7%94%BA%EF%BC%95%EF%BC%98%EF%BC%93&ftid=0x60010f755ca55da5:0xbd35703b2cbdf760",
        category : "伏見区",
    },{
      title: "36960　グリーングラスⅠ https://maps.google.com/?q=%E7%9F%B3%E7%94%B0%E5%A4%A7%E5%B1%B1%E7%94%BA%EF%BC%94%EF%BC%92&ftid=0x60010e18a43e6f7b:0xe27245f0684d182c",
        category : "伏見区",
    },{
      title: "38767　OKANISHI　https://maps.google.com/?q=%E3%80%92601-1416+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%BC%8F%E8%A6%8B%E5%8C%BA%E6%97%A5%E9%87%8E%E5%B2%A1%E8%A5%BF%E7%94%BA&ftid=0x600111e222587acd:0xf7a6cbd5114fcbb6",
        category : "伏見区",
    },{
      title: "39904　インパクトⅡ　https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%9B%A0%E5%B9%A1%EF%BC%92%EF%BC%92%EF%BC%99&ftid=0x60010e2d0c47b9b5:0xad83c1c2b5d4787a",
        category : "伏見区",
    },{
      title: "40269　シュン　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E8%A5%BF%E6%B5%A6%E7%94%BA%EF%BC%98%E4%B8%81%E7%9B%AE%EF%BC%95&ftid=0x60010f68a9476fad:0xf40f30e8552bba04",
        category : "伏見区",
    },{
      title: "41401　フージー桃山 https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E4%B8%B9%E5%BE%8C%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%94&ftid=0x60010fcef2db1dad:0x6501d5b4ec637832",
        category : "伏見区",
    },{
      title: "42013　深草 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E7%93%A6%E7%94%BA%EF%BC%94%EF%BC%93&ftid=0x60010f094c96b7a9:0x71db603336d340e6",
        category : "伏見区",
    },{
      title: "42825　極楽寺 https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E6%A5%B5%E6%A5%BD%E5%AF%BA%E7%94%BA%EF%BC%92%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x60010f131d4baeff:0x80a60a6981a42d71",
        category : "伏見区",
    },{
      title: "43934　伏見桃山　https://maps.google.com/?q=%E9%8D%8B%E5%B3%B6%E7%94%BA%EF%BC%92%EF%BC%94&ftid=0x60010f94d1b46801:0x903ba8322b756031",
        category : "伏見区",
    },{
      title: "44181　立林　https://maps.google.com/?q=%E5%B0%8F%E8%B1%86%E5%B1%8B%E7%94%BA%EF%BC%95%EF%BC%96%EF%BC%98%E2%88%92%EF%BC%92&ftid=0x60010f83430cd763:0x1124e5f0ba1caaef",
        category : "伏見区",
    },{
      title: "44800　伏水向島　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E5%BA%9A%E7%94%B3%E7%94%BA%EF%BC%93%EF%BC%98%E2%88%92%EF%BC%91&ftid=0x60010fc2d55c4813:0x487aec230dea1a37",
        category : "伏見区",
    },{
      title: "45162　大輝　https://maps.google.com/?q=%E6%A8%AA%E5%A4%A7%E8%B7%AF%E8%B2%B4%E8%88%B9%EF%BC%91%EF%BC%97&ftid=0x600105713e364211:0xbda68a24f5dc3464",
        category : "伏見区",
    },{
      title: "45306　田中殿　https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E7%94%B0%E4%B8%AD%E6%AE%BF%E7%94%BA%EF%BC%98%EF%BC%90&ftid=0x6001058bc917c53d:0x2da365103a3e6f8f",
        category : "伏見区",
    },{
      title: "48370　石田森南　 https://maps.google.com/?q=%E3%80%92601-1434+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E4%BC%8F%E8%A6%8B%E5%8C%BA%E7%9F%B3%E7%94%B0%E6%A3%AE%E5%8D%97%E7%94%BA&ftid=0x60010e24bafc429f:0x71a4295be4ee98f0     　",
        category : "伏見区",
    },{
      title: "51591　ステュディオ　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%87%BA%E7%BE%BD%E5%B1%8B%E6%95%B7%E7%94%BA%EF%BC%96%E2%88%92%EF%BC%92&ftid=0x60010f763a5bbb87:0x96e84eab9b004973      　",
        category : "伏見区",
    },{
      title: "52810　クールドイリス　https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E6%A9%8B%E8%A9%B0%E7%94%BA%EF%BC%97%EF%BC%98%EF%BC%90&ftid=0x60010fe99fa4c3a3:0x51ec47172292e5f3",
        category : "伏見区",
    },{
      title: "53028　第二宇治川 https://maps.google.com/?q=%E5%90%91%E5%B3%B6%E8%A5%BF%E5%A0%A4%E7%94%BA%EF%BC%93%EF%BC%91%E2%88%92%EF%BC%91&ftid=0x60010fe8ff96e61b:0x19afa83cdbe7cb20   　",
        category : "伏見区",
    },{
      title: "53080　シャルム桃山　https://maps.google.com/?q=%E6%A1%83%E5%B1%B1%E7%94%BA%E5%A4%A7%E6%B4%A5%E7%94%BA%EF%BC%92%EF%BC%94&ftid=0x60010fcd2007c63d:0x24e8bd17b06d3437      　",
        category : "伏見区",
    },{
      title: "54160　西大山　https://maps.google.com/?q=%E6%B7%B1%E8%8D%89%E5%A4%A7%E4%BA%80%E8%B0%B7%E5%A4%A7%E5%B1%B1%E7%94%BA%EF%BC%96&ftid=0x60010fa3f11cab3f:0x3292bad4d0adb69d      　",
        category : "伏見区",
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
      <h1>記事一覧</h1>

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
