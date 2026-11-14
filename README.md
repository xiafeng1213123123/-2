# 我的优势，藏在哪些小事里？

这是一份可部署到 GitHub Pages 的手机问卷。保留手绘纸感界面、24题日常行为自评、六维结果、每小时口令、进度保存和结果分享图片。

## 用 GitHub 网页上传并部署

1. 在 GitHub 新建一个 **Public** 仓库，默认分支使用 `main`。不要把 ZIP 文件本身直接上传。
2. 解压部署包，把其中全部文件和文件夹上传到仓库根目录。确认仓库能看到 `.github/workflows/pages.yml`、`dist/index.html`、`scripts/prepare-pages.py` 和 `tests/scoring.test.mjs`。`dist` 不要改名；不要再套一层文件夹。
3. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 如果首次上传触发的工作流在配置 Pages 前失败：进入 **Actions → Deploy questionnaire to GitHub Pages → Run workflow**，选择 `main` 后运行。
5. 等待部署任务显示绿色。在 **Settings → Pages** 或部署任务的 `github-pages` 环境中打开正式网站地址。

GitHub Pages 发布后，访客不需要登录 ChatGPT 或 GitHub，即可打开介绍页；进入问卷仍需要本小时口令。网页和图片均使用相对路径，支持 `https://用户名.github.io/仓库名/` 这样的项目子目录。

如果本机隐藏了点开头的目录，请在文件管理器打开“显示隐藏项目”。上传后务必确认 `.github/workflows/pages.yml` 已存在，否则自动部署不会运行。

仓库只使用默认的 GitHub Actions 权限，无需添加自定义部署令牌。整个流程上传 `dist/` 网站目录，不发布 `scripts/`、`tests/` 或本地管理工具。

## 分享二维码

每次部署时，工作流从 GitHub Pages 读取实际站点地址，并自动生成结果页和分享图片中的二维码。修改仓库名或使用自定义域名后，重新运行工作流即可更新二维码。

包内不保留旧预览站的固定二维码。`dist/assets/entry-qr.svg` 会由部署流程生成，勿跳过 `Prepare share-card entry QR` 这一步。

## 每小时口令

口令规则与之前预览版保持一致。单独提供的 **“口令生成器-仅本地使用.html”** 留在自己电脑，用新版浏览器打开即可查看和复制当前六位口令。该文件不包含在部署包中，无需上传。

口令按设备时间在每小时整点切换，页面显示北京时间。已经进入问卷后，不会因为整点更换而中断。

这仍是约定的轻量纯前端门槛：访问者可以分析前端校验规则，有效期内可以转发同一个口令，修改设备时间也可能影响验证。它不提供服务端的一次性核销、防重放或强反爬保护。

## 问卷与记录

此版本为原创探索性日常行为自评，尚未经过信度、效度与年龄常模验证。不是标准化心理测验，不用于诊断或实际能力排名；结果页的“依据与计分”包含说明。

答案与结果只保存在当前浏览器，分享图本地生成。不接后端和数据库，不收集全站答案。访客可在结果页清除当前设备的记录。

## 本地预览与检查

需要 Node.js 22 或更新版本，无需安装 npm 依赖：

```powershell
node serve.mjs
node --test tests/scoring.test.mjs
```

本地预览要测试二维码和保存图片时，可以先安装生成工具并给出将要使用的站点地址：

```powershell
python -m pip install qrcode==8.2
$env:PAGES_BASE_URL = 'https://你的用户名.github.io/你的仓库名/'
python scripts/prepare-pages.py
```

直接双击 `dist/index.html` 无法运行 ES modules，需使用本地服务器或 Pages 地址访问。

## 素材与字体

动物插画为本项目生成素材。中文手写字体采用 LXGW WenKai Lite 的项目用字子集，许可证在 `dist/assets/FONT-LICENSE.txt`。字体、动物图、样式和脚本均随包提供，访客访问时无需加载外部 CDN。

部署方法参考 GitHub 官方文档：
[Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
