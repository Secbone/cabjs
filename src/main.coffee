class Bonejs
    constructor: (selector, size) ->
        selector = selector || 'canvas'
        size = size || [1, 1]
        @_canvas = document.querySelector selector
        @_parent = @_canvas.parentNode
        @_painter = @_canvas.getContext '2d'
        @setSize size
        @_bindEvent()
    setSize: (size) ->
        @setWidth size[0]
        @setHeight size[1]
    setWidth: (width) ->
        @_width = width
        canvasWidth = if width>1 then width else @_canvas.parentNode.offsetWidth*width
        @_canvas.style.width = "#{canvasWidth}px"
    setHeight: (height) ->
        @_height = height
        canvasHeight = if height>1 then height else @_canvas.parentNode.offsetHeight*height
        @_canvas.style.height = "#{canvasHeight}px"
    getWidth: ->
        @_canvas.offsetWidth
    getHeight: ->
        @_canvas.offsetHeight
    _autoResize: =>
        @setSize [@_width, @_height]
    _bindEvent: ->
        window.addEventListener 'resize', @_autoResize
    fillRect: (rectArray, color) ->
        @_painter.fillStyle = color
        @_painter.fillRect rectArray...

    window.B = Bonejs
