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
    fillRect: (rectArray, color) ->
        @_painter.fillStyle = color
        @_painter.fillRect rectArray...
    append: (obj)->
        @children.push obj
    runKeyframes: =>
        for child in @children
            console.log child
            #keyframe.call child
            child.keyframe()


Bonejs.Object = class Obj
    constructor: (options) ->
        @extend options
        #Bonejs.append @
    extend: (options) ->
        for value, key in options
            @[key] = value
        console.log @
    keyframe: ->




window.$bone = Bonejs
