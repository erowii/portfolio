import { GridContainer } from "./CommonComp";

const infoList = [
  {
    name: "補魚機路徑編輯器",
    info: "提供企劃編輯捕魚機魚群游動路徑，輸出svn格式讓H5與Unity使用。",
    tags: ["#gsap"],
    image: "/static/images/logo/Path_svg.png",
    page: [
      {
        "title": "工作流程",
        "images": ["static/images/devTool/motionPath.webp"],
        "video": []
      },
      {
        "title": "介面",
        "images": ["static/images/devTool/LayaAir_MotionPath.webp"],
        "video": []
      },
      {
        "title": "操作影片",
        "images": [],
        "video": ["static/video/MotionPath.mp4"]
      }
    ]
  },
  {
    name: "SFS Web工具",
    info: "使用Web連線SFS，可發送請求與接收回應，用於測試GameServer。",
    tags: ["#Reactjs", "#SmartFox"],
    image: "/static/images/logo/sfs_webUI.png",
    page: [
      {
        "title": "介面",
        "images": [
          "static/images/devTool/sfs_main.webp"
        ],
        "video": []
      }
    ]
  },
  {
    name: "SFS封包轉換工具",
    info: "使用Excel定義封包格式，產生Java以及TypeScript程式碼。",
    tags: ["#nodejs"],
    image: "/static/images/logo/sfs_convert.png",
    page: [
      {
        "title": "工作流程",
        "images": [
          "static/images/devTool/sfs_convert.webp"
        ],
        "video": []
      }
    ]
  },
  {
    name: "BitmapFont",
    info: "位圖字體產生工具，產生.fnt供Label組件使用。",
    tags: ["#CocosCreator3擴展"],
    image: "/static/images/logo/fnt.png",
    page: [
      {
        "title": "介面",
        "images": [
          "static/images/devTool/CocosCreator3_bitmapFont1.webp",
        ],
        "video": []
      },
      {
        "title": "輸出",
        "images": [
          "static/images/devTool/CocosCreator3_bitmapFont2.webp",
        ],
        "video": []
      },
      {
        "title": "使用",
        "images": [
          "static/images/devTool/CocosCreator3_bitmapFont3.webp"
        ],
        "video": []
      }
    ]
  },
  {
    name: "導入映射工具",
    info: "提供一個操作介面方便使用導入映射(import-map)功能。",
    tags: ["#CocosCreator3擴展"],
    image: "/static/images/logo/import-map.png",
    page: [
      {
        "title": "介面",
        "images": [
          "static/images/devTool/CocosCreator3_import-maps-tool.webp"
        ],
        "video": []
      }
    ]
  },
  {
    name: "圖片壓縮工具",
    info: "使用TinyPNG的圖片壓縮工具，壓縮指定路徑下的圖片，有快取功能。",
    tags: ["#CocosCreator3擴展"],
    image: "/static/images/logo/tinypng.png",
    page: [
      {
        "title": "介面",
        "images": [
          "static/images/devTool/CocosCreator3_tinypng.webp"
        ],
        "video": []
      }
    ]
  },
  {
    name: "專案部署工具",
    info: "自動化部署CocosCreator專案所需檔案。",
    tags: ["#CocosCreator3擴展"],
    image: "/static/images/logo/project_deploy.png",
    page: [
      {
        "title": "介面",
        "images": [
          "static/images/devTool/CocosCreator3_ProjectDeploy.webp"
        ],
        "video": []
      }
    ]
  }
];

export function DevTool() {
  return <GridContainer infoList={infoList}></GridContainer>;
}
