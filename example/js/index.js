//(function(){

    var $canvas = document.getElementById("mycanvas");
    var horizAspect = 480/640;
    var gl = initWebGL($canvas);

    if(gl){
        gl.clearColor(0,0,0,1);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.viewport(0, 0, $canvas.width, $canvas.height);
    }

    initShaders(gl);

    initBuffers();

    drawScene();

    function initWebGL($canvas){
        var gl =null;
        try{
            gl = $canvas.getContext("webgl") || $canvas.getContext("experimental-webgl");
        }catch(e){}

        return gl;
    }

    function initShaders(gl){
        var fragmentShader = getShader(gl, "shader-fs");
        var vertexShader = getShader(gl, "shader-vs");

        shaderProgram = gl.createProgram();

        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);

        gl.linkProgram(shaderProgram);

        if(gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
            alert("Program failed");
        }

        gl.useProgram(shaderProgram);

        vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(vertexPositionAttribute);
    }

    function getShader(gl, id){
        var shader = null;
        var $shaderScript = document.getElementById(id);

        var theSource = "";
        var $currentChild = $shaderScript.firstChild;

        while($currentChild){
            if($currentChild.nodeType == $currentChild.TEXT_NODE){
                theSource += $currentChild.textContent;
            }

            $currentChild = $currentChild.nextSibling;
        }

        if($shaderScript.type == "x-shader/x-fragment"){
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }else if($shaderScript.type == "x-shader/s-vertex"){
            shader = gl.createShader(gl.VERTEX_SHADER);
        }else{
            return null;
        }

        gl.shaderSource(shader, theSource);

        gl.compileShader(shader);

        return shader;
    }

    function initBuffers(){
        squareVerticesBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

        var vertices = [
             1.0,  1.0,  0.0,
            -1.0,  1.0,  0.0,
             1.0, -1.0,  0.0,
            -1.0, -1.0,  0.0
        ];

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    }

    function drawScene(){
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        perspectiveMatrix = makePerspective(45, 640/480, 0.1, 100);

        loadIdentity();
        mvTranslate([-0.0, 0.0, -6.0]);

        gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
        gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
//})
