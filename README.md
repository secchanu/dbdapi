# dbdapi

[deadbydaylight.com](https://deadbydaylight.com/)からデータを取得します

## 使用例

サバイバーのパーク一覧を取得

```javascript
import { getCharacters, getCharacter } from "dbdapi"; //import

(async () => {
	const charactersData = await getCharacters(); //キャラクター一覧を取得
	const characters = charactersData.allStrapiCharacters.nodes;
	const survivors = characters.filter((char) => char.role === "survivor"); //サバイバーのみにフィルタ

	const parks = await Promise.all(
		survivors.flatMap(async (surv) => {
			const survivor = await getCharacter(surv.slug, "ja"); //slugからキャラクターの詳細を取得
			return survivor.powerPerks;
		}),
	);

	console.log(parks); //表示
})();
```
