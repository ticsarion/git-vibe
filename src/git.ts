import { exec } from 'child_process';
import { promisify } from 'util';
import pc from 'picocolors';

const execAsync = promisify(exec);

export async function getStagedDiff(): Promise<string> {
  try {
    // Standard git diff for staged changes
    const { stdout } = await execAsync('git diff --cached');
    
    // Check if empty
    if (!stdout || !stdout.trim()) {
      throw new Error(pc.yellow("No staged changes found. Did you forget to run 'git add'?"));
    }
    
    return stdout;
  } catch (error: any) {
    // If it's our warning, rethrow
    if (error.message && error.message.includes('No staged changes found')) {
      throw error;
    }
    
    // Check if error comes from git itself
    throw new Error(pc.red(`Failed to get git diff. Are you inside a git repository?\nDetails: ${error.message}`));
  }
}
