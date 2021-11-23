# firebase-hosting-cache-test

## 検証

### デフォルト

コンテンツのキャッシュはデフォルト 3600sec、functions はなし

### Status 200

firebase.json の headers で指定すると、その値に上書きがされる  
ワイルドカードでマッチしたものも含む

### Status 404

firebase.json で書き換えられない  
functions で Cache-Control を指定すると、その値がそのまま出力される

functions からの smax-age は効く  
未指定だと 1 時間キャッシュされる様子

エミュレータでは firebase.json で書き換えられる

## まとめ

functions のキャッシュは処理のレスポンスヘッダーで管理するようにする  
(ネガティブキャッシュの 1 時間が長すぎるときは smax-age で調整)

firebase.json で、

```
{
  "source": "**",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=600"
    }
  ]
},
```

のようにしてしまうと、成功した functions の Cache-Control が上書きされてしまうので注意
