# dbdapi

[deadbydaylight.com](https://deadbydaylight.com/)からデータを取得します

## インストール

```sh
npm install dbdapi
```

## 使用例

サバイバーのパーク一覧を取得

```javascript
import { getCharacters, getCharacter } from "dbdapi"; //import

(async () => {
  const characters = await getCharacters(); //キャラクター一覧を取得
  const survivors = characters.filter((char) => char.role === "survivor"); //サバイバーのみにフィルタ

  const parks = (
    await Promise.all(
      survivors.map(async (surv) => {
        const survivor = await getCharacter(surv.slug, "ja"); //slugからキャラクターの詳細を取得
        return survivor?.powerPerks;
      }),
    )
  ).flat();

  console.log(parks); //表示
})();
```

## 注意

このライブラリは非公式で [公式サイト](https://deadbydaylight.com/) からデータを取得しています  
何か問題があった場合には削除します
