export default {
    index: {
        "auth-sign-in-title": "Seedフレーズでログイン",

        "auth-sign-up-seed-title": "ウォレットを作成する",
        "auth-sign-in-seed-text": "Seedフレーズまたは秘密鍵を入力してください。",
        "auth-sign-in-seed-button": "ログイン",
        "auth-sign-in-key-button": "Keystoreファイルでログイン",

        "auth-sign-up-seed-generate": "Seedフレーズを再生する",
        "auth-sign-up-keystore-generate": "Keystoreファイルを再生する",
        "auth-sign-up-seed-offline": "お使いのデバイスで生成する（Github）"
    },
    common: {
        "page-wallet": "ポートフォリオ",
        "page-convert": "交換所",
        "page-delegation": "委任",
        "page-masternode": "マスターノード",
        "page-coiner": "独自コインを発行",
        "page-buy": "コインを購入",
        "page-account": "アカウント",

        "page-api": "API",
        "page-explorer": "エクスプローラー",
        "page-faq": "よくある質問・お問い合わせ"
    },
    wallet: {
        "address": "私のアドレス",
        "balance": "残高",
        "send-title": "コインを送金する",
        "send-description": "ご友人、ご家族、ビジネスパートナーなど、誰でもコインを転送できます。",
        "coin": "コイン",

    },
    form: {
        "amount-error-required": "アドレスを入力してください",
        "wallet-send-address": "アドレス、又はドメインを入力して下さい",
        "fee": "手数料用コイン",
        "wallet-send-fee-same": "Same as coin to send",
        "wallet-send-fee-base": "ベースコイン",
        "wallet-send-amount": "金額",
        "coin": "コイン",
        "use-max": "全部",
        "toggle-advanced-mode": "追加機能",
        "message-help": "トランザクションに関する追加情報。ブロックチェーンに保存され、誰でも見ることができるので、ご注意ください。最大1024字まで記入できます。",
        "message": "メッセージ",
        "message-error-max": "Max 1024 symbols",
        "wallet-send-address-error-required": "アドレスを入力してください",
        "wallet-send-button": "送金",

        "coiner-create-price": "初期価格",
        "coiner-create-name" : "コイン名称",
        "coiner-create-name-error-required": "コインの名称を入力して下さい。",
        "coiner-create-name-error-max": "Max 64 letters",
        "coiner-create-name-help": "コインを名付けて、フルネーム（例えば、ビットコイン）をこちらに記入します。コイン名称は、64文字以内にしてください。",
        "coiner-create-symbol": "コインのシンボル",
        "coiner-create-amount": "初期発行枚数",
        "coiner-create-reserve": "初期担保",
        "coiner-create-reserve-error-required": "金額を入力してください。",

        "generate-nonce-error-min": "Minimum nonce is 1",
        "checks-issue-nonce-error-required": "Enter nonce",
        "generate-button": "Generate",
        "toggle-simple-mode": "追加機能を隠す",
        "tx-sent": "Tx sent:",
        "generate-result-tx": "Signed tx:",
        "convert-sell-coin-sell": "販売希望コイン",
        "convert-sell-coin-get": "受取希望コイン",
        "convert-buy-coin-spend": "販売するコイン",
        "coiner-create-crr-error-required": "CRRを入力してください。",
        "coiner-create-crr-error-between": "CRR should be between 10 and 100",
        "coiner-create-crr-help": "固定担保率（Constant Reserve Ratio、CRR）は、新しく発行したコインを担保するために使ったノアの量を反映しています。係数が高いほど、担保量が高くなり、ボラティリティが低くなります。その逆に、係数が低いと、担保量が少なくなり、変動性が上がります。値は10〜100の範囲の整数である必要があります。",
        "coiner-create-crr": "固定担保率",
        "coiner-create-button": "作成する",
        "coiner-create-symbol-help": "ティッカーシンボル（例えば、BTC）を入力してください。ユニークで、アルファベットの大文字からなり、3字〜10字までの記号を含めなければなりません。",
        "coin-error-required": "コインのシンボルを入力してください。",
        "coin-error-min": "Min 3 letters",
        "coin-error-max": "Max 10 letters",
        "convert-sell-fee-same": "Same as coin to sell",
        "convert-sell-confirm-send": "You will send",
        "convert-sell-confirm-receive": "You will get approximately *",
        "submit-confirm-button": "Confirm",
        "convert-sell-amount": "金額",
        "convert-buy-coin-buy": "購入希望コイン",
        "convert-buy-amount": "金額",
        "convert-buy-button": "購入",
        "convert-sell-button": "交換する",
        "masternode-stake": "ステーク",
        "masternode-public": "公開鍵またはドメイン",
        "delegation-delegate-button": "委任",
        "delegation-unbond-button": "解放",
        "masternode-stake-error-required": "ステークを入力してください。",
        "convert-confirm-note": "* The result amount depends on the current rate at the time of the exchange and may differ from the above."
    },
    "convert": {
        "sell-description": "売りたいコイン及び金額を指定してください。",
        "sell-title": "販売",
        "convert-sell-coin-sell": "販売希望コイン",
        "convert-title": "Convert Coins",
        "buy-title": "購入",
        "buy-description": "特定のコインを購入したい場合は、こちらで購入できます。",
    },
    "delegation": {
        "delegate-title": "委任",
        "delegate-description": "保有しているコインはバリデーターに委任し、参加条件に従って報酬もらうことができます。",
        "unbond-title" : "解放",
        "unbond-description": "委任されたコインはバリデーターから解放したい場合、解放のリクエストを送信することが必要です。リクエストが送信されて日から30日以内にコインが解放されます。",
        "reinvest-generate-title": "Delegation Transactions",
        "reinvest-generate-description": "In order to enable automatic delegation, you will first need to generate a batch of transactions. You may do it either on-line or locally (we recommend that you use the second option as it is more secure). If you do it off-line, download the resulting file and proceed to the next step. If you do it on-line, generated transactions will be sent to auto-delegation server automatically.",

    },
    "coiner": {
        "create-title": "コインを作成する",
        "create-description": "こちらは独自のコインをゼロから作成できます。支払ための通貨、セキュリティまたはユーティリティトークン、権利、投票権など、コインの役割を自ら設定できます。",
    },
    "account": {
        "title": "アカウント",
        "address": "アドレス:",
        "mnemonic":"ニーモニックフレーズ：",
        "currency": "通貨：",
        "click-view": "クリックして確認する",
        "": ""
    }
};
