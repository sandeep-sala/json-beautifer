window.addEventListener('DOMContentLoaded', function() {
    try {
        var k = localStorage.getItem("json_data");
        document.getElementById('beautifer-block_input_01').value = k
    } catch (error) {
        console.log('%cError', 'background: red;padding:5px;border-radius:5px;color:white;display: block;', error);
    }
}, true);

function beautify() {
    var e = document.getElementById('beautifer-block_input_01').value
    try {
        var p = JSON.stringify(JSON.parse(e), undefined, 4)
        document.getElementById('beautifer-block_input_02').value = p
        localStorage.setItem("json_data", p);
    } catch (error) {
        console.log('%cError', 'background: red;padding:5px;border-radius:5px;color:white;display: block;', error);
    }
}

function minify() {
    var e = document.getElementById('beautifer-block_input_01').value
    try {
        var p = JSON.stringify(JSON.parse(e))
        document.getElementById('beautifer-block_input_02').value = p
        localStorage.setItem("json_data", p);
    } catch (error) {
        console.log('%cError', 'background: red;padding:5px;border-radius:5px;color:white;display: block;', error);
    }
}