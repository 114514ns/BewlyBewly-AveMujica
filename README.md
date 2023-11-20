<p align="center" style="margin-bottom: 0px !important;">
<img width="150" src="https://user-images.githubusercontent.com/33394391/160250512-410b71fc-7f25-4caf-b850-429227ff082a.png"><br/>
</p>

<h1 align="center" style="margin-top: 0px;">BewlyBewly</h1>

<p align="center">Just make a few small changes to your Bilibili homepage.</p>

![Image 3840x2400](https://github.com/hakadao/BewlyBewly/assets/33394391/ad726480-e6ef-4823-82e0-e3c3735a3909)
![Snipaste_2023-11-21_00-26-26](https://github.com/hakadao/BewlyBewly/assets/33394391/b1c1c25a-482a-438f-8e61-4d67cb32aea1)
![Snipaste_2023-11-21_00-30-03](https://github.com/hakadao/BewlyBewly/assets/33394391/1a9f0c56-5053-40d9-bec8-72665f85962d)
![Snipaste_2023-11-21_00-30-30](https://github.com/hakadao/BewlyBewly/assets/33394391/4cb44949-8352-4607-9dd4-74a8d1e00a74)
![Snipaste_2023-11-21_00-31-33](https://github.com/hakadao/BewlyBewly/assets/33394391/9ebebfd9-d8a8-411d-8c10-cf7cdb60abd4)
![Snipaste_2023-11-21_00-31-54](https://github.com/hakadao/BewlyBewly/assets/33394391/86ad5303-56b2-4d68-985d-300f2825ee49)
![Snipaste_2023-11-21_00-32-06](https://github.com/hakadao/BewlyBewly/assets/33394391/64b6eac1-d9ee-4157-a850-b940700a565b)
![Snipaste_2023-11-21_00-32-22](https://github.com/hakadao/BewlyBewly/assets/33394391/2533a1f9-3cb1-402e-96bb-3755404ddf02)
![Snipaste_2023-11-21_00-32-51](https://github.com/hakadao/BewlyBewly/assets/33394391/a439ea59-cc80-48aa-9c6a-ec5d4da98441)

## ⬇️ Installation
Even in the Edge browser, we strongly recommend you install it in the Chrome web store. In terms of review speed, the Chrome web store is slightly faster than Edge Add-ons.
- Chrome: <https://chrome.google.com/webstore/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp/related?hl=en>
- Edge: <https://microsoftedge.microsoft.com/addons/detail/bewlybewly/kceadhehfjdiakpiphpjgolbgehjdmja>
- Firefox: **I NEED SOME HELP!!!!!!!!!!!!!!!!!! ( ；∀；)**

### Local Installation

#### Edge & Chrome (RECOMMENDED)
> Ensure you installed [extension.zip](https://github.com/hakadao/BewlyBewly/releases) and decompress this file.

Opening the `chrome://extensions` page in the browser, simply drag and drop the downloaded `extension.zip` file into the browser to complete the installation.

<details>
 <summary> Another installation method for Edge & Chrome </summary>
 
#### Edge
>
> Ensure you installed [extension.zip](https://github.com/hakadao/BewlyBewly/releases) and decompress this file.

1. Type in `edge://extensions/` in the address bar and press Enter
2. Turn on `Developer mode` then press `Load unpacked` <br/> <img width="655" alt="image" src="https://user-images.githubusercontent.com/33394391/232246901-e3544c16-bde2-480d-b770-ca5242793963.png">
3. Load the decompressed extension folder in your browser

#### Chrome
>
> Ensure you installed [extension.zip](https://github.com/hakadao/BewlyBewly/releases) and decompress this file.

1. Type in `chrome://extensions/` in the address bar and press Enter
2. Turn on `Developer mode` then press `Load unpacked` <br/> <img width="655" alt="Snipaste_2022-03-27_18-17-04" src="https://user-images.githubusercontent.com/33394391/160276882-13da0484-92c1-47dd-add8-7655c5c2bf1c.png">
3. Load decompressed exetension folder in your browser

</details>

## 🔧 Development & build

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**.
After each modification, you need to click the [Extensions Reloader](https://chrome.google.com/webstore/detail/fimgfedafeadlieiabdeeaodndnlbhid) button and refresh the page to ensure the changes would be applied.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`

## ❤️ Credits

- [vitesse-webext](https://github.com/antfu/vitesse-webext) - The template used for this project
- [UserScripts/bilibiliHome](https://github.com/indefined/UserScripts/tree/master/bilibiliHome), [bilibili-app-recommend](https://github.com/magicdawn/bilibili-app-recommend) - Reference source for obtaining the access key
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) - Partial implementation of functionalities
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
