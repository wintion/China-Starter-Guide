# Codex Working Rules (ChinaStarterGuide)

1. Always read SPEC.md before making changes.
2. Keep changes minimal and scoped to the task.
3. Do NOT introduce external services in MVP.
4. Do NOT add dependencies unless strictly required; explain why if added.
5. Do NOT reformat unrelated files.
6. The entire site defaults to English. New pages, UI copy, content, and labels should be written in English unless a task explicitly requires another language.
7. For non-English content work, follow `LOCALIZATION.md` and prefer natural target-language writing over literal translation.
8. After changes, ensure:
   - `npm run dev` starts
   - `npm run build` succeeds
9. At the end, list files changed and what you did.
