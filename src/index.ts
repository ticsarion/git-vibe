#!/usr/bin/env node

import { Command } from 'commander';
import pc from 'picocolors';
import { getStagedDiff } from './git.js';

const program = new Command();

program
  .name('git-vibe')
  .description('AI-powered conventional commit message generator')
  .version('1.0.0')
  .action(async () => {
    try {
      console.log(pc.blue('Analyzing git diff...'));
      
      const diff = await getStagedDiff();
      
      console.log(pc.green('Diff retrieved successfully!'));
      console.log(pc.gray('--- Git Diff ---'));
      console.log(diff);
      console.log(pc.gray('----------------'));
      
    } catch (error: any) {
       console.error(error.message || error);
       process.exit(1);
    }
  });

program.parse();
