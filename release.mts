import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import yargs from 'yargs/yargs';

const { dryRun, verbose, version } = await yargs(process.argv.slice(2))
  .version(false)
  .option('version', {
    type: 'string',
  })
  .option('dryRun', {
    alias: 'd',
    type: 'boolean',
    default: true,
  })
  .option('verbose', {
    type: 'boolean',
    default: false,
  })
  .parseAsync();

const { workspaceVersion, projectsVersionData } = await releaseVersion({
  specifier: version,
  dryRun,
  verbose,
});

await releaseChangelog({
  versionData: projectsVersionData,
  version: workspaceVersion,
  dryRun,
  verbose,
});

const publishStatus = await releasePublish({ dryRun, verbose });
