fetch("https://edge.qiwi.com/checkout-api/invoice/create", {
  "headers": {
    "accept": "application/json",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "TokenHeadV2 d2ViLXF3OjlmODQwNDYyN2VhNjhmYjA",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://qiwi.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"amount\":49,\"currency\":\"rub\",\"extras\":[{\"code\":\"themeCode\",\"value\":\"Yvan-AU-sUYrsSF\"},{\"code\":\"apiClient\",\"value\":\"p2p-admin\"},{\"code\":\"apiClientVersion\",\"value\":\"0.17.0\"},{\"code\":\"paySourcesFilter\",\"value\":\"card,qw,mobile\"}],\"customers\":[],\"public_key\":\"48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPsypyjmbfv5WwT9q9ZQSy1AjULwevMXNe6uK21yE5dZWsYhWW2vgdNer7ZojDPvn2vm8h8EQf6Fis9XfShjmp3NXLNmxVDxPBkW6iYpHda\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

fetch("https://edge.qiwi.com/checkout-api/invoice/create", {
  "headers": {
    "accept": "application/json",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "TokenHeadV2 Y2hlY2tvdXQtb2F1dGg6MzQ1MjA3YzY1MmZkMTIxZQ",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://qiwi.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"amount\":49,\"currency\":\"rub\",\"extras\":[{\"code\":\"themeCode\",\"value\":\"Yvan-AU-sUYrsSF\"},{\"code\":\"apiClient\",\"value\":\"p2p-admin\"},{\"code\":\"apiClientVersion\",\"value\":\"0.17.0\"},{\"code\":\"paySourcesFilter\",\"value\":\"card,qw,mobile\"}],\"customers\":[],\"public_key\":\"48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPsypyjmbfv5WwT9q9ZQSy1AjULwevMXNe6uK21yE5dZWsYhWW2vgdNer7ZojDPvn2vm8h8EQf6Fis9XfShjmp3NXLNmxVDxPBkW6iYpHda\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});