var exec = require('child_process').exec


exec('git remote -v', function(err, stdout, stdrr) {
  var show = stdout.trim()
  console.log(show,'====',show.match("upstream"),'----------',show.match("github.com[\:\/]jlord/"))
  if (show.match("upstream") && show.match("github.com[\:\/]arrow1802/")) {
    console.log("Upstream remote set up!")
  } else {
    return console.log("No upstream remote")
  }
})
