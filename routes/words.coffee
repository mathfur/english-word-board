exports.list = (req, resp, next) ->
  resp.render 'words/index', {title: 'BAR'}
