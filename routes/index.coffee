exports.index = (req, resp, next) ->
  resp.render 'index', { title: 'Express' }
