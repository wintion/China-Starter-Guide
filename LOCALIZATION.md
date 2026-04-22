# Localization Guide

## Default Rule

- The site defaults to English.
- Only localize content when the task explicitly requires another language.
- English source content is the source of truth for meaning, structure, and factual claims.

## Goal

Localization is not word-for-word translation. The goal is to produce copy that reads like it was originally written for the target reader.

For Simplified Chinese (`zh`), the standard is:
- natural Modern Chinese
- concise and practical
- accurate domain terminology
- written for foreign visitors, not for internal railway or airline staff

## Chinese Style Rules

- Use Simplified Chinese.
- Address the reader as `你`, not `您`, unless a page explicitly needs a more formal tone.
- Prefer clear spoken Chinese over literal translation.
- Keep product names, app names, route codes, and official platform names accurate.
- Translate for meaning first, sentence structure second, wording third.
- If the English sentence feels too long in Chinese, split it.
- If a literal translation sounds like a machine wrote it, rewrite it.

## Chinese Terminology

Use these terms consistently:

- `ticket` -> `车票`
- `boarding` -> `上车` for trains and metro
- `boarding` -> `登机` for flights
- `onboard` -> `车上`
- `platform` -> `站台`
- `station signage` -> `车站标识` or `标识清楚`
- `source of truth` -> `最权威的信息来源`
- `digital ticket` -> `电子票`
- `ticket verification` -> `车票核验`
- `check-in` -> `值机` for flights, `办理入住` for hotels
- `security check` -> `安检`
- `service desk` -> `服务台` or `客服中心`
- `door-to-door` -> `门到门`
- `ride-hailing` -> `网约车`
- `power bank` -> `充电宝`
- `carry-on` -> `随身行李`
- `checked baggage` -> `托运行李`

## Chinese Phrases To Avoid

These are common machine-translation failures and should be treated as red flags:

- `船上体验`
- `清晰签名`
- `大号`
- `城市到城市`
- `组织登机`
- `平板登机`
- `进入登机口`
- `门票验证`
- `真相来源`
- `如果存在火车，则它存在于 12306 上`
- `无需英语即可保持联系`

If any of these appear, rewrite the sentence instead of doing a tiny patch.

## Localization Workflow

For Chinese content:

1. Start from the English source.
2. Produce a draft translation.
3. Normalize terminology using this guide.
4. Run a Chinese localization phrase check.
5. Rewrite awkward paragraphs by hand.
6. Run `npm run build`.

## Review Standard

A localized page is ready to publish only if all of the following are true:

- It is factually faithful to the English source.
- It reads naturally to a native speaker.
- Category-specific terminology is correct.
- No obvious machine-translation artifacts remain.
- Links, headings, and markdown structure still build correctly.
