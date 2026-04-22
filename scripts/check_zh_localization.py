#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ROOT = ROOT / 'src/content/zh'

BANNED_PHRASES = {
	'船上体验': '车上体验',
	'清晰签名': '标识清楚',
	'大号': '很大 / 大型',
	'城市到城市': '城际',
	'组织登机': '有序登机 / 有序上车',
	'平板登机': '方便上下车 / 无障碍上车',
	'进入登机口': '通过闸机',
	'门票验证': '车票核验',
	'真相来源': '最权威的信息来源',
	'如果存在火车，则它存在于 12306 上': '只要车次对外发售，通常就能在 12306 查到',
	'无需英语即可保持联系': '不会英语也能保持联络',
}


def iter_files(paths: list[str]) -> list[Path]:
	if not paths:
		return sorted(DEFAULT_ROOT.rglob('*.mdx'))

	collected: list[Path] = []
	for raw in paths:
		path = (ROOT / raw).resolve() if not Path(raw).is_absolute() else Path(raw)
		if path.is_dir():
			collected.extend(sorted(path.rglob('*.mdx')))
		elif path.is_file():
			collected.append(path)
	return collected


def main(argv: list[str] | None = None) -> int:
	args = argv if argv is not None else sys.argv[1:]
	files = iter_files(args)
	issues = 0

	for path in files:
		text = path.read_text()
		for line_number, line in enumerate(text.splitlines(), start=1):
			for phrase, suggestion in BANNED_PHRASES.items():
				if phrase not in line:
					continue
				issues += 1
				relative = path.relative_to(ROOT)
				print(f'{relative}:{line_number}: found "{phrase}" -> consider "{suggestion}"')

	if issues:
		print(f'\nFound {issues} Chinese localization issue(s).')
		return 1

	print(f'No banned Chinese localization phrases found in {len(files)} file(s).')
	return 0


if __name__ == '__main__':
	raise SystemExit(main())
