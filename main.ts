// news-image-20261126 — World News Front Page, Thursday 26 November 2026.
// Node 22, standard library only. The entry is the pre-rendered front page
// (entry.png: 44 dated headlines across 10 regions, 1024x1024) beside this
// file; the program copies it to the grader's output directory.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
