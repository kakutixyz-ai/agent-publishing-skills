param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]] $InstallerArgs
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..\..")
$Installer = Join-Path $RepoRoot "bin\agent-publishing-skills.js"

node $Installer install --target codex @InstallerArgs
exit $LASTEXITCODE
