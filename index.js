const gitRemoteOriginUrl = require('git-remote-origin-url')
const gitRemoteUpstreamUrl = require('git-remote-upstream-url')

function getRepoFromConfig () {
  return gitRemoteUpstreamUrl()
    .catch(() => gitRemoteOriginUrl())
    .then(res => res.match(/([^/:]+\/[^/.]+)(\.git)?$/)[1])
}

module.exports = getRepoFromConfig()

