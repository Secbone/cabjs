## Bonejs

class Bonejs
    constructor: (selector, size) ->
        @children = []

        selector = selector || 'canvas'
        size = size || [1, 1]
        @_canvas = document.querySelector selector
        @_parent = @_canvas.parentNode
        @_painter = @_canvas.getContext '2d'
        @setSize size
        @_bindEvent()
    getWebgl: ->
        @_gl = null
        @_gl = @_canvas.getContext 'webgl'
    start: ->
        requestAnimationFrame @runKeyframes
    setBackground: (color)->
        @_background = color
        @_clear()
    setSize: (size) ->
        @setWidth size[0]
        @setHeight size[1]
    setWidth: (width) ->
        @_width = width
        canvasWidth = if width>1 then width else @_canvas.parentNode.offsetWidth*width
        @_canvas.setAttribute "width", canvasWidth
    setHeight: (height) ->
        @_height = height
        canvasHeight = if height>1 then height else @_canvas.parentNode.offsetHeight*height
        @_canvas.setAttribute "height", canvasHeight
    getWidth: -> @_canvas.offsetWidth
    getHeight: -> @_canvas.offsetHeight
    _autoResize: =>
        @setSize [@_width, @_height]
    _bindEvent: ->
        window.addEventListener 'resize', @_autoResize
    _clear: ->
        @fillRect [0, 0, @getWidth(), @getHeight()], @_background
    draw: ->

    fillRect: (rectArray, color) ->
        @_painter.fillStyle = color
        @_painter.fillRect rectArray...
    append: (obj)->
        obj._setCanvas @
        @children.push obj
    runKeyframes: =>
        @_clear()
        for child in @children
            #console.log child
            child.keyframe()
            requestAnimationFrame @runKeyframes


extend = (options) ->
    for key, value of options
        @[key] = value
    @

class Obj

    constructor: (options) ->
        options || (options = {})
        @x = options.x ? 0
        @y = options.y ? 0
        @initialize.apply @, arguments
    _setPainter: (painter) ->
        @painter = painter

    _setCanvas: (parent) ->
        @_parent = parent


class Bonejs.Object extends Obj

    constructor: (options) -> @

    extend: (options) =>
        for key, value of options
            @[key] = value
        @
    keyframe: ->

class Bonejs.Mouse extends Obj
    constructor: (options) ->
        @x = @y = 0
        @

    getMousePosition: ->
        {x: @x, y: @y}





Bonejs.Object.extend ＝ Bonejs.Mouse.extend = extend





window.$bone = Bonejs
